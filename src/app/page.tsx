"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const c = canvas;
    const context = ctx;

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      life: number;
    }

    const particles: Particle[] = [];
    const colors = ["#dc2626", "#ea580c", "#f59e0b", "#fb923c"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * c.width,
        y: c.height + Math.random() * 200,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      });
    }

    let animationId: number;

    function animate() {
      context.fillStyle = "rgba(9, 9, 11, 0.05)";
      context.fillRect(0, 0, c.width, c.height);

      particles.forEach((p, i) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.003;
        p.size *= 0.998;

        if (p.y < -20 || p.opacity <= 0 || p.size < 0.5) {
          particles[i] = {
            x: Math.random() * c.width,
            y: c.height + Math.random() * 50,
            size: Math.random() * 3 + 1,
            speedY: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.3,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1,
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
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />;
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
      <FireParticles />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient px-4">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-zinc-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Sirviendo a Viña del Mar desde 1971
            </span>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl text-white mb-4 animate-fire-glow tracking-wider">
              7ª COMPAÑÍA
            </h1>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="font-accent text-2xl sm:text-3xl text-orange-400 tracking-widest">
              BOMBEROS VIÑA DEL MAR
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl sm:text-2xl text-zinc-300 mb-2 max-w-2xl mx-auto">
              <span className="text-red-500 font-bold">Abnegación</span> •{" "}
              <span className="text-orange-400 font-bold">Servicio</span> •{" "}
              <span className="text-yellow-500 font-bold">Disciplina</span>
            </p>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Bomba Viña del Mar Alto - Protectores de la comunidad
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/historia" className="btn-glow px-10 py-4 gradient-fire text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-lg shadow-red-600/30">
              Conoce Nuestra Historia
            </Link>
            <a href="tel:132" className="group px-10 py-4 border-2 border-red-600 text-red-500 font-bold rounded-xl text-lg hover:bg-red-600 hover:text-white hover:scale-105 transition-all flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Emergencias: 132
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 section-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: 53, suffix: "", label: "Años de Servicio", color: "text-red-500", delay: 0 },
              { num: 500, suffix: "+", label: "Emergencias Atendidas", color: "text-orange-400", delay: 0.1 },
              { num: 50, suffix: "+", label: "Voluntarios Activos", color: "text-yellow-500", delay: 0.2 },
              { num: 24, suffix: "/7", label: "Disponibilidad", color: "text-teal-400", delay: 0.3 },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-slide-up" style={{ animationDelay: `${stat.delay}s` }}>
                <div className={`text-5xl sm:text-6xl font-display ${stat.color} mb-2`}>
                  <Counter end={stat.num} duration={2500} suffix={stat.suffix} />
                </div>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 font-accent text-sm uppercase tracking-widest">Desde 1968</span>
              <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 mb-6">NUESTRA HISTORIA</h2>
              <div className="divider-line w-24 mb-8"></div>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                Nacimos como brigada voluntaria en 1968, tras los devastadores incendios forestales que amenazaron Viña del Mar Alto. Los vecinos, liderados por Don Carlos Jiménez Díaz, se organizaron para proteger a su comunidad.
              </p>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                El 21 de septiembre de 1971, nos convertimos en la Séptima Compañía del Cuerpo de Bomberos de Viña del Mar, siendo conocidos como <span className="text-orange-400 font-semibold">"Los Naranjiles"</span> por nuestros característicos uniformes naranjas.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/historia" className="inline-flex items-center gap-2 text-red-500 font-semibold hover:text-orange-400 transition-colors group">
                  Leer Historia Completa
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/comitiva" className="inline-flex items-center gap-2 text-zinc-400 font-semibold hover:text-white transition-colors group">
                  Ver Comitiva
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-600/20 via-orange-600/10 to-transparent p-1">
                <div className="w-full h-full rounded-3xl bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-radial from-red-600/10 to-transparent"></div>
                  <div className="text-center relative z-10">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full gradient-fire flex items-center justify-center shadow-2xl shadow-red-600/30 animate-float">
                      <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.5 2 5 5.5 5 10c0 3 1.5 5.5 4 7v3c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-3c2.5-1.5 4-4 4-7 0-4.5-3.5-8-7-8zm0 2c2.8 0 5 2.2 5 5 0 1.5-.5 3-1.5 4h-7C7.5 12 7 10.5 7 9c0-2.8 2.2-5 5-5z"/>
                      </svg>
                    </div>
                    <p className="font-display text-5xl text-white tracking-wider">DESDE 1971</p>
                    <p className="text-zinc-500 mt-2">55 años protegiendo Viña del Mar</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-red-600/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-orange-600/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-zinc-950 section-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 font-accent text-sm uppercase tracking-widest">Lo Que Hacemos</span>
            <h2 className="font-display text-5xl sm:text-6xl text-white mt-4">SERVICIOS</h2>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔥", title: "Incendios Forestales", desc: "Especialistas en áreas verdes y periurbanas con equipamiento especializado", color: "from-red-600/20 to-orange-600/20" },
              { icon: "🏢", title: "Incendios Estructurales", desc: "Protección y rescate en edificaciones residenciales e industriales", color: "from-orange-600/20 to-yellow-600/20" },
              { icon: "🚗", title: "Rescate Vehicular", desc: "Extricación y atención prehospitalaria en accidentes de tránsito", color: "from-yellow-600/20 to-amber-600/20" },
              { icon: "🏥", title: "Atención Prehospitalaria", desc: "Primeros auxilios y soporte vital básico hasta la llegada de SAMU", color: "from-teal-600/20 to-cyan-600/20" },
            ].map((service, i) => (
              <div key={i} className={`glass-card rounded-2xl p-8 card-hover bg-gradient-to-br ${service.color}`}>
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="font-accent text-xl text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios" className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-white transition-colors group">
              Ver Todos los Servicios
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-orange-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">¿NECESITAS AYUDA?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Para emergencias inmediatas, llama a nuestro número de emergencias. Estamos disponibles las 24 horas del día, los 365 días del año.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:132" className="btn-glow flex items-center gap-4 px-12 py-6 gradient-fire text-white font-bold rounded-2xl text-2xl hover:scale-105 transition-transform shadow-xl shadow-red-600/30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              132
            </a>
            <a href="tel:+56322610397" className="flex items-center gap-3 px-8 py-6 bg-zinc-800 border border-zinc-700 rounded-2xl text-white hover:border-red-600/50 transition-all hover:scale-105">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">(56-32) 261 03 97</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Atención 24/7
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Respuesta Inmediata
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Profesionales Capacitados
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
