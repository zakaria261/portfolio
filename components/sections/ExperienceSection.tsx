import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import type { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const timelineData = experiences.map((exp) => ({
    title: exp.year,
    content: (
      <div className="glass-card glow-primary animate-slide-up p-4 md:p-5">
        <h3 className="gradient-text-primary text-xl md:text-2xl font-bold mb-2 leading-tight">{exp.title}</h3>
        <p className="gradient-text-secondary text-base md:text-lg font-semibold mb-1">{exp.company}</p>
        <p className="text-neutral-400 text-xs md:text-sm mb-3">{exp.location}</p>
        <p className="text-neutral-300 text-sm md:text-base mb-3 leading-relaxed">{exp.description}</p>
        <ul className="space-y-1.5 mb-3">
          {exp.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-neutral-400 text-xs md:text-sm">
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-[10px] md:text-xs text-blue-300 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
          Parcours
        </h2>

        <div className="pt-2">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
};
