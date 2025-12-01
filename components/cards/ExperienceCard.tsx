/**
 * ExperienceCard Component
 * Displays an experience or education entry with details
 */

import React from 'react';
import type { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * ExperienceCard - Displays a single experience/education entry
 * @param experience - The experience data to display
 */
export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="glass-card glow-primary animate-slide-up p-4 md:p-5">
      <h3 className="gradient-text-primary text-xl md:text-2xl font-bold mb-2 leading-tight">
        {experience.title}
      </h3>

      <p className="gradient-text-secondary text-base md:text-lg font-semibold mb-1">
        {experience.company}
      </p>

      <p className="text-neutral-400 text-xs md:text-sm mb-3">
        {experience.location}
      </p>

      <p className="text-neutral-300 text-sm md:text-base mb-3 leading-relaxed">
        {experience.description}
      </p>

      <ul className="space-y-1.5 mb-3">
        {experience.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-neutral-400 text-xs md:text-sm"
          >
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
            <span className="leading-snug">{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {experience.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-[10px] md:text-xs text-blue-300 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
