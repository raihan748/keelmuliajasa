"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 44,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount (e.g. above fold or on page reload)
    const checkVisible = () => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight - 30 && rect.bottom > 0;
    };

    if (checkVisible()) {
      setIsRevealed(true);
      return;
    }

    // Modern IntersectionObserver (triggers the moment user scrolls it into view)
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              if (observer && entry.target) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );
      observer.observe(el);
    }

    // Scroll event fallback (triggers on user action-to-scroll even if observer is unavailable)
    const handleScroll = () => {
      if (checkVisible()) {
        setIsRevealed(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransform = () => {
    if (isRevealed) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.96)`;
      case "left":
        return `translate3d(-${distance}px, 0, 0) scale(0.96)`;
      case "right":
        return `translate3d(${distance}px, 0, 0) scale(0.96)`;
      case "up":
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.96)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isRevealed ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

