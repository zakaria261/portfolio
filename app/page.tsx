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
  Download,
  ChevronDown,
  Send,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Timeline } from "@/components/ui/timeline";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { personalInfo, skills, experiences, projects, interests } from "@/data/portfolio-data";
import { SplineScene } from "@/components/ui/splite";

const AnoAI = dynamic(() => import('@/components/ui/animated-shader-background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default function PortfolioUpgraded() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  // Configuration PulseBeams
  const beams = [
    {
      path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: {
          x1: ["0%", "0%", "200%"],
          x2: ["0%", "0%", "180%"],
          y1: ["80%", "0%", "0%"],
          y2: ["100%", "20%", "20%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 6.5, cy: 398.5, r: 6 },
        { cx: 269, cy: 220.5, r: 6 }
      ]
    },
    {
      path: "M568 200H841C846.523 200 851 195.523 851 190V40",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: {
          x1: ["20%", "100%", "100%"],
          x2: ["0%", "90%", "90%"],
          y1: ["80%", "80%", "-20%"],
          y2: ["100%", "100%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 851, cy: 34, r: 6.5 },
        { cx: 568, cy: 200, r: 6 }
      ]
    },
    {
      path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: {
          x1: ["20%", "100%", "100%"],
          x2: ["0%", "90%", "90%"],
          y1: ["80%", "80%", "-20%"],
          y2: ["100%", "100%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 142, cy: 427, r: 6.5 },
        { cx: 425.5, cy: 274, r: 6 }
      ]
    },
    {
      path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
      gradientConfig: {
        initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
        animate: {
          x1: "0%",
          x2: "10%",
          y1: "-40%",
          y2: "-20%",
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 770, cy: 427, r: 6.5 },
        { cx: 493, cy: 274, r: 6 }
      ]
    },
    {
      path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
      gradientConfig: {
        initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
        animate: {
          x1: ["40%", "0%", "0%"],
          x2: ["10%", "0%", "0%"],
          y1: ["0%", "0%", "180%"],
          y2: ["20%", "20%", "200%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop" as const,
          ease: "linear",
          repeatDelay: 2,
          delay: Math.random() * 2,
        },
      },
      connectionPoints: [
        { cx: 420.5, cy: 6.5, r: 6 },
        { cx: 380, cy: 168, r: 6 }
      ]
    }
  ];

  const gradientColors = {
    start: "#18CCFC",
    middle: "#6344F5",
    end: "#AE48FF"
  };

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

  const timelineData = experiences.map((exp) => ({
    title: exp.year,
    content: (
      <div className="glass-card glow-primary animate-slide-up p-4 md:p-5">
        <h3 className="gradient-text-primary text-xl md:text-2xl font-bold mb-2 leading-tight">{exp.title}</h3>
        <p className="gradient-text-secondary text-base md:text-lg font-semibold mb-1">{exp.company}</p>
        <p className="text-neutral-400 text-xs md:text-sm mb-3">{exp.location}</p>
        <p className="text-neutral-300 text-sm md:text-base mb-3 leading-relaxed">{exp.description}</p>
        <ul className="space-y-1.5 mb-3">
          {exp.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-neutral-400 text-xs md:text-sm">
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
              <span className="leading-snug">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-[10px] md:text-xs text-blue-300 hover:bg-blue-500/30 hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background Animé - AnoAI */}
      <div className="fixed inset-0 z-0">
        <AnoAI />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Navigation - CORRIGÉ */}
      <FloatingNav navItems={navItems} onNavItemClick={(id: string) => scrollToSection(id)} />

      {/* Hero Section avec PulseBeams */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      >
        {/* PulseBeams Effect */}
        <div className="absolute inset-0 z-[1] opacity-30">
          <PulseBeams
            beams={beams}
            gradientColors={gradientColors}
            className="bg-transparent"
          />
        </div>

        {/* Spline 3D (optionnel - peut être retiré si trop chargé) */}
        <div className="absolute inset-0 z-[2] opacity-20">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-[5]"
          fill="white"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400/70 glow-combined animate-float shadow-2xl shadow-blue-500/50">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={160}
                height={160}
                className="object-cover object-[center_15%] scale-125"
                priority
              />
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="gradient-text text-5xl md:text-7xl font-bold mb-6 text-shadow-glow">
              {personalInfo.name}
            </h1>
          </div>

          <div className="animate-slide-up stagger-1">
            <TypewriterEffect words={typewriterWords} className="mb-6" />
          </div>

          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up stagger-2 drop-shadow-lg">
            {personalInfo.description}
          </p>

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

            {/* Bouton CV - CORRIGÉ avec lien de téléchargement */}
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

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors pulse-glow"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
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

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-12 animate-slide-up drop-shadow-2xl">
            Parcours
          </h2>

          <div className="pt-2">
            <Timeline data={timelineData} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                        aria-label={`Voir ${project.title}`}
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

      {/* Contact Section avec PulseBeams */}
      <section id="contact" className="relative py-20 px-4">
        {/* PulseBeams pour cette section */}
        <div className="absolute inset-0 z-0 opacity-20">
          <PulseBeams
            beams={beams}
            gradientColors={gradientColors}
            className="bg-transparent"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="gradient-text text-4xl md:text-6xl font-bold text-center mb-6 animate-slide-up drop-shadow-2xl">
            Contact
          </h2>
          <p className="text-base md:text-lg text-neutral-200 text-center mb-10 animate-slide-up stagger-1 drop-shadow-lg">
            Discutons de projets et d'opportunités !
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card animated-border shimmer hover:glow-primary transition-all hover:scale-105 animate-scale-in p-3.5 backdrop-blur-xl bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/30 rounded-lg pulse-glow flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-300 mb-0.5">Email</p>
                  <p className="text-white font-semibold text-sm truncate">{personalInfo.email}</p>
                </div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="glass-card animated-border shimmer hover:glow-secondary transition-all hover:scale-105 animate-scale-in stagger-1 p-3.5 backdrop-blur-xl bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-cyan-500/30 rounded-lg pulse-glow flex-shrink-0">
                  <Phone className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-300 mb-0.5">Téléphone</p>
                  <p className="text-white font-semibold text-sm">{personalInfo.phone}</p>
                </div>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card animated-border shimmer hover:glow-primary transition-all hover:scale-105 animate-scale-in stagger-2 p-3.5 backdrop-blur-xl bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/30 rounded-lg pulse-glow flex-shrink-0">
                  <Linkedin className="h-5 w-5 text-blue-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-300 mb-0.5">LinkedIn</p>
                  <p className="text-white font-semibold text-sm">zakaria-rahou</p>
                </div>
              </div>
            </a>

            <div className="glass-card hover:glow-secondary transition-all hover:scale-105 animate-scale-in stagger-3 p-3.5 backdrop-blur-xl bg-slate-900/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-cyan-500/30 rounded-lg pulse-glow flex-shrink-0">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-300 mb-0.5">Localisation</p>
                  <p className="text-white font-semibold text-sm truncate">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire */}
          <div className="glass-card animated-border p-5 md:p-6 animate-slide-up stagger-3 mb-10 backdrop-blur-xl bg-slate-900/60">
            <h3 className="gradient-text-secondary text-xl md:text-2xl font-bold mb-5 text-center">Envoyez un message</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2.5 rounded-lg form-input text-sm text-white bg-black/40 backdrop-blur-md border-white/20 focus:border-blue-400 focus:ring-blue-400" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-2.5 rounded-lg form-input text-sm text-white bg-black/40 backdrop-blur-md border-white/20 focus:border-blue-400 focus:ring-blue-400" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="w-full p-2.5 rounded-lg form-input text-sm text-white bg-black/40 backdrop-blur-md border-white/20 focus:border-blue-400 focus:ring-blue-400" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  required 
                  className="w-full p-2.5 rounded-lg form-input text-sm text-white resize-none bg-black/40 backdrop-blur-md border-white/20 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              <div>
                <MovingBorderButton
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-glow bg-slate-900/80 backdrop-blur-sm text-white border-slate-800"
                  borderRadius="1.75rem"
                >
                  <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                    {status === 'sending' ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer
                      </>
                    )}
                  </div>
                </MovingBorderButton>
              </div>
              {status === 'success' && <p className="text-green-400 text-center text-sm">✅ Message envoyé avec succès sur votre Yahoo !</p>}
              {status === 'error' && <p className="text-red-400 text-center text-sm">❌ Erreur lors de l'envoi. Veuillez réessayer.</p>}
            </form>
          </div>

          {/* Interests */}
          <div className="glass-card animated-border animate-slide-up stagger-4 p-5 md:p-6 backdrop-blur-xl bg-slate-900/60">
            <h3 className="gradient-text-secondary text-xl md:text-2xl font-bold mb-5">
              Centres d'Intérêt
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="p-3 backdrop-blur-md bg-slate-800/40 rounded-xl hover:bg-slate-800/60 hover:glow-primary transition-all hover:scale-105"
                >
                  <p className="text-xl mb-1.5">{interest.emoji}</p>
                  <p className="font-semibold text-white text-sm mb-1">{interest.title}</p>
                  <p className="text-xs text-neutral-200 leading-snug">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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