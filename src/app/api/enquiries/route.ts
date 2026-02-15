import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string().min(1),
  message: z.string().min(10),
  urgency: z.string().optional(),
});

// Helper: append lead data to Google Sheet via Apps Script webhook
async function appendToGoogleSheet(data: z.infer<typeof enquirySchema>) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("GOOGLE_SHEET_WEBHOOK_URL not set — skipping sheet write");
    return;
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    serviceType: data.serviceType,
    urgency: data.urgency || "Not specified",
    message: data.message,
  };

  // Google Apps Script returns a 302 redirect after processing the POST.
  // We use redirect: "manual" because auto-follow changes POST to GET,
  // which breaks the response. The data IS written on the initial POST.
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "manual",
  });

  // 302 = success (Apps Script processed the POST and is redirecting to the response)
  // 200 = success (direct response)
  if (res.status !== 302 && res.status !== 200) {
    const responseText = await res.text();
    throw new Error(`Google Sheet webhook responded with ${res.status}: ${responseText}`);
  }

  console.log("Google Sheet webhook: lead saved successfully");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = enquirySchema.parse(body);

    // Prepare email content
    const serviceTypeLabels: Record<string, string> = {
      "hedge-trimming": "Hedge Trimming",
      "tree-pruning": "Tree Pruning & Reductions",
      "tree-removal": "Tree Removal",
      "stump-grinding": "Stump Grinding",
      "other": "Other",
    };

    const urgencyLabels: Record<string, string> = {
      routine: "Routine - No rush",
      soon: "Soon - Within a week",
      urgent: "Urgent - Within 48 hours",
      emergency: "Emergency - ASAP",
    };

    const emailContent = `
New Contact Form Submission - The Green Barber

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Service Type: ${serviceTypeLabels[validatedData.serviceType] || validatedData.serviceType}
Urgency: ${validatedData.urgency ? urgencyLabels[validatedData.urgency] || validatedData.urgency : "Not specified"}

Message:
${validatedData.message}

---
This message was sent from the contact form on The Green Barber website.
    `.trim();

    // Send email via Resend
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "noreply@thegreenbarber.com.au",
        to: process.env.CONTACT_EMAIL,
        subject: `New Enquiry: ${serviceTypeLabels[validatedData.serviceType] || "General Enquiry"} - ${validatedData.name}`,
        text: emailContent,
      });
    } else {
      // Log to console if Resend is not configured
      console.log("Email would be sent:", {
        to: process.env.CONTACT_EMAIL || "info@thegreenbarber.com.au",
        subject: `New Enquiry: ${serviceTypeLabels[validatedData.serviceType] || "General Enquiry"}`,
        content: emailContent,
      });
    }

    // Append lead to Google Sheet (fire-and-forget — don't block the response)
    try {
      await appendToGoogleSheet(validatedData);
    } catch (sheetError) {
      console.error("Failed to write to Google Sheet:", sheetError);
      // Don't fail the form submission if the sheet write fails
    }

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

