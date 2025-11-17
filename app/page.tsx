"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Github,
  Code,
  Database,
  Globe,
  Heart,
  Brain,
  Wrench,
  ExternalLink,
  Download,
  ChevronDown,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Timeline } from "@/components/ui/timeline";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { personalInfo, skills, experiences, projects, interests } from "@/data/portfolio-data";
import { SplineScene } from "@/components/ui/splite";


export default function PortfolioUpgraded() {
  const [activeSection, setActiveSection] = useState("home");

  // Configuration des beams animés
  const beamPaths = [
    {
      path: "M0 100 Q 200 50 400 100 T 800 100",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: {
          x1: ["0%", "100%"],
          x2: ["0%", "100%"],
          y1: ["0%", "0%"],
          y2: ["0%", "0%"],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 0,
        },
      },
    },
    {
      path: "M0 200 Q 300 150 600 200 T 1200 200",
      gradientConfig: {
        initial: { x1: "100%", x2: "100%", y1: "0%", y2: "0%" },
        animate: {
          x1: ["100%", "0%"],
          x2: ["100%", "0%"],
          y1: ["0%", "0%"],
          y2: ["0%", "0%"],
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 0,
          delay: 1,
        },
      },
    },
    {
      path: "M0 300 Q 250 250 500 300 T 1000 300",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: {
          x1: ["0%", "100%"],
          x2: ["0%", "100%"],
          y1: ["0%", "0%"],
          y2: ["0%", "0%"],
        },
        transition: {
          duration: 3.5,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 0,
          delay: 0.5,
        },
      },
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Accueil", link: "#home", icon: <Code className="h-4 w-4" /> },
    { name: "À propos", link: "#about", icon: <Code className="h-4 w-4" /> },
    { name: "Compétences", link: "#skills", icon: <Code className="h-4 w-4" /> },
    { name: "Expérience", link: "#experience", icon: <Code className="h-4 w-4" /> },
    { name: "Projets", link: "#projects", icon: <Code className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <Code className="h-4 w-4" /> },
  ];

  const typewriterWords = [
    { text: "Data" },
    { text: "Engineering" },
    { text: "Student", className: "text-blue-500" },
  ];

  const getSkillIcon = (iconName: string) => {
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

  // Timeline data preparation avec glass-card
  const timelineData = experiences.map((exp) => ({
    title: exp.year,
    content: (
      <div className="glass-card glow-primary animate-slide-up">
        <h3 className="gradient-text-primary text-2xl font-bold mb-2">{exp.title}</h3>
        <p className="gradient-text-secondary text-lg font-semibold mb-1">{exp.company}</p>
        <p className="text-neutral-400 text-sm mb-4">{exp.location}</p>
        <p className="text-neutral-300 mb-4">{exp.description}</p>
        <ul className="space-y-2 mb-4">
          {exp.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-neutral-400 text-sm">
              <span className="text-cyan-400 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 overflow-hidden">
      {/* Background Effects avec animations */}
      <div className="fixed inset-0 z-0">
        <BackgroundBeams />
        {/* Pattern de points en arrière-plan */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section - AMÉLIORÉ avec Spline 3D */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      >
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          {/* Overlay gradient pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/50 to-neutral-950/90" />
        </div>

        {/* Spotlight Effect */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-[5]"
          fill="white"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Profile Image avec animate-float */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/50 glow-combined animate-float">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name avec gradient-text */}
          <div className="animate-slide-up">
            <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 text-shadow-glow">
              {personalInfo.name}
            </h1>
          </div>

          {/* Typewriter Title */}
          <div className="animate-slide-up stagger-1">
            <TypewriterEffect words={typewriterWords} className="mb-6" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up stagger-2">
            {personalInfo.description}
          </p>

          {/* CTA Buttons avec btn-glow */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up stagger-3">
            <MovingBorderButton
              borderRadius="1.75rem"
              className="btn-glow bg-slate-900 text-white border-slate-800"
              as="a"
              href={`mailto:${personalInfo.email}`}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </MovingBorderButton>

            <MovingBorderButton
              borderRadius="1.75rem"
              className="btn-glow bg-slate-900 text-white border-slate-800"
              as="a"
              href={personalInfo.linkedin}
              target="_blank"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </MovingBorderButton>

            <MovingBorderButton
              borderRadius="1.75rem"
              className="btn-glow bg-slate-900 text-white border-slate-800"
              as="button"
            >
              <Download className="mr-2 h-5 w-5" />
              CV
            </MovingBorderButton>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors pulse-glow"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </section>

      {/* About Section - AMÉLIORÉ */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-16 animate-slide-up">
            À propos
          </h2>

          <div className="glass-card animated-border shimmer animate-scale-in">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Je suis actuellement étudiant en <span className="gradient-text-primary font-semibold">Master of Science</span> en 
              Informatique et Ingénierie des Données à <span className="gradient-text-secondary font-semibold">Polytech Annecy</span>, 
              avec une graduation prévue en septembre 2027. Mon parcours académique est axé sur la science des données, 
              l'intelligence artificielle, le développement logiciel et l'informatique centrée sur l'utilisateur.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              J'ai acquis une solide expérience pratique à travers divers projets et stages, incluant le développement 
              d'applications web, l'analyse de données et la gestion de projets techniques. Passionné par l'innovation 
              technologique et son impact social.
            </p>

            {/* Contact Info Grid avec glow effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 glass-card hover:glow-primary transition-all">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-neutral-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-card hover:glow-primary transition-all">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-neutral-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 p-4 glass-card hover:glow-secondary transition-all md:col-span-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-neutral-300">{personalInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - AMÉLIORÉ avec Bento Grid et PulseBeams */}
      <section id="skills" className="relative py-20 px-4">
        {/* PulseBeams Background */}
        <PulseBeams
          beams={beamPaths}
          className="absolute inset-0 opacity-30"
          width={1200}
          height={800}
          baseColor="rgba(59, 130, 246, 0.2)"
          accentColor="rgba(59, 130, 246, 0.4)"
          gradientColors={{
            start: "#3b82f6",
            middle: "#06b6d4",
            end: "#8b5cf6",
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-16 animate-slide-up">
            Compétences
          </h2>

          <BentoGrid className="max-w-6xl mx-auto">
            {skills.map((skill, idx) => (
              <BentoGridItem
                key={idx}
                title={<span className="gradient-text-primary">{skill.title}</span>}
                description={skill.description}
                header={
                  <div className="flex items-center gap-3 p-4 glow-primary">
                    {getSkillIcon(skill.icon)}
                  </div>
                }
                className={`${idx === 3 || idx === 4 ? "md:col-span-2" : ""} animate-slide-up stagger-${(idx % 5) + 1}`}
                icon={
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 hover:scale-105 transition-all cursor-default shimmer"
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

      {/* Experience Section - AMÉLIORÉ avec Timeline */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-16 animate-slide-up">
            Parcours
          </h2>

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Projects Section - AMÉLIORÉ avec 3D Cards */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-16 animate-slide-up">
            Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <CardContainer key={idx} className="inter-var m-4">
                <CardBody className="glass-card animated-border group/card relative w-auto sm:w-[30rem] h-auto hover:glow-combined transition-all duration-300">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold mb-2"
                  >
                    <span className="gradient-text-primary">{project.title}</span>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm mb-4 line-clamp-3"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md text-xs text-blue-300 shimmer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:bg-white/10 transition-colors"
                    >
                      Détails →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold hover:bg-blue-600 btn-glow"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - AMÉLIORÉ */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-8 animate-slide-up">
            Contact
          </h2>
          <p className="text-xl text-neutral-400 text-center mb-12 animate-slide-up stagger-1">
            N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger !
          </p>

          {/* Contact Cards avec glow effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card animated-border shimmer hover:glow-primary transition-all hover:scale-105 animate-scale-in"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg pulse-glow">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-white font-semibold">{personalInfo.email}</p>
                </div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="glass-card animated-border shimmer hover:glow-secondary transition-all hover:scale-105 animate-scale-in stagger-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg pulse-glow">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Téléphone</p>
                  <p className="text-white font-semibold">{personalInfo.phone}</p>
                </div>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animated-border shimmer hover:glow-primary transition-all hover:scale-105 animate-scale-in stagger-2"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg pulse-glow">
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">LinkedIn</p>
                  <p className="text-white font-semibold">zakaria-rahou</p>
                </div>
              </div>
            </a>

            <div className="glass-card hover:glow-secondary transition-all hover:scale-105 animate-scale-in stagger-3">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg pulse-glow">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Localisation</p>
                  <p className="text-white font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests avec glass-card */}
          <div className="glass-card animated-border animate-slide-up stagger-4">
            <h3 className="gradient-text-secondary text-2xl font-bold mb-6">Centres d'Intérêt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-4 backdrop-medium rounded-xl hover:backdrop-heavy hover:glow-primary transition-all hover:scale-105"
                >
                  <p className="text-2xl mb-2">{interest.emoji}</p>
                  <p className="font-semibold text-white mb-1">{interest.title}</p>
                  <p className="text-sm text-neutral-400">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - AMÉLIORÉ */}
      <footer className="relative py-8 px-4 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-neutral-400 gradient-text-primary">
            © 2025 {personalInfo.name}. Tous droits réservés.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Fait avec ❤️ en utilisant <span className="gradient-text">Next.js</span> et <span className="gradient-text">Aceternity UI</span>
          </p>
        </div>
      </footer>

      {/* Animation CSS pour Spotlight */}
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
      `}</style>
    </div>
  );
}