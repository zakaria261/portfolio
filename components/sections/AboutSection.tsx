import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import type { PersonalInfo } from '@/types/portfolio';

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
          À propos
        </h2>

        <div className="glass-card animated-border shimmer animate-scale-in p-5 md:p-6 backdrop-blur-xl bg-slate-900/60">
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed mb-3">
            Je suis étudiant en <span className="gradient-text-primary font-semibold"> École d'ingénieur</span> en
            Informatique et Ingénierie des Données à <span className="gradient-text-secondary font-semibold">Polytech Annecy</span>,
            avec un diplôme d'ingénieur prévue en 2027.
          </p>

          <p className="text-sm md:text-base text-neutral-200 leading-relaxed mb-4">
            Passionné par la data science, l'IA et le développement logiciel, j'ai développé
            une expertise via divers projets techniques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div className="flex items-center gap-2.5 p-2.5 glass-card hover:glow-primary transition-all backdrop-blur-md bg-slate-800/40">
              <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <span className="text-neutral-200 text-sm truncate">{personalInfo.location}</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 glass-card hover:glow-primary transition-all backdrop-blur-md bg-slate-800/40">
              <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <span className="text-neutral-200 text-sm">{personalInfo.phone}</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 glass-card hover:glow-secondary transition-all md:col-span-2 backdrop-blur-md bg-slate-800/40">
              <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <span className="text-neutral-200 text-sm truncate">{personalInfo.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
