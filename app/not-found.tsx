import type { Metadata } from "next";
import Button from "@/components/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section thanks">
      <div className="container thanks__inner">
        <p className="eyebrow">Error 404</p>
        <h1 className="head__title">
          This page <em>isn’t here.</em>
        </h1>
        <p className="head__text">
          The page you were looking for may have moved. Head back home or call us at {SITE.phone}.
        </p>
        <div className="hero__actions">
          <Button href="/">Back to home</Button>
          <Button href={SITE.estimateHref} variant="outline">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
