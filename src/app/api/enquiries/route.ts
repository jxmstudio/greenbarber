import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const enquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceType: z.string().min(1),
  message: z.string().min(10),
  urgency: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = enquirySchema.parse(body);

    // Prepare email content
    const serviceTypeLabels: Record<string, string> = {
      "tree-removal": "Tree Removal",
      "stump-grinding": "Stump Grinding",
      "crane-work": "Crane Work",
      "tree-pruning": "Tree Pruning",
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

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
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

