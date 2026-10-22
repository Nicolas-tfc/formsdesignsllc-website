"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS } from "@/lib/content";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "error";

export default function EstimateForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/estimate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? `Something went wrong. Please call ${SITE.phone}.`);
        return;
      }
      router.push("/thank-you/");
    } catch {
      setStatus("error");
      setMessage(`Connection problem. Please call ${SITE.phone}.`);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required minLength={2} />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required inputMode="tel" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>City / Town</span>
          <input name="city" type="text" autoComplete="address-level2" required />
        </label>
        <label className="field field--full">
          <span>Service needed</span>
          <select name="service" defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field field--full">
          <span>Project detail</span>
          <textarea name="details" rows={5} />
        </label>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="form__trap"
          aria-hidden
        />
      </div>
      <button type="submit" className="btn btn--primary btn--lg" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send My Estimate Request"}</span>
      </button>
      {status === "error" && (
        <p className="form__error" role="alert">
          {message}
        </p>
      )}
      <p className="form__note">Your information stays private.</p>
    </form>
  );
}
