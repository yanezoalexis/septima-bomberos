"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/comitiva", label: "Comitiva" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/novedades", label: "Novedades" },
  { href: "/seguridad", label: "Seguridad" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-carbon-black/95 backdrop-blur-md shadow-lg shadow-fire-red/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full gradient-fire flex items-center justify-center animate-pulse-fire">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.5 2 5 5.5 5 10c0 3 1.5 5.5 4 7v3c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-3c2.5-1.5 4-4 4-7 0-4.5-3.5-8-7-8zm0 2c2.8 0 5 2.2 5 5 0 1.5-.5 3-1.5 4h-7C7.5 12 7 10.5 7 9c0-2.8 2.2-5 5-5zm0 3a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-2xl text-white tracking-wider">
                7ª COMPAÑÍA
              </span>
              <span className="block text-xs text-fog-gray -mt-1">
                Bomba Viña del Mar Alto
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-smoke-white/80 hover:text-fire-orange transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-fire group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+56322610397"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-fire-red/20 border border-fire-red/50 rounded-lg text-fire-red hover:bg-fire-red hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-semibold">Emergencias</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-1 bg-carbon-black/95 backdrop-blur-md rounded-lg p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white hover:bg-fire-red/20 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+56322610397"
                className="mt-2 px-4 py-3 bg-fire-red text-white rounded-lg text-center font-semibold"
              >
                Llamar Emergencias
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
