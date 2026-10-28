import { NextResponse } from "next/server";

type ApplicationPayload = {
  formType?: string;
  idempotencyKey?: string;
  fields?: Record<string, unknown>;
};

const primaryRecipient = "info@centerzanaravnootrostvo.si";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

function recipientList() {
  return [
    primaryRecipient,
    process.env.FORMS_TO_EMAIL,
    process.env.FORMS_ADDITIONAL_EMAIL,
    process.env.ADDITIONAL_FORM_RECIPIENT,
  ].filter((email, index, recipients): email is string => Boolean(email) && recipients.indexOf(email) === index);
}

export async function POST(request: Request) {
  let payload: ApplicationPayload;

  try {
    payload = (await request.json()) as ApplicationPayload;
  } catch {
    return NextResponse.json({ error: "Podatki obrazca niso veljavni." }, { status: 400 });
  }

  const fields = payload.fields ?? {};
  const requiredFields = ["ime", "email", "predmet"];
  const missing = requiredFields.filter((field) => typeof fields[field] !== "string" || !fields[field]?.trim());
  const email = typeof fields.email === "string" ? fields.email.trim() : "";

  if (missing.length > 0) {
    return NextResponse.json({ error: "Izpolnite vsa obvezna polja." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Vnesite veljaven e-poštni naslov." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORMS_FROM_EMAIL;
  const recipients = recipientList();

  if (!apiKey || !from || recipients.length === 0) {
    console.error("[applications] Manjka konfiguracija za pošiljanje prijav.");
    return NextResponse.json({ error: "Pošiljanje trenutno ni na voljo. Poskusite znova pozneje." }, { status: 500 });
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => typeof value === "string" && value.trim())
    .map(([key, value]) => `<tr><th style="text-align:left;padding:6px 12px 6px 0">${escapeHtml(key)}</th><td style="padding:6px 0">${escapeHtml(value as string)}</td></tr>`)
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(payload.idempotencyKey ? { "Idempotency-Key": payload.idempotencyKey } : {}),
    },
    body: JSON.stringify({
      from,
      to: recipients,
      reply_to: email,
      subject: `Individualna učna podpora – ${String(fields.ime).trim()}`,
      html: `<h2>Nova prijava: Individualna učna podpora</h2><table>${rows}</table>`,
    }),
  });

  if (!response.ok) {
    console.error("[applications] Resend je zavrnil pošiljanje:", response.status);
    return NextResponse.json({ error: "Prijave ni bilo mogoče poslati. Preverite podatke in poskusite znova." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
