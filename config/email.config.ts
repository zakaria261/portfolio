/**
 * Email Configuration
 * Centralized SMTP and email settings
 */

/**
 * SMTP Server Configuration
 */
export const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
} as const;

/**
 * Email Authentication Configuration
 * Retrieves credentials from environment variables
 */
export const getEmailAuth = () => {
  const user = process.env.YAHOO_EMAIL;
  const pass = process.env.YAHOO_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error('Email credentials are not properly configured in environment variables');
  }

  return { user, pass };
};

/**
 * Recipient Email Configuration
 */
export const getRecipientEmail = () => {
  const email = process.env.YAHOO_EMAIL;

  if (!email) {
    throw new Error('Recipient email is not configured in environment variables');
  }

  return email;
};

/**
 * Email Subject Prefix
 */
export const EMAIL_SUBJECT_PREFIX = '[Portfolio Contact]';
