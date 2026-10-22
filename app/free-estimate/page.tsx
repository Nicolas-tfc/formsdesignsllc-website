import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import JsonLd from "@/components/JsonLd";
import { Check, Mail, Phone, Pin } from "@/components/Icons";
import { COUNTIES } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Estimate for Epoxy & Concrete Floors in NJ",
  description:
    "Request a free on-site estimate for epoxy garage floors, basements and commercial concrete in Summit and across New Jersey. Clear quote, no hidden fees.",
  alternates: { canonical: "/free-estimate/" },
  openGraph: { url: "/free-estimate/" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Estimate",
      item: `${SITE.url}/free-estimate/`,
    },
  ],
};

export default function FreeEstimatePage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Free Estimate</p>
          <h1 className="head__title">
            Tell us about <em>your floor.</em>
          </h1>
          <p className="head__text">
            We schedule a visit, measure the space, discuss coating options, and give you a clear
            quote at no cost.
          </p>
        </div>
      </section>
      <section className="section section--form">
        <div className="container contact">
          <div className="contact__form">
            <EstimateForm />
          </div>
          <aside className="contact__side">
            <h2>Prefer to talk?</h2>
            <a href={SITE.phoneHref} className="contact__line">
              <Phone />
              <span>{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="contact__line">
              <Mail />
              <span>{SITE.email}</span>
            </a>
            <a
              href={SITE.social.maps}
              className="contact__line"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pin />
              <span>
                {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </span>
            </a>
            <ul className="contact__list">
              <li>
                <Check /> Licensed, bonded &amp; insured
              </li>
              <li>
                <Check /> {SITE.license}
              </li>
              <li>
                <Check /> 15-year warranty
              </li>
              <li>
                <Check /> One clear, upfront quote
              </li>
            </ul>
            <p className="contact__areas">
              Serving {COUNTIES.join(", ")} Counties, NJ.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
