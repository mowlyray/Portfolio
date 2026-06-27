import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mowly | MERN Stack Developer",
    template: "%s | Mowly",
  },

  description:
    "Personal portfolio of a MERN Stack & Next.js Developer showcasing projects, skills, certificates, and professional experience.",

  keywords: [
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Mowly",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
