import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/providers";

import Navbar from "@/components/layout/Navbar";
import AuroraBackground from "@/components/ui/AuroraBackground";
import CustomCursor from "@/components/effects/CustomCursor";
import Footer from "@/components/footer/Footer";
import { siteUrl } from "@/lib/site-config";


// const geistSans = Geist({
//   variable: "--font-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const siteTitle = "Mowly | MERN Stack Developer";
const siteDescription =
  "Personal portfolio of a MERN Stack & Next.js Developer showcasing projects, skills, certificates, and professional experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Mowly",
  },

  description: siteDescription,

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

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mowly",
    title: siteTitle,
    description: siteDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
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
      // className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen font-sans text-foreground antialiased">
        <Providers>
          <NextTopLoader color="#22d3ee" showSpinner={false} height={3} />
          <ScrollToTop />
          <AuroraBackground>
            <CustomCursor />
            <Navbar />

            <main className="relative z-10 ">{children}</main>

            <Footer />

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