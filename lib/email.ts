import nodemailer from 'nodemailer';

// Create reusable transporter with dynamic user/pass
const createTransporter = (user: string, pass: string) => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
};

// Email templates for different form types
const getEmailContent = (formType: string, data: Record<string, unknown>) => {
    const templates: Record<string, { subject: string; html: string }> = {
        newsletter: {
            subject: 'New Newsletter Subscription',
            html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
        contact: {
            subject: `Contact Form: ${data.subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
        appointment: {
            subject: `Appointment Booking: ${data.name}`,
            html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
        productInquiry: {
            subject: `Product Inquiry: ${data.productName}`,
            html: `
        <h2>New Product Inquiry</h2>
        <p><strong>Product:</strong> ${data.productName}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Interests:</strong> ${Array.isArray(data.interests) ? data.interests.join(', ') : data.interests}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
        careers: {
            subject: `Job Application: ${data.position}`,
            html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${data.position}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin || 'N/A'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${data.coverLetter || 'N/A'}</p>
        <p><em>Note: Resume was attached to the submission</em></p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
        quiz: {
            subject: `Consultation Request: ${data.name}`,
            html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Services:</strong> ${Array.isArray(data.services) ? data.services.join(', ') : data.services}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Appointment Date:</strong> ${data.appointmentDate}</p>
        <p><strong>Appointment Time:</strong> ${data.appointmentTime}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
        },
    };

    return templates[formType] || {
        subject: `Form Submission: ${formType}`,
        html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    };
};

// Confirmation email templates for users
const getConfirmationContent = (formType: string, data: Record<string, unknown>) => {
    const baseTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Interop Digital Solutions</h1>
      </div>
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        {{CONTENT}}
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="color: #6b7280; font-size: 14px;">
          If you have any questions, please contact us at 
          <a href="mailto:info@interopdigitalsolutions.com" style="color: #EA580C;">info@interopdigitalsolutions.com</a>
          or call us at +234 (906) 053-1418.
        </p>
        <p style="color: #6b7280; font-size: 12px;">
          Trinity Mall, 79, Awolowo Way, Ikeja, Lagos, Nigeria
        </p>
      </div>
    </div>
  `;

    const contents: Record<string, { subject: string; content: string }> = {
        newsletter: {
            subject: 'Welcome to Our Newsletter!',
            content: `
        <h2 style="color: #111827;">Thank You for Subscribing!</h2>
        <p>You've been successfully added to our newsletter list.</p>
        <p>You'll receive the latest updates on technology trends and our services directly in your inbox.</p>
      `,
        },
        contact: {
            subject: 'We Received Your Message',
            content: `
        <h2 style="color: #111827;">Thank You for Reaching Out!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message regarding <strong>"${data.subject}"</strong> and will get back to you within 24-48 hours.</p>
      `,
        },
        appointment: {
            subject: 'Appointment Confirmation',
            content: `
        <h2 style="color: #111827;">Your Appointment is Confirmed!</h2>
        <p>Hi ${data.name},</p>
        <p>Your consultation has been scheduled for:</p>
        <div style="background: #fff; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <p style="margin: 5px 0;"><strong>Date:</strong> ${data.date}</p>
          <p style="margin: 5px 0;"><strong>Time:</strong> ${data.time}</p>
          <p style="margin: 5px 0;"><strong>Service:</strong> ${data.service}</p>
        </div>
        <p>We look forward to speaking with you!</p>
      `,
        },
        productInquiry: {
            subject: `Your Inquiry About ${data.productName}`,
            content: `
        <h2 style="color: #111827;">Thank You for Your Interest!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your inquiry about <strong>${data.productName}</strong>.</p>
        <p>Our product specialists will reach out to you within 24 hours with detailed information.</p>
      `,
        },
        careers: {
            subject: 'Application Received',
            content: `
        <h2 style="color: #111827;">Thank You for Applying!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your application for <strong>${data.position}</strong>.</p>
        <p>Our hiring team will review your application and get back to you within 5-7 business days.</p>
      `,
        },
        quiz: {
            subject: 'Consultation Request Confirmed',
            content: `
        <h2 style="color: #111827;">Your Consultation is Scheduled!</h2>
        <p>Hi ${data.name},</p>
        <p>Your free consultation has been scheduled for:</p>
        <div style="background: #fff; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <p style="margin: 5px 0;"><strong>Date:</strong> ${data.appointmentDate}</p>
          <p style="margin: 5px 0;"><strong>Time:</strong> ${data.appointmentTime}</p>
          <p style="margin: 5px 0;"><strong>Services:</strong> ${Array.isArray(data.services) ? data.services.join(', ') : data.services}</p>
        </div>
        <p>Our team will contact you to discuss your project requirements.</p>
      `,
        },
    };

    const template = contents[formType];
    if (!template) return null;

    return {
        subject: template.subject,
        html: baseTemplate.replace('{{CONTENT}}', template.content),
    };
};

// Send email to admin
export const sendAdminNotification = async (formType: string, data: Record<string, unknown>) => {
    const transporter = createTransporter(
        process.env.SMTP_FROM || '',
        process.env.SMTP_PASSWORD || ''
    );
    const { subject, html } = getEmailContent(formType, data);

    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `[Interop Website] ${subject}`,
            html,
        });
        return { success: true };
    } catch (error) {
        console.error('Admin email error:', error);
        return { success: false, error };
    }
};

// Send confirmation email to user
export const sendConfirmationEmail = async (formType: string, data: Record<string, unknown>) => {
  const userEmail = data.email as string;
  if (!userEmail) return { success: false, error: 'No user email provided' };

  const template = getConfirmationContent(formType, data);
  if (!template) return { success: false, error: 'No confirmation template for this form type' };

  const transporter = createTransporter(
    process.env.SMTP_FROM || '',
    process.env.SMTP_PASSWORD || ''
  );

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: userEmail,
      subject: template.subject,
      html: template.html,
    });
    return { success: true };
  } catch (error) {
    console.error('Confirmation email error:', error);
    return { success: false, error };
  }
};

// Log to Google Sheets via Web App
export const logToGoogleSheets = async (formType: string, data: Record<string, unknown>) => {
    const webAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL;
    if (!webAppUrl) {
        console.warn('Google Sheets Web App URL not configured');
        return { success: false, error: 'Google Sheets not configured' };
    }

    try {
        const response = await fetch(webAppUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formType, ...data }),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Google Sheets error:', error);
        return { success: false, error };
    }
};
