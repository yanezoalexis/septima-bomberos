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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/50" 
          : "bg-zinc-950"
      }`}
      style={{ height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full gradient-fire flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display text-lg">7ª</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-xl text-white tracking-wider block leading-tight">7ª COMPAÑÍA</span>
            <span className="text-xs text-zinc-500 block">Bomba Viña del Mar Alto</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm text-zinc-400 hover:text-orange-400 transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="tel:132" 
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            132
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden p-2 text-white"
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950 border-t border-zinc-800 shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:132" className="mt-2 px-4 py-3 bg-red-600 text-white text-center font-medium rounded-lg no-underline">
              Llamar 132
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
