"use client";

import React from 'react';
import AnimatedGradientBackground from './animated-gradient-background';
import ParticlesBackground from './particles-background';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  return (
    <div className={className || "fixed inset-0 w-full h-full"}>
      {/* Base gradient layer */}
      <AnimatedGradientBackground />

      {/* Particles layer on top */}
      <ParticlesBackground className="absolute inset-0" />
    </div>
  );
};

export default AnimatedBackground;
