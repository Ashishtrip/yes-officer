import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yes Officer - GeM Integrated Compliance Suite",
  description: "Sovereign Compliance Gateway",
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-surface font-body-md text-body-md text-on-surface`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
