interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const MAX_LENGTHS = {
  name: 120,
  email: 180,
  phone: 80,
  message: 3000,
  website: 200,
};

const CONTACT_TO_EMAIL = "info@BRProducts.com";

const json = (body: Record<string, unknown>, init?: ResponseInit) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

const clean = (value: FormDataEntryValue | null, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export const onRequestOptions = () =>
  new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS",
    },
  });

export const onRequestPost = async ({ request, env }: PagesContext) => {
  const formData = await request.formData();
  const website = clean(formData.get("website"), MAX_LENGTHS.website);

  if (website) {
    return json({ ok: true });
  }

  const name = clean(formData.get("name"), MAX_LENGTHS.name);
  const email = clean(formData.get("email"), MAX_LENGTHS.email);
  const phone = clean(formData.get("phone"), MAX_LENGTHS.phone);
  const message = clean(formData.get("message"), MAX_LENGTHS.message);

  if (!name || !email || !message) {
    return json({ ok: false, message: "Name, email, and message are required." }, { status: 400 });
  }

  if (!email.includes("@")) {
    return json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
    return json({ ok: false, message: "Email delivery is not configured." }, { status: 500 });
  }

  const subject = `Big Rapids Products inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = `
    <h2>New Big Rapids Products inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "client-site-contact-form/1.0",
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      subject,
      reply_to: email,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return json({ ok: false, message: "Email delivery failed. Please try again." }, { status: 502 });
  }

  return json({ ok: true });
};

export const onRequest = ({ request }: PagesContext) =>
  json({ ok: false, message: `${request.method} is not supported.` }, { status: 405 });
