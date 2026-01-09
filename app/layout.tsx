import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tools to manage and grow your podcast - Spotify for Creators",
  description: "Landing page clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${inter.className}
          min-h-full
          bg-black
          text-white
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
