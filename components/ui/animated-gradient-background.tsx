"use client";

import React from 'react';

interface AnimatedGradientBackgroundProps {
  className?: string;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({ className }) => {
  return (
    <div
      className={className || "fixed inset-0 w-full h-full"}
      aria-hidden="true"
      role="presentation"
    >
      {/* Main animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 animate-gradient-shift" />

      {/* Secondary gradient layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-950/50 via-transparent to-blue-950/50 animate-gradient-shift-reverse" />

      {/* Radial gradient overlays for glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Noise texture overlay (optional) */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
    </div>
  );
};

export default AnimatedGradientBackground;
