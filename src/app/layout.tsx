import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ying Chung — Interaction Designer",
  description: "Human-centered interaction designer based in New York. Turning ambiguity into clear, quietly delightful experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
