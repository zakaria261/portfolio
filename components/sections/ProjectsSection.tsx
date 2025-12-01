/**
 * Projects Section
 * Displays all projects using ProjectCard components
 */

import React from 'react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import type { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
          Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
