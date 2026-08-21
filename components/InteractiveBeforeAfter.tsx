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
        className="relative w-full h-[260px] xs:h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl sm:rounded-3xl border-2 border-black overflow-hidden shadow-neo-xl cursor-ew-resize bg-black touch-none"
      >
        {/* AFTER Image (Full Background) */}
        <img
          src={afterImage}
          alt="Sesudah Pengerjaan"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER Label Sticker */}
        <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 z-20 pointer-events-none">
          <span className="bg-neo-emerald text-black text-[10px] sm:text-xs font-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border border-black sm:border-2 shadow-neo-sm uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            {afterLabel}
          </span>
        </div>

        {/* BEFORE Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Sebelum Pengerjaan"
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{
              width: containerRef.current
                ? `${containerRef.current.clientWidth}px`
                : "100%",
              height: "100%",
            }}
          />

          {/* BEFORE Label Sticker */}
          <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-20 pointer-events-none">
            <span className="bg-neo-yellow text-black text-[10px] sm:text-xs font-black px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border border-black sm:border-2 shadow-neo-sm uppercase tracking-wider">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-1 h-full bg-white border-l border-r border-black shadow-lg" />
          
          {/* Draggable Circle Knob with Neobrutalist Style */}
          <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-neo-yellow border-2 border-black shadow-neo flex items-center justify-center text-black active:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </div>
        </div>

        {/* Bottom Instruction Bar */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl border-2 border-black shadow-neo-sm text-[10px] sm:text-[11px] font-black text-slate-900 pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
          <MoveHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 animate-pulse" />
          <span>Geser slider ke kiri & kanan</span>
        </div>
      </div>
    </div>
  );
};
