import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const clean = (value: unknown, max = 2000) =>
  typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const cleanBlock = (value: unknown, max = 4000) =>
  typeof value === "string" ? value.replace(/\r/g, "").trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

type Lead = {
  stage: "partial" | "complete";
  leadId: string;
  receivedAt: string;
  source: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  size: string;
  timeline: string;
  details: string;
};

async function saveToFile(lead: Lead) {
  const dir = process.env.LEADS_DIR || path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(lead)}\n`, "utf8");
}

async function sendWebhook(lead: Lead) {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) throw new Error("no webhook");
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`webhook ${response.status}`);
}

async function sendEmail(lead: Lead) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) throw new Error("no smtp");

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["City / Town", lead.city || "—"],
    ["Service", lead.service || "Not specified"],
    ["Approx. size", lead.size || "—"],
    ["Timeline", lead.timeline || "—"],
    ["Project detail", lead.details || "—"],
    ["Page", lead.source || "—"],
  ];

  const partial = lead.stage === "partial";
  await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: SITE.mailTo,
    ...(lead.email ? { replyTo: lead.email } : {}),
    subject: partial
      ? `New lead (step 1, call back) — ${lead.name} ${lead.phone}`
      : `New estimate request — ${lead.name}${lead.city ? ` (${lead.city})` : ""}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `<table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
      .map(
        ([label, value]) =>
          `<tr><td style="border:1px solid #ddd;font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
      )
      .join("")}</table>`,
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const stage = body.stage === "partial" ? "partial" : "complete";
  const lead: Lead = {
    stage,
    leadId: clean(body.leadId, 64) || crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    source: clean(body.source, 200),
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    city: clean(body.city, 120),
    service: clean(body.service, 120),
    size: clean(body.size, 60),
    timeline: clean(body.timeline, 60),
    details: cleanBlock(body.details),
  };

  const phoneOk = lead.phone.replace(/\D/g, "").length >= 10;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);

  if (lead.name.length < 2 || !phoneOk) {
    return NextResponse.json({ error: "Please enter your name and a valid phone number." }, { status: 422 });
  }
  if (stage === "complete" && (!emailOk || !lead.city)) {
    return NextResponse.json(
      { error: "Please complete your email and city." },
      { status: 422 },
    );
  }

  // Deliver through every configured channel; the lead counts as captured if any succeeds.
  const results = await Promise.allSettled([saveToFile(lead), sendWebhook(lead), sendEmail(lead)]);
  const delivered = results.some((result) => result.status === "fulfilled");

  if (!delivered) {
    console.error("[lead] undelivered", JSON.stringify(lead));
    if (stage === "partial") return NextResponse.json({ ok: true });
    return NextResponse.json(
      { error: `We could not send your request. Please call ${SITE.phone}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, leadId: lead.leadId });
}
