import { NextRequest, NextResponse } from 'next/server';
import { sendAdminNotification, sendConfirmationEmail, logToGoogleSheets } from '@/lib/email';

// Health check endpoint
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Form submission API is running',
        timestamp: new Date().toISOString(),
        env: {
            hasSmtpHost: !!process.env.SMTP_HOST,
            hasSmtpUser: !!process.env.SMTP_USER,
            hasSheetsUrl: !!process.env.GOOGLE_SHEETS_WEB_APP_URL
        }
    });
}

export async function POST(request: NextRequest) {
    console.log('API: Form submission request received');
    try {
        const bodyText = await request.text();
        console.log('API: Request body size:', bodyText.length);

        let data;
        try {
            data = JSON.parse(bodyText);
        } catch (e) {
            console.error('API: Invalid JSON:', e);
            return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
        }

        const { formType, ...formData } = data;
        console.log('API: Processing form type:', formType);

        if (!formType) {
            return NextResponse.json(
                { success: false, error: 'formType is required' },
                { status: 400 }
            );
        }

        interface OperationResult {
            success: boolean;
            error?: unknown;
        }

        const results: {
            adminEmail: OperationResult;
            confirmationEmail: OperationResult;
            googleSheets: OperationResult;
        } = {
            adminEmail: { success: false },
            confirmationEmail: { success: false },
            googleSheets: { success: false },
        };

        // Send admin notification email
        console.log('API: Sending admin email...');
        try {
            const adminResult = await sendAdminNotification(formType, formData);
            console.log('API: Admin email result:', adminResult);
            results.adminEmail = adminResult;
        } catch (error) {
            console.error('API: Admin notification error:', error);
            results.adminEmail = { success: false, error: String(error) };
        }

        // Send confirmation email to user (if email provided)
        if (formData.email) {
            console.log('API: Sending user confirmation email to:', formData.email);
            try {
                const confirmResult = await sendConfirmationEmail(formType, formData);
                console.log('API: User confirmation result:', confirmResult);
                results.confirmationEmail = confirmResult;
            } catch (error) {
                console.error('API: Confirmation email error:', error);
                results.confirmationEmail = { success: false, error: String(error) };
            }
        }

        // Log to Google Sheets
        console.log('API: Logging to Google Sheets...');
        try {
            const sheetsResult = await logToGoogleSheets(formType, formData);
            console.log('API: Google Sheets result:', sheetsResult);
            results.googleSheets = sheetsResult;
        } catch (error) {
            console.error('API: Google Sheets error:', error);
            results.googleSheets = { success: false, error: String(error) };
        }

        // Return success if at least admin email or Google Sheets succeeded
        const overallSuccess = results.adminEmail.success || results.googleSheets.success;
        console.log('API: Overall success:', overallSuccess);

        return NextResponse.json({
            success: overallSuccess,
            message: overallSuccess
                ? 'Form submitted successfully'
                : 'Form submission failed',
            details: results,
        });
    } catch (error) {
        console.error('API: Critical error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error: ' + String(error) },
            { status: 500 }
        );
    }
}
