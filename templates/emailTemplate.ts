/**
 * Email Template Generator
 * Generates HTML email templates for contact form submissions
 */

interface EmailTemplateData {
  name: string;
  email: string;
  message: string;
}

/**
 * Generates an HTML email template for contact form submissions
 * @param data - The form data containing name, email, and message
 * @returns Formatted HTML email string
 */
export const generateContactEmailTemplate = ({ name, email, message }: EmailTemplateData): string => {
  return `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">

        <h1 style="color: #2a2a2a; border-bottom: 2px solid #eeeeee; padding-bottom: 15px; margin-bottom: 20px; font-size: 24px;">
          Nouveau message du Portfolio
        </h1>

        <div style="font-size: 16px; line-height: 1.6; color: #555555;">
          <p>Vous avez reçu une nouvelle soumission via votre formulaire de contact.</p>

          <div style="background-color: #f9f9f9; border-left: 4px solid #6344F5; padding: 15px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nom :</strong> ${name}</p>
            <p style="margin: 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #6344F5; text-decoration: none;">${email}</a></p>
          </div>

          <h2 style="color: #333333; margin-top: 30px; font-size: 20px;">Contenu du message :</h2>

          <div style="white-space: pre-wrap; background-color: #fafafa; padding: 20px; border-radius: 5px; border: 1px solid #eaeaea; color: #333;">${message}</div>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eeeeee; font-size: 12px; color: #999999;">
          <p>Cet e-mail a été envoyé automatiquement depuis votre site portfolio.</p>
        </div>

      </div>
    </body>
  `;
};
