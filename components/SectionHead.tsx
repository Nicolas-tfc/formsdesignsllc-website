import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  children: ReactNode;
  text?: string;
  align?: "left" | "center";
  tag?: "h1" | "h2";
  light?: boolean;
};

export default function SectionHead({
  eyebrow,
  children,
  text,
  align = "left",
  tag = "h2",
  light = false,
}: Props) {
  const Heading = tag;
  return (
    <div className={`head head--${align} ${light ? "head--light" : ""}`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="head__title">{children}</Heading>
      {text && <p className="head__text">{text}</p>}
    </div>
  );
}
