"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

function FireCanvas() {
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
    const colors = ["#dc2626", "#ea580c", "#f59e0b"];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    function animate() {
      context.fillStyle = "rgba(9, 9, 11, 0.1)";
      context.fillRect(0, 0, c.width, c.height);

      particles.forEach((p, i) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.001;

        if (p.y < -20 || p.opacity <= 0) {
          particles[i] = {
            ...p,
            y: c.height,
            x: Math.random() * c.width,
            opacity: Math.random() * 0.4 + 0.2,
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

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none opacity-40" />;
}

function Counter({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <>
      <FireCanvas />
      
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Sirviendo a Viña del Mar desde 1971
          </p>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 animate-fire-glow">
            7ª COMPAÑÍA
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="font-accent text-xl sm:text-2xl text-orange-400 tracking-widest">
              BOMBEROS VIÑA DEL MAR
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>

          <p className="text-lg sm:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto">
            <span className="text-red-500 font-semibold">Abnegación</span> •{" "}
            <span className="text-orange-400 font-semibold">Servicio</span> •{" "}
            <span className="text-yellow-400 font-semibold">Disciplina</span>
          </p>

          <p className="text-sm text-zinc-500 mb-10 max-w-xl mx-auto">
            Bomba Viña del Mar Alto - Protectores de la comunidad
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/historia" className="px-8 py-4 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/30 transition-all">
              Conoce Nuestra Historia
            </Link>
            <a href="tel:132" className="px-8 py-4 border-2 border-red-600 text-red-500 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all">
              Emergencias: 132
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-display text-red-500 mb-2">
              <Counter end={53} duration={2000} />
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Años</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display text-orange-400 mb-2">
              <Counter end={500} duration={2000} suffix="+" />
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Emergencias</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display text-yellow-400 mb-2">
              <Counter end={50} duration={2000} suffix="+" />
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Voluntarios</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display text-teal-400 mb-2">
              <Counter end={24} duration={2000} />
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">Horas</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-white">SERVICIOS</h2>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🔥", title: "Incendios Forestales", desc: "Áreas verdes y periurbanas" },
              { icon: "🏢", title: "Incendios Estructurales", desc: "Edificaciones residenciales" },
              { icon: "🚗", title: "Rescate Vehicular", desc: "Extricación y atención" },
              { icon: "🏥", title: "Atención Prehospitalaria", desc: "Soporte vital básico" },
            ].map((s, i) => (
              <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600/50 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-accent text-lg text-white mb-1">{s.title}</h3>
                <p className="text-zinc-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">¿NECESITAS AYUDA?</h2>
        <p className="text-zinc-400 mb-8">Llámanos para emergencias las 24 horas</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:132" className="flex items-center gap-3 px-10 py-5 gradient-fire text-white font-bold rounded-lg text-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            132
          </a>
          <a href="tel:+56322610397" className="px-8 py-5 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
            (56-32) 261 03 97
          </a>
        </div>
      </section>
    </>
  );
}
