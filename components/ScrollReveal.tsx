"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down" | "zoom" | "diagonal-left" | "diagonal-right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.45,
  className = "",
  distance = 25,
  once = true,
}) => {
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case "diagonal-left":
        return {
          hidden: { opacity: 0, x: -distance, y: distance * 0.5 },
          visible: { opacity: 1, x: 0, y: 0 },
        };
      case "diagonal-right":
        return {
          hidden: { opacity: 0, x: distance, y: distance * 0.5 },
          visible: { opacity: 1, x: 0, y: 0 },
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "40px 0px -20px 0px", amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
