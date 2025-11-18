// Fichier : app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// La fonction doit être nommée 'POST' car votre formulaire envoie une requête POST.
export async function POST(request: Request) {
  try {
    // 1. Récupérer les données du corps de la requête (la syntaxe change ici)
    const { name, email, subject, message } = await request.json();

    // Vérification simple des données
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Les champs nom, email et message sont requis.' }, { status: 400 });
    }

    // 2. Configurer Nodemailer (cette partie ne change pas)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.YAHOO_EMAIL,
        pass: process.env.YAHOO_APP_PASSWORD,
      },
    });

    // Fichier : app/api/send-email/route.ts

// ... (le début du fichier reste le même)

    // 3. Préparer l'e-mail avec un template HTML amélioré
    const mailOptions = {
      from: `"Portfolio" <${process.env.YAHOO_EMAIL}>`, // YAHOO_EMAIL est maintenant votre gmail
      to: process.env.YAHOO_EMAIL, // Vous recevez l'email sur votre gmail
      replyTo: email,
      subject: `[Portfolio Contact] Nouveau message de : ${name}`, // Sujet amélioré pour le filtrage
      
      // === DEBUT DU NOUVEAU TEMPLATE HTML ===
      html: `
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
      `,
      // === FIN DU NOUVEAU TEMPLATE HTML ===
    };

    // 4. Envoyer l'e-mail (cette partie ne change pas)
// ... (la fin du fichier reste la même)
    // 4. Envoyer l'e-mail
    await transporter.sendMail(mailOptions);

    // 5. Renvoyer une réponse de succès (la syntaxe change ici)
    return NextResponse.json({ message: 'Email envoyé avec succès !' }, { status: 200 });

  // ... début du fichier ...

  } catch (error) {
    // MODIFICATION ICI : Affichez l'erreur complète dans le terminal
    console.error("--- ERREUR NODEMAILER DÉTAILLÉE ---");
    console.error(error);
    console.error("---------------------------------");
    
    // Renvoyer une réponse d'erreur
    return NextResponse.json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.' }, { status: 500 });
  }
}