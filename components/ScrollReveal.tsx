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
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
}) => {
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -distance, rotate: -1.5 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: distance, rotate: 1.5 },
          visible: { opacity: 1, x: 0, rotate: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.88, rotate: -1 },
          visible: { opacity: 1, scale: 1, rotate: 0 },
        };
      case "diagonal-left":
        return {
          hidden: { opacity: 0, x: -distance, y: distance * 0.6, rotate: -2 },
          visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
        };
      case "diagonal-right":
        return {
          hidden: { opacity: 0, x: distance, y: distance * 0.6, rotate: 2 },
          visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
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
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
