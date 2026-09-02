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
import { AppProvider } from "@/components/AppContext";
import { Preloader } from "@/components/Preloader";
import { MobileMenu } from "@/components/MobileMenu";
import { CartSidebar } from "@/components/CartSidebar";

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
      <body className="bg-[#0B0806] text-[#F5F5F0] antialiased overflow-x-hidden min-h-screen selection:bg-accent-gold selection:text-coffee-900 relative">
        <AppProvider>
          <Preloader />
          <MobileMenu />
          <CartSidebar />
          {children}
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
