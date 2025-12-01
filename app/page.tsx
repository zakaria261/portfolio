"use client";

import dynamic from 'next/dynamic';
import React from "react";
import { Code } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { personalInfo, skills, experiences, projects, interests } from "@/data/portfolio-data";
import { NAV_ITEMS } from "@/constants/portfolio";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useContactForm } from "@/hooks/useContactForm";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const AnimatedBackground = dynamic(() => import('@/components/ui/animated-background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default function PortfolioUpgraded() {
  const { formData, status, handleChange, handleSubmit } = useContactForm();
  const { scrollToSection } = useScrollToSection();

  const navItems = NAV_ITEMS.map(item => ({
    ...item,
    icon: <Code className="h-4 w-4" />
  }));



  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated Background (Gradients + Particles) */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
        {/* Overlay to improve readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Navigation - CORRIGÉ */}
      <FloatingNav navItems={navItems} onNavItemClick={(id: string) => scrollToSection(id)} />

      {/* Hero Section */}
      <HeroSection
        personalInfo={personalInfo}
        onScrollToSection={scrollToSection}
      />

      {/* About Section */}
      <AboutSection personalInfo={personalInfo} />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <ContactSection
        personalInfo={personalInfo}
        interests={interests}
        formData={formData}
        status={status}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
      />

      {/* Footer */}
      <footer className="relative py-6 px-4 border-t border-white/10 backdrop-blur-xl bg-slate-900/40">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-neutral-300 gradient-text-primary text-sm">
            © 2025 {personalInfo.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-neutral-400 mt-2">
            Fait avec ❤️ en utilisant <span className="gradient-text">Next.js</span> et <span className="gradient-text">Aceternity UI</span>
          </p>
        </div>
      </footer>
    </div>
  );
}