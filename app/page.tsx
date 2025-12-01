"use client";

import dynamic from 'next/dynamic';
import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Code,
  Database,
  Globe,
  Heart,
  Brain,
  Wrench,
  ExternalLink,
  Send,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { personalInfo, skills, experiences, projects, interests } from "@/data/portfolio-data";
import { PULSE_BEAMS_CONFIG, GRADIENT_COLORS, NAV_ITEMS } from "@/constants/portfolio";
import type { ContactFormData, FormStatus } from "@/types/portfolio";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const AnimatedBackground = dynamic(() => import('@/components/ui/animated-background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default function PortfolioUpgraded() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Erreur:', data.error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };


  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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

      <style jsx global>{`
        @keyframes spotlight {
          0% {
            opacity: 0;
            transform: translate(-72%, -62%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -40%) scale(1);
          }
        }
        .animate-spotlight {
          animation: spotlight 2s ease 0.75s 1 forwards;
        }

        .form-input:focus {
          outline: none;
          border-color: #60a5fa;
          box-shadow: 0 0 15px rgba(96, 165, 250, 0.5);
        }
      `}</style>
    </div>
  );
}