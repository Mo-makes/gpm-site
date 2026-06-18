import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  isNewPatient: "yes" | "no";
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  message: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.firstName === "string" &&
    typeof d.lastName === "string" &&
    typeof d.phone === "string" &&
    typeof d.email === "string" &&
    (d.isNewPatient === "yes" || d.isNewPatient === "no") &&
    typeof d.message === "string" &&
    d.firstName.trim().length > 0 &&
    d.lastName.trim().length > 0 &&
    d.email.includes("@") &&
    d.message.trim().length >= 10
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "info@globalpainmd.com";

  if (!resendApiKey) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "RESEND_API_KEY not configured",
        route: "/api/contact",
      })
    );
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const patientType = body.isNewPatient === "yes" ? "New Patient" : "Existing Patient";

  const emailHtml = `
    <h2>New Appointment Request — Global Pain Management</h2>
    <table cellpadding="6" style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
      <tr><td><strong>Name</strong></td><td>${body.firstName} ${body.lastName}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
      <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
      <tr><td><strong>Patient Type</strong></td><td>${patientType}</td></tr>
      ${body.address1 ? `<tr><td><strong>Address</strong></td><td>${[body.address1, body.address2, body.city, body.state, body.zip].filter(Boolean).join(", ")}</td></tr>` : ""}
      <tr><td><strong>Message</strong></td><td style="white-space: pre-wrap;">${body.message}</td></tr>
    </table>
    <p style="color: #666; font-size: 12px; margin-top: 24px;">
      This message was submitted through the contact form at globalpainmd.com.
      Do not reply directly to this email — contact the patient at the phone number or email above.
    </p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Global Pain Management Website <formsubmissions@gascmd.com>",
        to: [contactEmail],
        reply_to: body.email,
        subject: `New ${patientType} Inquiry — ${body.firstName} ${body.lastName}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        JSON.stringify({
          level: "error",
          msg: "Resend API error",
          status: response.status,
          body: errorText,
          route: "/api/contact",
        })
      );
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    console.log(
      JSON.stringify({
        level: "info",
        msg: "Contact form submitted",
        patientType,
        route: "/api/contact",
      })
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "Unexpected error in contact route",
        error: err instanceof Error ? err.message : String(err),
        route: "/api/contact",
      })
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
