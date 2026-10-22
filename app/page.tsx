import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import ReviewsSlider from "@/components/ReviewsSlider";
import SectionHead from "@/components/SectionHead";
import { ArrowUpRight, Check, Cross, Instagram, Phone, Plus, Star } from "@/components/Icons";
import {
  CLOSING,
  COATINGS,
  FAQ,
  HERO,
  MARQUEE,
  PROCESS,
  PROJECTS,
  REVIEWS,
  SPACES,
  STATS,
  TRANSPARENCY,
  WHY,
} from "@/lib/content";
import { faqSchema, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { IMAGES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Epoxy Garage & Concrete Coatings in Summit, NJ | Forms Designs" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, websiteSchema, faqSchema]} />

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <a
              className="badge"
              href={SITE.social.maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge__stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </span>
              <span>{HERO.badge}</span>
            </a>
            <h1 className="hero__title">
              {HERO.titleBefore}
              <em>{HERO.titleEm}</em>
              {HERO.titleAfter}
            </h1>
            <p className="hero__text">{HERO.text}</p>
            <div className="hero__actions">
              <Button href="#estimate">Get a Free Estimate</Button>
              <Button href={SITE.phoneHref} variant="ghost" icon="phone">
                {SITE.phone}
              </Button>
            </div>
            <ul className="hero__checks">
              <li>
                <Check /> Licensed, bonded &amp; insured
              </li>
              <li>
                <Check /> 15-year warranty
              </li>
              <li>
                <Check /> No hidden fees
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <Image
              src={IMAGES.hero}
              alt="Epoxy flake garage floor installed by Forms Designs LLC in New Jersey"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 46vw"
              className="hero__img"
            />
            <div className="hero__tag">
              <strong>Summit, NJ</strong>
              <span>Serving Northern &amp; Central New Jersey</span>
            </div>
          </div>
        </div>
        <div className="container">
          <dl className="stats">
            {STATS.map((stat) => (
              <div className="stats__item" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>
                  {stat.value}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {[...MARQUEE, ...MARQUEE].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section section--lead" id="estimate">
        <div className="container">
          <Reveal>
            <div className="leadbox">
              <div className="leadbox__copy">
                <p className="eyebrow">Free estimate</p>
                <h2 className="head__title">
                  Get your floor <em>quoted today</em>
                </h2>
                <p className="head__text">
                  Tell us about your space in under a minute. We review every request personally
                  and reply within one business day with a clear, no-surprise price.
                </p>
                <ul className="leadbox__points">
                  <li>
                    <Check /> Licensed, bonded &amp; insured
                  </li>
                  <li>
                    <Check /> 15-year warranty on every install
                  </li>
                  <li>
                    <Check /> Written quote, no hidden fees
                  </li>
                </ul>
                <a href={SITE.phoneHref} className="leadbox__call">
                  <Phone />
                  <span>
                    Prefer to talk? <strong>{SITE.phone}</strong>
                  </span>
                </a>
              </div>
              <div className="leadbox__card">
                <LeadForm idPrefix="home" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--why" id="why">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow={WHY.eyebrow} text={WHY.text}>
              {WHY.titleBefore}
              <em>{WHY.titleEm}</em>
              {WHY.titleAfter}
            </SectionHead>
          </Reveal>
          <Reveal>
            <div className="compare" role="table" aria-label="Forms Designs LLC compared to other contractors">
              <div className="compare__row compare__row--head" role="row">
                <div role="columnheader">{WHY.others}</div>
                <div role="columnheader">{WHY.us}</div>
              </div>
              {WHY.rows.map((row) => (
                <div className="compare__row" role="row" key={row.us}>
                  <div className="compare__cell compare__cell--other" role="cell">
                    <Cross />
                    <span>{row.other}</span>
                  </div>
                  <div className="compare__cell compare__cell--us" role="cell">
                    <Check />
                    <span>{row.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--spaces" id="solutions">
        <div className="container">
          <Reveal>
            <div className="split-head">
              <SectionHead eyebrow={SPACES.eyebrow} text={SPACES.text}>
                {SPACES.titleBefore}
                <em>{SPACES.titleEm}</em>
              </SectionHead>
              <Button href={SPACES.cta.href} variant="outline">
                {SPACES.cta.label}
              </Button>
            </div>
          </Reveal>
          <div className="spaces">
            {SPACES.items.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <Link href={item.href} className="space" id={item.id}>
                  <div className="space__media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </div>
                  <div className="space__body">
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="space__arrow" aria-hidden>
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--process" id="process">
        <div className="container">
          <Reveal>
            <SectionHead eyebrow={PROCESS.eyebrow} light>
              {PROCESS.titleBefore}
              <em>{PROCESS.titleEm}</em>
            </SectionHead>
          </Reveal>
          <ol className="steps">
            {PROCESS.steps.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 100} className="step">
                <span className="step__num">— {step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Button href={SITE.estimateHref} variant="light">
              {PROCESS.cta}
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section section--reviews" id="reviews">
        <div className="container">
          <Reveal>
            <div className="split-head split-head--end">
              <SectionHead eyebrow={REVIEWS.eyebrow} text={REVIEWS.footnote}>
                {REVIEWS.title}
              </SectionHead>
              <Button href={REVIEWS.cta.href} variant="outline">
                {REVIEWS.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <ReviewsSlider items={REVIEWS.items} />
          </Reveal>
        </div>
      </section>

      <section className="section section--coatings" id="coatings">
        <div className="container">
          <Reveal>
            <div className="split-head">
              <SectionHead eyebrow={COATINGS.eyebrow} text={COATINGS.text}>
                {COATINGS.title}
              </SectionHead>
              <Button href={COATINGS.cta.href} variant="outline">
                {COATINGS.cta.label}
              </Button>
            </div>
          </Reveal>
          <ul className="coatings">
            {COATINGS.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={(index % 3) * 80}>
                <Link href={item.href} className="coating">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowUpRight className="coating__arrow" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--transparency" id="transparency">
        <div className="container">
          <Reveal>
            <div className="transparency">
              <div>
                <p className="eyebrow">{TRANSPARENCY.eyebrow}</p>
                <h2 className="head__title">{TRANSPARENCY.title}</h2>
                <p className="head__text">{TRANSPARENCY.text}</p>
              </div>
              <a
                className="transparency__link"
                href={TRANSPARENCY.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
                <span>{TRANSPARENCY.handle}</span>
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--projects" id="projects">
        <div className="container">
          <Reveal>
            <div className="split-head">
              <SectionHead eyebrow={PROJECTS.eyebrow} text={PROJECTS.text}>
                {PROJECTS.title}
              </SectionHead>
              <Button href={PROJECTS.cta.href} variant="outline">
                {PROJECTS.cta.label}
              </Button>
            </div>
          </Reveal>
          <ul className="projects">
            {PROJECTS.items.map((project, index) => (
              <Reveal as="li" key={project.image} delay={(index % 3) * 80}>
                <Link href={PROJECTS.cta.href} className="project">
                  <div className="project__media">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <span className="project__tag">{project.space}</span>
                  </div>
                  <div className="project__body">
                    <h3>{project.title}</h3>
                    <p>{project.location ?? "New Jersey"}</p>
                    {(project.system || project.colors || project.size) && (
                      <dl>
                        {project.system && (
                          <div>
                            <dt>System</dt>
                            <dd>{project.system}</dd>
                          </div>
                        )}
                        {project.colors && (
                          <div>
                            <dt>Colors</dt>
                            <dd>{project.colors}</dd>
                          </div>
                        )}
                        {project.size && (
                          <div>
                            <dt>Size</dt>
                            <dd>{project.size}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                    <ArrowUpRight className="project__arrow" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--faq" id="faq">
        <div className="container faq">
          <Reveal className="faq__side">
            <SectionHead eyebrow={FAQ.eyebrow} text={FAQ.text}>
              {FAQ.title}
            </SectionHead>
            <div className="faq__cta">
              <h3>{FAQ.cta.title}</h3>
              <p>{FAQ.cta.text}</p>
              <Button href={SITE.estimateHref} variant="light">
                {FAQ.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal className="faq__list">
            {FAQ.items.map((item) => (
              <details className="qa" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <Plus className="qa__icon" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="closing">
        <Image
          src={IMAGES.closing}
          alt=""
          fill
          sizes="100vw"
          className="closing__img"
          aria-hidden
        />
        <div className="closing__shade" />
        <div className="container closing__inner">
          <h2>{CLOSING.title}</h2>
          <p>{CLOSING.text}</p>
          <div className="hero__actions">
            <Button href={SITE.estimateHref} variant="light">
              Get a Free Estimate
            </Button>
            <Button href={SITE.phoneHref} variant="ghost" icon="phone" className="btn--on-dark">
              {SITE.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
