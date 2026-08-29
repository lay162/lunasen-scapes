import { NextResponse } from "next/server";

import { SITE } from "@/lib/site";

type Body = {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  town?: string;
  postcode?: string;
  setting?: string;
  interest?: string;
  message?: string;
  consent?: string;
};

function line(label: string, value?: string) {
  return `${label}: ${String(value || "").trim()}`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const postcode = String(body.postcode || "").trim();

  if (name.length < 2 || !email.includes("@") || phone.length < 7 || message.length < 20 || postcode.length < 3) {
    return NextResponse.json(
      { ok: false, error: "Please complete name, email, phone, postcode and a short description." },
      { status: 400 },
    );
  }
  if (body.consent !== "yes") {
    return NextResponse.json({ ok: false, error: "Please agree so we can use your details to reply." }, { status: 400 });
  }

  const text = [
    "LUNA SEN Scapes enquiry",
    "",
    line("Name", name),
    line("Organisation", body.organisation),
    line("Email", email),
    line("Phone", phone),
    line("Town", body.town),
    line("Postcode", postcode),
    line("Setting", body.setting),
    line("Interest", body.interest),
    "",
    "Message:",
    message,
  ].join("\n");

  const subject = `SEN Scapes enquiry — ${body.interest || "brief"} — ${postcode}`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

  return NextResponse.json({ ok: true, mailto });
}
