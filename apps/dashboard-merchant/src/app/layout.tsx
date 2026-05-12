import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UnKe - Dashboard Comercios",
  description: "Panel de control para comercios de la red UnKe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-unke-darker text-white min-h-screen`}>{children}</body>
    </html>
  );
}
