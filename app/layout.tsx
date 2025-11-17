import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zakaria RAHOU - Data Engineering Student",
  description: "Portfolio professionnel de Zakaria RAHOU, étudiant ingénieur en informatique et sciences des données à Polytech Annecy. Spécialisé en data engineering, intelligence artificielle et développement full-stack.",
  keywords: ["Data Engineering", "Data Science", "Full Stack", "React", "Next.js", "Python", "Machine Learning", "AI"],
  authors: [{ name: "Zakaria RAHOU" }],
  openGraph: {
    title: "Zakaria RAHOU - Data Engineering Student",
    description: "Portfolio professionnel - Data Engineering & Full Stack Development",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ajout de la classe "dark" ici
    <html lang="fr" className="dark scroll-smooth"> 
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}