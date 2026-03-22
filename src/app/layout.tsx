import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "7ª Compañía de Bomberos | Viña del Mar",
  description: "Sitio web oficial de la Séptima Compañía de Bomberos de Viña del Mar. Abnegación, Servicio y Disciplina desde 1971.",
  keywords: ["bomberos", "Viña del Mar", "7ª Compañía", "emergencias", "rescate", "incendios"],
  authors: [{ name: "7ª Compañía de Bomberos Viña del Mar" }],
  openGraph: {
    title: "7ª Compañía de Bomberos | Viña del Mar",
    description: "Abnegación, Servicio y Disciplina desde 1971",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
