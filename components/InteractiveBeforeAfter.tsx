"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface InteractiveBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const InteractiveBeforeAfter: React.FC<InteractiveBeforeAfterProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "SEBELUM (BEFORE)",
  afterLabel = "SESUDAH (AFTER)",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <div className="w-full select-none">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[260px] xs:h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-soft-lg cursor-ew-resize bg-slate-900 touch-none"
      >
        {/* AFTER Image (Full Background) */}
        <img
          src={afterImage}
          alt="Sesudah Pengerjaan"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER Label Sticker */}
        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 pointer-events-none">
          <span className="bg-brand-600 text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-soft-md uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            {afterLabel}
          </span>
        </div>

        {/* BEFORE Image (Clipped with native GPU clip-path) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Sebelum Pengerjaan"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE Label Sticker */}
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 pointer-events-none">
            <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full shadow-soft-md uppercase tracking-wider border border-white/10">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-0.5 h-full bg-white shadow-soft-lg" />
          
          {/* Draggable Circle Knob */}
          <div className="absolute w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-800 shadow-soft-xl flex items-center justify-center active:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 text-brand-600" />
          </div>
        </div>

        {/* Bottom Instruction Bar */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 bg-slate-900/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-soft-md text-[11px] font-medium text-white pointer-events-none flex items-center gap-2 whitespace-nowrap">
          <MoveHorizontal className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
          <span>Geser untuk membandingkan</span>
        </div>
      </div>
    </div>
  );
};

