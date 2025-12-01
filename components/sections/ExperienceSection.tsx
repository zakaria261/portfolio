/**
 * Experience Section
 * Displays education and work experience using ExperienceCard components
 */

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import type { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const timelineData = experiences.map((exp) => ({
    title: exp.year,
    content: <ExperienceCard experience={exp} />,
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
