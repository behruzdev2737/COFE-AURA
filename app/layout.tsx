import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Roasters | Premium Artisan Coffee",
  description: "Experience the finest freshly roasted premium coffee.",
};

import { ToastContainer } from "@/components/Toast";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundGlow } from "@/components/BackgroundGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-[#1C1614] text-[#F5F5F0] antialiased overflow-x-hidden min-h-screen selection:bg-accent-gold selection:text-coffee-900 cursor-none relative">
        {/* Subtle cinematic film grain */}
        <div
          className="pointer-events-none fixed inset-0 z-[200] opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        ></div>

        <BackgroundGlow />
        <CustomCursor />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
