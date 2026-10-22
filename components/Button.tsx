import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Phone } from "./Icons";

type Variant = "primary" | "ghost" | "light" | "outline";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: "arrow" | "phone" | "none";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className = "",
}: Props) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {icon === "phone" && <Phone className="btn__icon" />}
      <span>{children}</span>
      {icon === "arrow" && <ArrowUpRight className="btn__icon" />}
    </>
  );

  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
