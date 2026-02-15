/**
 * Google Apps Script — paste this into your spreadsheet's Apps Script editor.
 *
 * Setup steps:
 *   1. Open https://docs.google.com/spreadsheets/d/132zAJDDFLSYqKVCjJZTeigYBvvRMPqhBoq7ILCDs8n0/edit
 *   2. Add these headers to Row 1: Timestamp | Name | Email | Phone | Service Type | Urgency | Message
 *   3. Go to Extensions > Apps Script
 *   4. Delete any existing code and paste everything below
 *   5. Click Deploy > New deployment
 *      - Type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   6. Copy the Web app URL and add it to your .env.local as GOOGLE_SHEET_WEBHOOK_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.serviceType || "",
      data.urgency || "Not specified",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: handle GET requests for testing
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Webhook is active" })
  ).setMimeType(ContentService.MimeType.JSON);
}
