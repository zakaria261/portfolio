/**
 * Skills Section
 * Displays all skills using SkillCard components
 */

import React from 'react';
import { BentoGrid } from '@/components/ui/bento-grid';
import { SkillCard } from '@/components/cards/SkillCard';
import type { Skill } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
          Compétences
        </h2>

        <BentoGrid className="max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
