import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './tailwind.css';
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Examples animation with framer-motion",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
