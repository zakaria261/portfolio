/**
 * ContactInfoCard Component
 * Displays a contact information item (email, phone, linkedin, location)
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

type ContactInfoCardVariant = 'link' | 'static';

interface ContactInfoCardProps {
  icon: LucideIcon;
  iconColor: 'blue' | 'cyan';
  label: string;
  value: string;
  href?: string;
  staggerClass?: string;
  variant?: ContactInfoCardVariant;
}

const iconColorClasses = {
  blue: 'bg-blue-500/30 text-blue-300',
  cyan: 'bg-cyan-500/30 text-cyan-300',
};

const hoverClasses = {
  blue: 'hover:glow-primary',
  cyan: 'hover:glow-secondary',
};

/**
 * ContactInfoCard - Displays a single contact information item
 * @param icon - Lucide icon component
 * @param iconColor - Color variant for the icon (blue or cyan)
 * @param label - Label for the contact info (e.g., "Email", "Phone")
 * @param value - The actual contact value
 * @param href - Optional link URL (for email, phone, linkedin)
 * @param staggerClass - Optional animation stagger class
 * @param variant - Card variant (link or static)
 */
export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  iconColor,
  label,
  value,
  href,
  staggerClass = '',
  variant = 'link',
}) => {
  const content = (
    <div className="flex items-center gap-3">
      <div className={`p-2.5 ${iconColorClasses[iconColor]} rounded-lg pulse-glow flex-shrink-0`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-neutral-300 mb-0.5">{label}</p>
        <p className="text-white font-semibold text-sm truncate">{value}</p>
      </div>
    </div>
  );

  const baseClasses = `glass-card animated-border shimmer transition-all hover:scale-105 animate-scale-in ${staggerClass} p-3.5 backdrop-blur-xl bg-slate-900/60`;

  if (variant === 'link' && href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${hoverClasses[iconColor]}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${hoverClasses[iconColor]}`}>
      {content}
    </div>
  );
};
