/**
 * Contact Form Custom Hook
 * Manages form state, validation, and submission logic
 */

import { useState } from 'react';
import type { ContactFormData, FormStatus } from '@/types/portfolio';
import { FORM_STATUS_RESET_DELAY } from '@/constants/timeouts';

/**
 * Initial form state
 */
const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/**
 * Hook return type
 */
interface UseContactFormReturn {
  formData: ContactFormData;
  status: FormStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Custom hook for managing contact form state and logic
 * @returns Form state and handlers
 */
export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<FormStatus>('idle');

  /**
   * Handles input field changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Resets form to initial state
   */
  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setStatus('idle');
  };

  /**
   * Resets status after a delay
   */
  const resetStatusAfterDelay = () => {
    setTimeout(() => setStatus('idle'), FORM_STATUS_RESET_DELAY);
  };

  /**
   * Handles form submission
   */
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
        setFormData(INITIAL_FORM_DATA);
        resetStatusAfterDelay();
      } else {
        console.error('Form submission error:', data.error);
        setStatus('error');
        resetStatusAfterDelay();
      }
    } catch (error) {
      console.error('Network error during form submission:', error);
      setStatus('error');
      resetStatusAfterDelay();
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
