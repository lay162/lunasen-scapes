"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquiryMailto } from "@/lib/enquiry";
import { SITE } from "@/lib/site";

const SETTINGS = [
  "Family home — SEN child",
  "Family home — SEN adult",
  "Disabled person / household",
  "Safe place / play area",
  "Garden or driveway",
  "Internal works / building",
  "Supported living",
  "Other",
] as const;

const INTERESTS = [
  "Safe garden / play area",
  "Disabled garden makeover",
  "Inclusive playground",
  "Sensory garden",
  "Sensory room / internal room",
  "Internal works",
  "Building / extension",
  "Accessible adaptation",
  "Driveway",
  "Fencing & gates",
  "Patio & paving",
  "Landscaping",
  "Levelling and dig offs",
  "Drainage",
  "Not sure yet",
] as const;

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      window.location.href = enquiryMailto(data);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-luna-blue/40 bg-luna-blue/10 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 size-10 text-luna-pink" />
        <h2 className="text-xl font-black">Enquiry ready</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your email app should have opened with the brief filled in. If it did not, write to{" "}
          <a className="font-semibold text-luna-pink-ink underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>{" "}
          or call {SITE.phoneDisplay}.
        </p>
        <button type="button" className="luna-btn luna-btn-gradient mt-6 h-10 px-5" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  const fieldClass = "h-11 text-base";

  return (
    <form onSubmit={onSubmit} className="space-y-5 text-center" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organisation">Household or organisation (optional)</Label>
          <Input id="organisation" name="organisation" autoComplete="organization" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="town">Town / area</Label>
          <Input id="town" name="town" required autoComplete="address-level2" placeholder="e.g. West Kirby" className={fieldClass} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" name="postcode" required autoComplete="postal-code" className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="setting">What kind of setting?</Label>
          <select
            id="setting"
            name="setting"
            required
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            {SETTINGS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest">What do you need?</Label>
          <select
            id="interest"
            name="interest"
            required
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            {INTERESTS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell us about the space</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={6}
          placeholder="How people use the garden now, mobility or SEN needs, what you want to change, photos help."
          className="min-h-32"
        />
      </div>
      <label className="mx-auto flex max-w-xl items-start justify-center gap-2 text-sm text-muted-foreground">
        <input type="checkbox" name="consent" value="yes" required className="mt-1" />
        <span>
          I agree LUNA SEN-Scapes (LUNA SEN Group Ltd) may use these details to quote and contact me about this
          enquiry. We do not sell your data. See our{" "}
          <a className="underline" href="/privacy">
            privacy notice
          </a>
          .
        </span>
      </label>
      {status === "error" ? <p className="text-sm text-destructive">{error}</p> : null}
      <button type="submit" disabled={status === "sending"} className="luna-btn luna-btn-gradient h-12 w-full px-8 text-base sm:w-auto">
        {status === "sending" ? "Preparing…" : "Send enquiry"}
      </button>
      <p className="text-xs text-muted-foreground">
        Prefer to talk? Call <a className="font-semibold text-foreground" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
      </p>
    </form>
  );
}
