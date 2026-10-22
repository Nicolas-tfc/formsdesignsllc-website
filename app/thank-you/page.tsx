import type { Metadata } from "next";
import Button from "@/components/Button";
import { Check } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="section thanks">
      <div className="container thanks__inner">
        <span className="thanks__icon">
          <Check />
        </span>
        <h1 className="head__title">
          Request <em>received.</em>
        </h1>
        <p className="head__text">
          Thank you. We will be in touch shortly to schedule your free estimate. Need us sooner?
          Call {SITE.phone}.
        </p>
        <div className="hero__actions">
          <Button href="/">Back to home</Button>
          <Button href={SITE.phoneHref} variant="outline" icon="phone">
            {SITE.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
