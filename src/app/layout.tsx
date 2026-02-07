import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CorporateNavbar from "@/components/CorporateNavbar";
import CorporateFooter from "@/components/CorporateFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRUSTNATION | Gem Dynamics Corporate",
  description: "Architecting the future of human-agent symbiosis through the D.E.E.P. Framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <CorporateNavbar />
        {children}
        <CorporateFooter />
      </body>
    </html>
  );
}
