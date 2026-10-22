"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "./Icons";

type Review = { quote: string; name: string };

export default function ReviewsSlider({ items }: { items: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const node = track.current;
    if (!node) return;
    const first = node.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(node).columnGap || "0");
    const atEnd = node.scrollLeft + node.clientWidth >= node.scrollWidth - 4;
    setIndex(atEnd ? items.length - 1 : Math.round(node.scrollLeft / step));
  }, [items.length]);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      node.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (direction: 1 | -1) => {
    const node = track.current;
    if (!node) return;
    const first = node.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth + parseFloat(getComputedStyle(node).columnGap || "0");
    node.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const pad = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="slider">
      <ul className="slider__track" ref={track} aria-label="Customer reviews">
        {items.map((item) => (
          <li className="review" key={item.name}>
            <span className="review__mark" aria-hidden>
              “
            </span>
            <div className="review__stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <blockquote>{item.quote}</blockquote>
            <p className="review__name">
              <strong>{item.name}</strong>
              <span>Google review</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="slider__controls">
        <span className="slider__count">
          {pad(index + 1)} / {pad(items.length)}
        </span>
        <div className="slider__buttons">
          <button type="button" onClick={() => go(-1)} aria-label="Previous review">
            <ArrowLeft />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next review">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
