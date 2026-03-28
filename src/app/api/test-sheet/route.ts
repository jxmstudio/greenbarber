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
    // Step 1: POST to Apps Script, capture the 302 redirect
    const res1 = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "manual",
    });

    const redirectUrl = res1.headers.get("location");

    if (!redirectUrl) {
      const body = await res1.text().catch(() => "(no body)");
      return NextResponse.json({ step: "initial_post", status: res1.status, body });
    }

    // Step 2: Follow the redirect to get the actual doPost response
    const res2 = await fetch(redirectUrl);
    const body = await res2.text().catch(() => "(no body)");

    return NextResponse.json({
      step: "followed_redirect",
      status: res2.status,
      body,
      webhookUrlSet: true,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
