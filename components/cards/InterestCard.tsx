/**
 * InterestCard Component
 * Displays a personal interest/hobby
 */

import React from 'react';
import type { Interest } from '@/types/portfolio';

interface InterestCardProps {
  interest: Interest;
}

/**
 * InterestCard - Displays a single interest with emoji, title, and description
 * @param interest - The interest data to display
 */
export const InterestCard: React.FC<InterestCardProps> = ({ interest }) => {
  return (
    <div className="p-3 backdrop-blur-md bg-slate-800/40 rounded-xl hover:bg-slate-800/60 hover:glow-primary transition-all hover:scale-105">
      <p className="text-xl mb-1.5">{interest.emoji}</p>

      <p className="font-semibold text-white text-sm mb-1">
        {interest.title}
      </p>

      <p className="text-xs text-neutral-200 leading-snug">
        {interest.description}
      </p>
    </div>
  );
};
