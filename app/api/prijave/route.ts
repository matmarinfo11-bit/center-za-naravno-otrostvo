import { NextResponse } from "next/server";

const OFFICIAL_EMAIL = "info@centerzanaravnootroštvo.si";
const FORM_NAMES = new Set([
  "Hospitacije",
  "Partnerstvo",
  "Individualna učna podpora",
  "Varstvo",
  "Delavnice",
]);

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>\"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[character] || character);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Podatki obrazca niso veljavni." }, { status: 400 });
  }

  const formName = typeof body.formName === "string" ? body.formName : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const name = typeof body.ime === "string" ? body.ime.trim() : "";
  const organization = typeof body.organizacija === "string" ? body.organizacija.trim() : "";

  if (!FORM_NAMES.has(formName)) {
    return NextResponse.json({ message: "Vrsta obrazca ni veljavna." }, { status: 400 });
  }
  if (!name && !organization) {
    return NextResponse.json({ message: "Izpolnite obvezna polja obrazca." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Vnesite veljaven e-poštni naslov." }, { status: 400 });
  }
  if (formName === "Individualna učna podpora" && typeof body.predmet !== "string") {
    return NextResponse.json({ message: "Izberite predmet učne podpore." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FORMS_FROM_EMAIL;
  const additionalRecipient = process.env.FORMS_ADDITIONAL_RECIPIENT;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { message: "Oddaja trenutno ni mogoča: manjkajo nastavitve za pošiljanje e-pošte (RESEND_API_KEY in FORMS_FROM_EMAIL)." },
      { status: 503 },
    );
  }

  const fields = Object.entries(body)
    .filter(([key]) => key !== "formName")
    .map(([key, value]) => `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(String(value ?? ""))}</p>`)
    .join("");
  const recipients = [OFFICIAL_EMAIL, additionalRecipient].filter(
    (recipient): recipient is string => Boolean(recipient && isValidEmail(recipient)),
  );

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `prijava-${crypto.randomUUID()}`,
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipients,
      reply_to: email,
      subject: `Nova prijava: ${formName}`,
      html: `<h2>Nova prijava: ${escapeHtml(formName)}</h2>${fields}`,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ message: "Pošiljanje ni uspelo. Poskusite znova ali nas kontaktirajte neposredno." }, { status: 502 });
  }

  return NextResponse.json({ message: "Hvala. Vaša prijava je bila uspešno oddana." });
}
