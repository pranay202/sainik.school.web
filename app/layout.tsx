import type { Metadata } from "next";
import { Inter, Montserrat, Russo_One } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo-one",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${montserrat.variable} ${russoOne.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
