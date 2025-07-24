import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Routines Pro - Rutinas Personalizadas",
  description: "Crea rutinas de gimnasio personalizadas para tus alumnos con demostraciones en video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
          {children}
        </div>
      </body>
    </html>
  );
}
