import React from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Download, ChevronDown } from 'lucide-react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Spotlight } from '@/components/ui/spotlight';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { PulseBeams } from '@/components/ui/pulse-beams';
import { PULSE_BEAMS_CONFIG, GRADIENT_COLORS, TYPEWRITER_WORDS } from '@/constants/portfolio';
import type { PersonalInfo } from '@/types/portfolio';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo, onScrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* PulseBeams Effect */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <PulseBeams
          beams={PULSE_BEAMS_CONFIG}
          gradientColors={GRADIENT_COLORS}
          className="bg-transparent"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-[5]"
        fill="white"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400/70 glow-combined animate-float shadow-2xl shadow-blue-500/50">
            <Image
              src="/profile.jpg"
              alt={personalInfo.name}
              width={160}
              height={160}
              className="object-cover object-[70%_15%] scale-125"
            />
          </div>
        </div>

        {/* Name */}
        <div className="animate-slide-up">
          <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 text-shadow-glow">
            {personalInfo.name}
          </h1>
        </div>

        {/* Typewriter Effect */}
        <div className="animate-slide-up stagger-1">
          <TypewriterEffect words={TYPEWRITER_WORDS} className="mb-6" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up stagger-2 drop-shadow-lg">
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up stagger-3">
          <MovingBorderButton
            borderRadius="1.75rem"
            className="btn-glow bg-slate-900/80 backdrop-blur-sm text-white border-slate-800"
            as="a"
            href={`mailto:${personalInfo.email}`}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </MovingBorderButton>

          <MovingBorderButton
            borderRadius="1.75rem"
            className="btn-glow bg-slate-900/80 backdrop-blur-sm text-white border-slate-800"
            as="a"
            href={personalInfo.linkedin}
            target="_blank"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </MovingBorderButton>

          <MovingBorderButton
            borderRadius="1.75rem"
            className="btn-glow bg-slate-900/80 backdrop-blur-sm text-white border-slate-800"
            as="a"
            href="/Rahou_Zakaria_CV.pdf"
            download="CV_Zakaria_Rahou.pdf"
          >
            <Download className="mr-2 h-5 w-5" />
            CV
          </MovingBorderButton>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={() => onScrollToSection("about")}
          className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors pulse-glow"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};
