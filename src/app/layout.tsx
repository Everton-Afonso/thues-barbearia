import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Header from "./components/header";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thues Barbearia",
  description: "Barbearia da Matheus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
