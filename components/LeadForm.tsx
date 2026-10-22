"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { SERVICE_OPTIONS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { ArrowUpRight, Check } from "./Icons";

const TIMELINES = ["As soon as possible", "Within 1–2 months", "Just researching"];
const SIZES = ["Under 400 sq ft", "400–800 sq ft", "Over 800 sq ft", "Not sure"];

type Fields = {
  service: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  size: string;
  timeline: string;
  details: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  service: "",
  name: "",
  phone: "",
  email: "",
  city: "",
  size: "",
  timeline: "",
  details: "",
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function validateStep1(f: Fields): Errors {
  const errors: Errors = {};
  if (!f.service) errors.service = "Pick the service you need.";
  if (f.name.trim().length < 2) errors.name = "Enter your name.";
  if (f.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a 10-digit phone number.";
  return errors;
}

function validateStep2(f: Fields): Errors {
  const errors: Errors = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = "Enter a valid email.";
  if (f.city.trim().length < 2) errors.city = "Enter your city or town.";
  return errors;
}

export default function LeadForm({ idPrefix = "lead" }: { idPrefix?: string }) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const leadId = useRef("");
  const root = useRef<HTMLFormElement>(null);

  const set = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const payload = (stage: "partial" | "complete") => ({
    ...fields,
    stage,
    leadId: leadId.current,
    source: typeof window === "undefined" ? "" : window.location.pathname,
    website: (root.current?.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "",
  });

  async function post(stage: "partial" | "complete") {
    const response = await fetch("/api/estimate/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload(stage)),
      keepalive: true,
    });
    const result = (await response.json().catch(() => ({}))) as { error?: string };
    return { ok: response.ok, error: result.error };
  }

  function next() {
    const found = validateStep1(fields);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (!leadId.current) leadId.current = crypto.randomUUID();
    // Save the lead right away so a call-back is possible even if they never finish step 2.
    void post("partial").catch(() => undefined);
    setStep(2);
    root.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    if (step === 1) return next();
    const found = validateStep2(fields);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSending(true);
    setServerError("");
    try {
      const result = await post("complete");
      if (!result.ok) {
        setServerError(result.error ?? `Something went wrong. Please call ${SITE.phone}.`);
        setSending(false);
        return;
      }
      router.push("/thank-you/");
    } catch {
      setServerError(`Connection problem. Please call ${SITE.phone}.`);
      setSending(false);
    }
  }

  const err = (key: keyof Fields) => (errors[key] ? `${idPrefix}-${key}-err` : undefined);

  return (
    <form ref={root} className="lead" onSubmit={onSubmit} noValidate>
      <div className="lead__progress" aria-hidden>
        <span className={step >= 1 ? "is-on" : ""} />
        <span className={step >= 2 ? "is-on" : ""} />
      </div>
      <p className="lead__step">
        Step {step} of 2 · {step === 1 ? "Tell us what you need" : "Where is the project?"}
      </p>

      {step === 1 ? (
        <>
          <fieldset className="lead__group">
            <legend>What do you need?</legend>
            <div className="chips" role="radiogroup" aria-describedby={err("service")}>
              {SERVICE_OPTIONS.map((option) => (
                <label className="chip" key={option}>
                  <input
                    type="radio"
                    name="service"
                    value={option}
                    checked={fields.service === option}
                    onChange={() => set("service", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="lead__err" id={err("service")} role="alert">
                {errors.service}
              </p>
            )}
          </fieldset>

          <div className="lead__grid">
            <Field id={`${idPrefix}-name`} label="Your name" error={errors.name} errId={err("name")}>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Smith"
                value={fields.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={err("name")}
              />
            </Field>
            <Field id={`${idPrefix}-phone`} label="Phone" error={errors.phone} errId={err("phone")}>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(908) 555-0123"
                value={fields.phone}
                onChange={(e) => set("phone", formatPhone(e.target.value))}
                aria-invalid={!!errors.phone}
                aria-describedby={err("phone")}
              />
            </Field>
          </div>
        </>
      ) : (
        <>
          <div className="lead__grid">
            <Field id={`${idPrefix}-email`} label="Email" error={errors.email} errId={err("email")}>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={fields.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={err("email")}
              />
            </Field>
            <Field id={`${idPrefix}-city`} label="City / Town" error={errors.city} errId={err("city")}>
              <input
                id={`${idPrefix}-city`}
                name="city"
                type="text"
                autoComplete="address-level2"
                placeholder="Summit"
                value={fields.city}
                onChange={(e) => set("city", e.target.value)}
                aria-invalid={!!errors.city}
                aria-describedby={err("city")}
              />
            </Field>
          </div>

          <fieldset className="lead__group">
            <legend>
              Approximate size <small>optional</small>
            </legend>
            <div className="chips">
              {SIZES.map((option) => (
                <label className="chip" key={option}>
                  <input
                    type="radio"
                    name="size"
                    value={option}
                    checked={fields.size === option}
                    onChange={() => set("size", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="lead__group">
            <legend>
              When do you want to start? <small>optional</small>
            </legend>
            <div className="chips">
              {TIMELINES.map((option) => (
                <label className="chip" key={option}>
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    checked={fields.timeline === option}
                    onChange={() => set("timeline", option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <Field id={`${idPrefix}-details`} label="Anything we should know? (optional)">
            <textarea
              id={`${idPrefix}-details`}
              name="details"
              rows={3}
              placeholder="Cracks, stains, moisture, colors you like…"
              value={fields.details}
              onChange={(e) => set("details", e.target.value)}
            />
          </Field>
        </>
      )}

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="form__trap"
        aria-hidden
      />

      <div className="lead__actions">
        {step === 2 && (
          <button type="button" className="lead__back" onClick={() => setStep(1)} disabled={sending}>
            Back
          </button>
        )}
        <button type="submit" className="btn btn--primary btn--lg lead__submit" disabled={sending}>
          <span>
            {step === 1 ? "Continue" : sending ? "Sending…" : "Get My Free Estimate"}
          </span>
          {!sending && <ArrowUpRight className="btn__icon" />}
        </button>
      </div>

      {serverError && (
        <p className="form__error" role="alert">
          {serverError}
        </p>
      )}

      <ul className="lead__trust">
        <li>
          <Check /> Free, no-obligation quote
        </li>
        <li>
          <Check /> Reply within 1 business day
        </li>
        <li>
          <Check /> Your info stays private
        </li>
      </ul>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  errId,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  errId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`lead__field ${error ? "has-error" : ""}`.trim()}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="lead__err" id={errId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
