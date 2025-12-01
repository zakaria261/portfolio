/**
 * Contact Form API Route
 * Handles POST requests for contact form submissions
 */

import { NextResponse } from 'next/server';
import type { ContactFormData } from '@/types/portfolio';
import { sendContactEmail } from '@/services/emailService';

/**
 * POST handler for contact form submissions
 * @param request - The incoming request
 * @returns JSON response with success or error message
 */
export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();

    const result = await sendContactEmail(formData);

    if (result.success) {
      return NextResponse.json(
        { message: 'Email envoyé avec succès !' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: result.error || 'Une erreur est survenue.' },
      { status: 400 }
    );
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors du traitement de la requête.' },
      { status: 500 }
    );
  }
}
