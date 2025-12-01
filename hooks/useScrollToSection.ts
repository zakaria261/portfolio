/**
 * Scroll Navigation Custom Hook
 * Manages smooth scrolling to sections and active section tracking
 */

import { useState, useCallback } from 'react';

/**
 * Hook return type
 */
interface UseScrollToSectionReturn {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  setActiveSection: (sectionId: string) => void;
}

/**
 * Custom hook for managing section navigation and active state
 * @param initialSection - The initial active section (default: "home")
 * @returns Navigation state and handlers
 */
export const useScrollToSection = (
  initialSection: string = 'home'
): UseScrollToSectionReturn => {
  const [activeSection, setActiveSection] = useState<string>(initialSection);

  /**
   * Scrolls smoothly to a specific section
   * @param sectionId - The ID of the section to scroll to
   */
  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    activeSection,
    scrollToSection,
    setActiveSection,
  };
};
