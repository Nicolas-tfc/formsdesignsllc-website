"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { IMAGES, SITE } from "@/lib/site";
import { Chevron, Cross, Menu, Phone } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>
            <Check /> Licensed, bonded &amp; insured · {SITE.license}
          </span>
          <span className="topbar__right">Free Estimates · 15-Year Warranty</span>
        </div>
      </div>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label="Forms Designs LLC home">
            <Image
              src={IMAGES.logo}
              alt="Forms Designs LLC"
              width={768}
              height={237}
              priority
              sizes="(max-width: 640px) 130px, 168px"
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) =>
              "children" in item && item.children ? (
                <div className="nav__group" key={item.label}>
                  <Link href={item.href} className="nav__link">
                    {item.label}
                    <Chevron className="nav__chevron" />
                  </Link>
                  <div className="nav__menu">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav__link">
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="header__actions">
            <a href={SITE.phoneHref} className="header__phone">
              <Phone />
              <span>{SITE.phone}</span>
            </a>
            <Link href={SITE.estimateHref} className="btn btn--primary btn--sm">
              <span>Get a Free Estimate</span>
            </Link>
            <button
              type="button"
              className="header__toggle"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
        <div className="drawer__panel">
          <div className="drawer__top">
            <Image src={IMAGES.logo} alt="Forms Designs LLC" width={768} height={237} sizes="140px" />
            <button
              type="button"
              className="header__toggle"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <Cross />
            </button>
          </div>
          <nav className="drawer__nav" aria-label="Mobile">
            {NAV.map((item, index) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="drawer__link"
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {item.label}
                </Link>
                {"children" in item &&
                  item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="drawer__sub"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
          <div className="drawer__cta">
            <a href={SITE.phoneHref} className="btn btn--outline" tabIndex={open ? 0 : -1}>
              <Phone className="btn__icon" />
              <span>{SITE.phone}</span>
            </a>
            <Link
              href={SITE.estimateHref}
              className="btn btn--primary"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span>Get a Free Estimate</span>
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="drawer__scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          tabIndex={-1}
        />
      </div>
    </>
  );
}

function Check() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
