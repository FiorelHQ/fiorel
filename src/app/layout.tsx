import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fiorel | Train with Purpose",
    template: "%s | Fiorel",
  },
  description:
    "Fiorel connects training, recovery, nutrition and performance data to help endurance athletes make better daily decisions.",
  applicationName: "Fiorel",
  keywords: [
    "running",
    "endurance training",
    "AI running coach",
    "athlete nutrition",
    "recovery",
    "multisport",
    "training plans",
  ],
  authors: [{ name: "Fiorel" }],
  creator: "Fiorel",
  metadataBase: new URL("https://fiorel.co.uk"),
  openGraph: {
    title: "Fiorel | Train with Purpose",
    description:
      "The athlete operating system for training, recovery, nutrition and performance.",
    url: "https://fiorel.co.uk",
    siteName: "Fiorel",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiorel | Train with Purpose",
    description:
      "The athlete operating system for training, recovery, nutrition and performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#06101d] font-sans text-[#f8fafc] antialiased">
        {children}
      </body>
    </html>
  );
}