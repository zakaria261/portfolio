/**
 * SkillCard Component
 * Displays a skill category with icon, description, and skill tags
 */

import React from 'react';
import { Code, Globe, Database, Wrench, Brain, Heart } from 'lucide-react';
import { BentoGridItem } from '@/components/ui/bento-grid';
import type { Skill } from '@/types/portfolio';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-6 w-6 text-blue-400" />,
  globe: <Globe className="h-6 w-6 text-cyan-400" />,
  database: <Database className="h-6 w-6 text-blue-400" />,
  tool: <Wrench className="h-6 w-6 text-cyan-400" />,
  brain: <Brain className="h-6 w-6 text-blue-400" />,
  heart: <Heart className="h-6 w-6 text-cyan-400" />,
};

const getSkillIcon = (iconName: string): React.ReactNode => {
  return iconMap[iconName] || iconMap.code;
};

/**
 * SkillCard - Displays a single skill category
 * @param skill - The skill data to display
 * @param index - Index for stagger animation
 */
export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const staggerClass = `stagger-${(index % 5) + 1}`;

  return (
    <BentoGridItem
      title={
        <span className="gradient-text-primary text-base md:text-lg">
          {skill.title}
        </span>
      }
      description={
        <span className="text-xs md:text-sm leading-snug text-neutral-200">
          {skill.description}
        </span>
      }
      header={
        <div className="flex items-center gap-2 p-2">
          {getSkillIcon(skill.icon)}
        </div>
      }
      className={`animate-slide-up ${staggerClass} p-4 md:p-5 backdrop-blur-xl bg-slate-900/50`}
      icon={
        <div className="flex flex-wrap gap-1.5 mt-3">
          {skill.skills.map((skillName, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 rounded-full text-[10px] md:text-xs text-blue-200 hover:scale-105 transition-transform cursor-default whitespace-nowrap"
            >
              {skillName}
            </span>
          ))}
        </div>
      }
    />
  );
};
