import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@/lib/content";
import { IMAGES, SITE } from "@/lib/site";
import { Facebook, Instagram, Mail, Phone, Pin } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" aria-label="Forms Designs LLC home">
            <Image
              src={IMAGES.logo}
              alt="Forms Designs LLC"
              width={768}
              height={237}
              sizes="180px"
            />
          </Link>
          <address className="footer__contact">
            <a href={SITE.social.maps} target="_blank" rel="noopener noreferrer">
              <Pin />
              <span>
                {SITE.name}, {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </span>
            </a>
            <a href={SITE.phoneHref}>
              <Phone />
              <span>{SITE.phone}</span>
            </a>
            <a href={`mailto:${SITE.email}`}>
              <Mail />
              <span>{SITE.email}</span>
            </a>
          </address>
          <div className="footer__social">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href={SITE.social.maps} target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
              <Pin />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Residential and commercial">
          <h3>Residential</h3>
          <ul>
            {FOOTER.residential.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <h3>Commercial</h3>
          <ul>
            {FOOTER.commercial.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <h3>Industrial</h3>
          <ul>
            {FOOTER.industrial.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Flooring solutions">
          <h3>Flooring Solutions</h3>
          <ul>
            {FOOTER.solutions.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Service areas">
          <h3>Service Areas</h3>
          <ul>
            {FOOTER.areas.map((area) => (
              <li key={area.label}>
                {area.href ? <Link href={area.href}>{area.label}</Link> : <span>{area.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {SITE.name} · {SITE.license}
        </p>
        <p>
          Designed &amp; developed by{" "}
          <a href="https://thefloorcrew.co" target="_blank" rel="noopener noreferrer">
            thefloorcrew.co
          </a>
        </p>
      </div>
    </footer>
  );
}
