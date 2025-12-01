/**
 * Email Service
 * Handles email sending logic with proper separation of concerns
 */

import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/types/portfolio';
import { SMTP_CONFIG, getEmailAuth, getRecipientEmail, EMAIL_SUBJECT_PREFIX } from '@/config/email.config';
import { generateContactEmailTemplate } from '@/templates/emailTemplate';
import { validateContactForm, sanitizeFormData } from '@/utils/validation';

/**
 * Email sending result
 */
interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Creates and configures a nodemailer transporter
 * @returns Configured nodemailer transporter
 */
const createEmailTransporter = () => {
  const auth = getEmailAuth();

  return nodemailer.createTransport({
    ...SMTP_CONFIG,
    auth,
  });
};

/**
 * Sends a contact form email
 * @param formData - The contact form data
 * @returns Promise with the result of the email sending operation
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResult> => {
  try {
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return {
        success: false,
        error: validation.error,
      };
    }

    // Sanitize form data
    const sanitizedData = sanitizeFormData(formData);

    // Create email transporter
    const transporter = createEmailTransporter();

    // Get recipient email
    const recipientEmail = getRecipientEmail();

    // Prepare email options
    const mailOptions = {
      from: `"Portfolio" <${recipientEmail}>`,
      to: recipientEmail,
      replyTo: sanitizedData.email,
      subject: `${EMAIL_SUBJECT_PREFIX} Nouveau message de : ${sanitizedData.name}`,
      html: generateContactEmailTemplate({
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
      }),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.',
    };
  }
};
