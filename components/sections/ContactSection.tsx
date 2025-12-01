/**
 * Contact Section
 * Displays contact information, form, and interests using card components
 */

import React from 'react';
import { Mail, Phone, Linkedin as LinkedinIcon, MapPin, Send } from 'lucide-react';
import { MovingBorderButton } from '@/components/ui/moving-border';
import { PulseBeams } from '@/components/ui/pulse-beams';
import { PULSE_BEAMS_CONFIG, GRADIENT_COLORS } from '@/constants/portfolio';
import { ContactInfoCard } from '@/components/cards/ContactInfoCard';
import { InterestCard } from '@/components/cards/InterestCard';
import { extractLinkedInUsername } from '@/utils/url';
import type { PersonalInfo, Interest, ContactFormData, FormStatus } from '@/types/portfolio';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  interests: Interest[];
  formData: ContactFormData;
  status: FormStatus;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  personalInfo,
  interests,
  formData,
  status,
  onFormChange,
  onFormSubmit,
}) => {
  return (
    <section id="contact" className="relative py-20 px-4">
      {/* PulseBeams for this section */}
      <div className="absolute inset-0 z-0 opacity-20">
        <PulseBeams
          beams={PULSE_BEAMS_CONFIG}
          gradientColors={GRADIENT_COLORS}
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
          <ContactInfoCard
            icon={Mail}
            iconColor="blue"
            label="Email"
            value={personalInfo.email}
            href={`mailto:${personalInfo.email}`}
          />

          <ContactInfoCard
            icon={Phone}
            iconColor="cyan"
            label="Téléphone"
            value={personalInfo.phone}
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            staggerClass="stagger-1"
          />

          <ContactInfoCard
            icon={LinkedinIcon}
            iconColor="blue"
            label="LinkedIn"
            value={extractLinkedInUsername(personalInfo.linkedin)}
            href={personalInfo.linkedin}
            staggerClass="stagger-2"
          />

          <ContactInfoCard
            icon={MapPin}
            iconColor="cyan"
            label="Localisation"
            value={personalInfo.location}
            variant="static"
            staggerClass="stagger-3"
          />
        </div>

        {/* Contact Form */}
        <div className="glass-card animated-border p-5 md:p-6 animate-slide-up stagger-3 mb-10 backdrop-blur-xl bg-slate-900/60">
          <h3 className="gradient-text-secondary text-xl md:text-2xl font-bold mb-5 text-center">
            Envoyez un message
          </h3>

          <form onSubmit={onFormSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onFormChange}
                  required
                  className="w-full p-2.5 rounded-lg text-sm text-white bg-black/40 backdrop-blur-md border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onFormChange}
                  required
                  className="w-full p-2.5 rounded-lg text-sm text-white bg-black/40 backdrop-blur-md border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={onFormChange}
                className="w-full p-2.5 rounded-lg text-sm text-white bg-black/40 backdrop-blur-md border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-neutral-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onFormChange}
                rows={4}
                required
                className="w-full p-2.5 rounded-lg text-sm text-white resize-none bg-black/40 backdrop-blur-md border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
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

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm">
                ✅ Message envoyé avec succès sur votre Yahoo !
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-center text-sm">
                ❌ Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>

        {/* Interests */}
        <div className="glass-card animated-border animate-slide-up stagger-4 p-5 md:p-6 backdrop-blur-xl bg-slate-900/60">
          <h3 className="gradient-text-secondary text-xl md:text-2xl font-bold mb-5">
            Centres d'Intérêt
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interests.map((interest, index) => (
              <InterestCard key={index} interest={interest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
