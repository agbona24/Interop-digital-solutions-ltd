/**
 * Google Apps Script for Interop Digital Solutions Form Submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this entire script
 * 4. Create a Google Sheet with these tabs (exact names):
 *    - Newsletter
 *    - Contact
 *    - Appointment
 *    - ProductInquiry
 *    - Careers
 *    - Quiz
 * 5. Update the SPREADSHEET_ID below with your sheet's ID
 *    (The ID is in the URL: https://docs.google.com/spreadsheets/d/YOUR_ID_HERE/edit)
 * 6. Deploy as Web App:
 *    - Click "Deploy" > "New deployment"
 *    - Select type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy" and copy the URL
 * 7. Add the URL to your .env.local as GOOGLE_SHEETS_WEB_APP_URL
 */

// ============================================
// CONFIGURATION - UPDATE THIS WITH YOUR SHEET ID
// ============================================
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

// ============================================
// MAIN FUNCTION - Handles POST requests
// ============================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    if (!formType) {
      return createResponse(false, 'Missing formType');
    }
    
    const result = appendToSheet(formType, data);
    return createResponse(result.success, result.message);
    
  } catch (error) {
    return createResponse(false, 'Error: ' + error.message);
  }
}

// For testing - handles GET requests
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Interop Digital Solutions Form Handler is active',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

// ============================================
// SHEET APPEND FUNCTIONS
// ============================================
function appendToSheet(formType, data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const timestamp = new Date().toISOString();
  
  let sheetName, rowData;
  
  switch(formType) {
    case 'newsletter':
      sheetName = 'Newsletter';
      rowData = [timestamp, data.email];
      break;
      
    case 'contact':
      sheetName = 'Contact';
      rowData = [timestamp, data.name, data.email, data.subject, data.message];
      break;
      
    case 'appointment':
      sheetName = 'Appointment';
      rowData = [
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.company,
        data.service,
        data.date,
        data.time,
        data.message
      ];
      break;
      
    case 'productInquiry':
      sheetName = 'ProductInquiry';
      rowData = [
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.company,
        data.productName,
        Array.isArray(data.interests) ? data.interests.join(', ') : data.interests,
        data.message
      ];
      break;
      
    case 'careers':
      sheetName = 'Careers';
      rowData = [
        timestamp,
        data.position,
        data.name,
        data.email,
        data.phone,
        data.linkedin,
        data.resumeUrl || 'No file',
        data.coverLetter
      ];
      break;
      
    case 'quiz':
      sheetName = 'Quiz';
      rowData = [
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.company,
        Array.isArray(data.services) ? data.services.join(', ') : data.services,
        data.timeline,
        data.budget,
        data.projectType,
        data.appointmentDate,
        data.appointmentTime,
        data.message
      ];
      break;
      
    default:
      return { success: false, message: 'Unknown form type: ' + formType };
  }
  
  try {
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      // Add headers based on form type
      const headers = getHeadersForFormType(formType);
      sheet.appendRow(headers);
    }
    
    sheet.appendRow(rowData);
    return { success: true, message: 'Data added to ' + sheetName };
    
  } catch (error) {
    return { success: false, message: 'Sheet error: ' + error.message };
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function getHeadersForFormType(formType) {
  switch(formType) {
    case 'newsletter':
      return ['Timestamp', 'Email'];
    case 'contact':
      return ['Timestamp', 'Name', 'Email', 'Subject', 'Message'];
    case 'appointment':
      return ['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Date', 'Time', 'Message'];
    case 'productInquiry':
      return ['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Product', 'Interests', 'Message'];
    case 'careers':
      return ['Timestamp', 'Position', 'Name', 'Email', 'Phone', 'LinkedIn', 'Resume URL', 'Cover Letter'];
    case 'quiz':
      return ['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Services', 'Timeline', 'Budget', 'Project Type', 'Appointment Date', 'Appointment Time', 'Message'];
    default:
      return ['Timestamp', 'Data'];
  }
}

function createResponse(success, message) {
  return ContentService.createTextOutput(JSON.stringify({
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
