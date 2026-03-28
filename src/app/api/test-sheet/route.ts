import { NextResponse } from "next/server";

export async function GET() {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "GOOGLE_SHEET_WEBHOOK_URL is not set" }, { status: 500 });
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: "TEST ENTRY",
    email: "test@test.com",
    phone: "0400000000",
    serviceType: "tree-removal",
    urgency: "routine",
    message: "This is a test submission from the /api/test-sheet endpoint. Safe to delete.",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "manual",
    });

    const body = await res.text().catch(() => "(no body)");

    return NextResponse.json({
      status: res.status,
      body,
      webhookUrlSet: true,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
