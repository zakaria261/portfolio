import React from 'react';
import { Code, Globe, Database, Wrench, Brain, Heart } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import type { Skill } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
}

const getSkillIcon = (iconName: string): React.ReactNode => {
  const icons: { [key: string]: React.ReactNode } = {
    code: <Code className="h-6 w-6 text-blue-400" />,
    globe: <Globe className="h-6 w-6 text-cyan-400" />,
    database: <Database className="h-6 w-6 text-blue-400" />,
    tool: <Wrench className="h-6 w-6 text-cyan-400" />,
    brain: <Brain className="h-6 w-6 text-blue-400" />,
    heart: <Heart className="h-6 w-6 text-cyan-400" />,
  };
  return icons[iconName] || <Code className="h-6 w-6 text-blue-400" />;
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
          Compétences
        </h2>

        <BentoGrid className="max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <BentoGridItem
              key={idx}
              title={<span className="gradient-text-primary text-base md:text-lg">{skill.title}</span>}
              description={<span className="text-xs md:text-sm leading-snug text-neutral-200">{skill.description}</span>}
              header={
                <div className="flex items-center gap-2 p-2">
                  {getSkillIcon(skill.icon)}
                </div>
              }
              className={`animate-slide-up stagger-${(idx % 5) + 1} p-4 md:p-5 backdrop-blur-xl bg-slate-900/50`}
              icon={
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {skill.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 rounded-full text-[10px] md:text-xs text-blue-200 hover:scale-105 transition-transform cursor-default whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
