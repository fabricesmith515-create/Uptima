import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uptima — Sites, applications & automatisations pour votre business",
  description:
    "Uptima conçoit vos sites, applications et automatisations avec la vitesse du no-code et la rigueur d'un vrai développeur. Studio digital pour entrepreneurs et PME d'Afrique francophone.",
  openGraph: {
    title: "Uptima — Studio digital",
    description:
      "La vitesse du no-code, la solidité d'un vrai développeur. Sites, applications et automatisations pour entrepreneurs et PME d'Afrique francophone.",
    locale: "fr_FR",
    type: "website",
    siteName: "Uptima",
  },
};

export const viewport: Viewport = {
  themeColor: "#EFEFEF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
