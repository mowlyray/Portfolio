import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/providers";

import Navbar from "@/components/layout/Navbar";
import AuroraBackground from "@/components/ui/AuroraBackground";
import MouseGlow from "@/components/effects/MouseGlow";
import CustomCursor from "@/components/effects/CustomCursor";

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
        <Providers>
          <ScrollToTop />
          <AuroraBackground>
            <MouseGlow />
            <CustomCursor />
            <Navbar />

            <main className="relative z-10 ">{children}</main>

            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,

                style: {
                  background: "rgba(255,255,255,.08)",
                  color: "#fff",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.15)",
                  borderRadius: "16px",
                },
              }}
            />
          </AuroraBackground>
        </Providers>
      </body>
    </html>
  );
}