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
  distance = 28,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already in viewport on mount (e.g. above fold or on page reload)
    const checkVisibleImmediately = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight - 20 && rect.bottom > 0;
    };

    if (checkVisibleImmediately()) {
      setIsRevealed(true);
      return;
    }

    // Safety fallback: guarantee content is NEVER permanently hidden under any circumstances
    const safetyTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 1200 + delay * 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
          clearTimeout(safetyTimer);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [delay]);

  const getTransform = () => {
    if (isRevealed) return "none";
    switch (direction) {
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(-${distance}px)`;
      case "right":
        return `translateX(${distance}px)`;
      case "up":
      default:
        return `translateY(${distance}px)`;
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: isRevealed ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

