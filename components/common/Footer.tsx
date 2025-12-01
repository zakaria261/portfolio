/**
 * Footer Component
 * Displays footer information with copyright and credits
 */

import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 px-4 border-t border-white/10 backdrop-blur-xl bg-slate-900/40">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="text-neutral-300 gradient-text-primary text-sm">
          © {currentYear} {name}. Tous droits réservés.
        </p>
        <p className="text-xs text-neutral-400 mt-2">
          Fait avec ❤️ en utilisant{' '}
          <span className="gradient-text">Next.js</span> et{' '}
          <span className="gradient-text">Aceternity UI</span>
        </p>
      </div>
    </footer>
  );
};
