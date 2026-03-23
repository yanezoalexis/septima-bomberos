"use client";

import { useEffect, useState, useRef } from "react";

function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const context = ctx;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#E63946", "#F4A261", "#FFD166", "#FF6B35"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * c.width,
        y: c.height + Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    function animate() {
      context.fillStyle = "rgba(0, 0, 0, 0.1)";
      context.fillRect(0, 0, c.width, c.height);

      particles.forEach((p, index) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.001;

        if (p.y < -50 || p.opacity <= 0) {
          particles[index] = {
            ...p,
            y: c.height + Math.random() * 50,
            x: Math.random() * c.width,
            opacity: Math.random() * 0.5 + 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
          };
        }

        context.beginPath();
        context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        context.fillStyle = p.color;
        context.globalAlpha = p.opacity;
        context.fill();
        context.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
    />
  );
}

function Counter({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-radial from-red-600/20 via-transparent to-transparent opacity-50" />
        
        <FireParticles />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400 font-medium">Sirviendo a Viña del Mar desde 1971</span>
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 animate-fire-glow tracking-wider">
            7ª COMPAÑÍA
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600" />
            <span className="font-accent text-xl sm:text-2xl text-orange-400 tracking-widest">
              BOMBEROS VIÑA DEL MAR
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          <p className="text-lg sm:text-xl text-gray-400 mb-4 font-light max-w-2xl mx-auto animate-slide-up">
            <span className="text-red-500 font-semibold">Abnegación</span> •{" "}
            <span className="text-orange-400 font-semibold">Servicio</span> •{" "}
            <span className="text-yellow-400 font-semibold">Disciplina</span>
          </p>

          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-12 animate-slide-up">
            Bomba Viña del Mar Alto - Protectores de la comunidad
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a
              href="/historia"
              className="px-8 py-4 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300"
            >
              Conoce Nuestra Historia
            </a>
            <a
              href="tel:132"
              className="px-8 py-4 bg-transparent border-2 border-red-600 text-red-500 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Emergencias: 132
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
      </section>

      <section className="py-16 bg-stone-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display text-red-500 mb-2">
                <Counter end={53} duration={2000} />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Años de Servicio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display text-orange-400 mb-2">
                <Counter end={500} duration={2000} suffix="+" />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Emergencias</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display text-yellow-400 mb-2">
                <Counter end={50} duration={2000} suffix="+" />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Voluntarios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display text-teal-400 mb-2">
                <Counter end={24} duration={2000} />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
              NUESTROS SERVICIOS
            </h2>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-accent text-lg text-white tracking-wide">Incendios Forestales</h3>
              <p className="text-gray-500 text-sm mt-1">Especialistas en áreas verdes</p>
            </div>
            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-accent text-lg text-white tracking-wide">Incendios Estructurales</h3>
              <p className="text-gray-500 text-sm mt-1">Edificaciones residenciales</p>
            </div>
            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-accent text-lg text-white tracking-wide">Rescate Vehicular</h3>
              <p className="text-gray-500 text-sm mt-1">Extricación y atención</p>
            </div>
            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-accent text-lg text-white tracking-wide">Atención Prehospitalaria</h3>
              <p className="text-gray-500 text-sm mt-1">Soporte vital básico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide">
            ¿NECESITAS AYUDA?
          </h2>
          <p className="text-gray-400 mt-3">Llámanos para emergencias las 24 horas</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="tel:132" className="flex items-center gap-3 px-8 py-4 gradient-fire text-white font-bold rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              132
            </a>
            <a href="tel:+56322610397" className="flex items-center gap-3 px-6 py-4 bg-stone-800 text-white rounded-lg border border-red-600/30">
              (56-32) 261 03 97
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
