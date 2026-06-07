import type { Metadata } from "next";
import { Oswald, Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isolation Comble, Renovation Toiture - Carcassonne / Aude",
  description: "L'entreprise Pierson effectue tout type de travaux sur la toiture et les combles. Nous réalisons les devis gratuitement, pour la rénovation, l'isolation ou le traitement des bois. Nous intervenons sur Carcassonne et les alentours dans le département de l'Aude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${oswald.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
