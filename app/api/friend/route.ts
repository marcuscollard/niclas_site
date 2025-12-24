import nodemailer from "nodemailer";

export const runtime = "nodejs";

const SMTP_HOST = "mail-eu.smtp2go.com";
const SMTP_PORT = 2525;
const SMTP_USER = "niclas";
const SMTP_PASS = "BKPZPa7ttzgbEtZY";
const SMTP_FROM = "Niclas Collard <gmail@niclascollard.com>";
const SMTP_TO = "niclas.collard@gmail.com";
const APPLICATION_NUMBER = "741,293";

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!firstName || !lastName || !description) {
    return new Response("Missing fields", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: SMTP_TO,
    subject: `Friend application #${APPLICATION_NUMBER}: ${firstName} ${lastName}`,
    text: [
      `Application number: ${APPLICATION_NUMBER}`,
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      "",
      description,
    ].join("\n"),
  });

  return Response.redirect(new URL("/?submitted=1", request.url), 303);
}
