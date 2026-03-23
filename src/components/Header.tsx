"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Historia" },
  { href: "/comitiva", label: "Comitiva" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/instagram", label: "Instagram" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-zinc-950/98 backdrop-blur-lg shadow-2xl shadow-black/50 border-b border-zinc-800/50" 
            : "bg-gradient-to-b from-zinc-950/95 to-zinc-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full gradient-fire flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-display text-xl">7ª</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-2xl text-white tracking-wider block leading-tight group-hover:text-orange-400 transition-colors">7ª COMPAÑÍA</span>
                <span className="text-xs text-zinc-500 block">Bomba Viña del Mar Alto</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-all duration-200 relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-orange-600/10 group-hover:to-transparent rounded-lg transition-all duration-200"></span>
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-[calc(100%-2rem)] group-hover:left-1 transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href="tel:132" 
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>132</span>
              </a>

              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)} 
                className="lg:hidden p-2 text-white hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-lg border-t border-zinc-800/50 animate-slide-up">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileOpen(false)} 
                  className="px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  {link.label}
                </Link>
              ))}
              <a href="tel:132" className="mt-2 px-4 py-3 bg-red-600 text-white text-center font-bold rounded-lg">
                Llamar 132
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
