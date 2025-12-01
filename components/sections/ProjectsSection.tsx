import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
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
          {projects.map((project, idx) => (
            <CardContainer key={idx} containerClassName="w-full h-full">
              <CardBody className="glass-card group/card relative w-full h-full hover:glow-combined transition-all duration-300 p-4 md:p-5 flex flex-col backdrop-blur-xl bg-slate-900/60">
                <div className="flex-grow space-y-2">
                  <CardItem translateZ="50" className="text-lg md:text-xl font-bold">
                    <span className="gradient-text-primary leading-tight">{project.title}</span>
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-200 text-xs md:text-sm leading-snug">
                    {project.description}
                  </CardItem>
                </div>

                <div className="mt-auto pt-3 space-y-3">
                  <CardItem translateZ="80" className="w-full">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-blue-500/30 border border-blue-400/40 rounded-md text-[10px] md:text-xs text-blue-200 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                  <div className="flex justify-end items-center">
                    <CardItem
                      translateZ={40}
                      as="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 btn-glow transition-all"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
