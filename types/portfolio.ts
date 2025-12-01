/**
 * Portfolio Type Definitions
 * Centralized TypeScript interfaces for portfolio data
 */

// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

// Skills
export interface Skill {
  title: string;
  skills: string[];
  icon: string;
  description: string;
}

// Experience / Education
export interface Experience {
  year: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  points: string[];
  skills: string[];
}

// Projects
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: string;
  featured: boolean;
}

// Interests / Hobbies
export interface Interest {
  emoji: string;
  title: string;
  description: string;
}

// Testimonials
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

// Form data for contact form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Form submission status
export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// Navigation item
export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

// Typewriter word
export interface TypewriterWord {
  text: string;
  className?: string;
}
