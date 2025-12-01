/**
 * Form Validation Utilities
 * Reusable validation functions for form inputs
 */

import type { ContactFormData } from '@/types/portfolio';

/**
 * Validation error messages
 */
export const VALIDATION_ERRORS = {
  REQUIRED_FIELDS: 'Les champs nom, email et message sont requis.',
  INVALID_EMAIL: 'L\'adresse email n\'est pas valide.',
  MESSAGE_TOO_SHORT: 'Le message doit contenir au moins 10 caractères.',
  NAME_TOO_SHORT: 'Le nom doit contenir au moins 2 caractères.',
} as const;

/**
 * Validates an email address format
 * @param email - The email address to validate
 * @returns true if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates contact form data
 * @param data - The form data to validate
 * @returns Object with isValid flag and optional error message
 */
export const validateContactForm = (
  data: ContactFormData
): { isValid: boolean; error?: string } => {
  const { name, email, message } = data;

  // Check required fields
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { isValid: false, error: VALIDATION_ERRORS.REQUIRED_FIELDS };
  }

  // Validate name length
  if (name.trim().length < 2) {
    return { isValid: false, error: VALIDATION_ERRORS.NAME_TOO_SHORT };
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return { isValid: false, error: VALIDATION_ERRORS.INVALID_EMAIL };
  }

  // Validate message length
  if (message.trim().length < 10) {
    return { isValid: false, error: VALIDATION_ERRORS.MESSAGE_TOO_SHORT };
  }

  return { isValid: true };
};

/**
 * Sanitizes user input by trimming whitespace
 * @param data - The form data to sanitize
 * @returns Sanitized form data
 */
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
  };
};
