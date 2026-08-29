import { SITE } from "@/lib/site";

export type EnquiryFields = {
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

export function enquiryMailto(body: EnquiryFields) {
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const postcode = String(body.postcode || "").trim();

  if (name.length < 2 || !email.includes("@") || phone.length < 7 || message.length < 20 || postcode.length < 3) {
    throw new Error("Please complete name, email, phone, postcode and a short description.");
  }
  if (body.consent !== "yes") {
    throw new Error("Please agree so we can use your details to reply.");
  }

  const text = [
    "LUNA SEN-Scapes enquiry",
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

  const subject = `LUNA SEN-Scapes enquiry — ${body.interest || "brief"} — ${postcode}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
