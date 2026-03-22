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

    const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number; color: string; originalWidth: number; originalHeight: number }[] = [];
    const colors = ["#E63946", "#F4A261", "#FFD166", "#FF6B35"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * c.width,
        y: c.height + Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedY: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        originalWidth: c.width,
        originalHeight: c.height,
      });
    }

    let animationId: number;

    function animate() {
      context.fillStyle = "rgba(0, 0, 0, 0.1)";
      context.fillRect(0, 0, c.width, c.height);

      particles.forEach((p, index) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.002;

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
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

const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Incendios Forestales",
    description: "Especialistas en combate de incendios en áreas verdes y periurbanas"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Incendios Estructurales",
    description: "Protección y rescate en edificaciones residenciales e industriales"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rescate Vehicular",
    description: "Extricación y atención prehospitalaria en accidentes de tránsito"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Atención Prehospitalaria",
    description: "Primeros auxilios y soporte vital básico en emergencias"
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/95 to-carbon-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fire-red/20 via-transparent to-transparent" />
        
        <FireParticles />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fire-red/20 border border-fire-red/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-fire-red rounded-full animate-pulse" />
              <span className="text-sm text-fog-gray font-medium">Sirviendo a Viña del Mar desde 1971</span>
            </div>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 animate-fire-glow tracking-wider">
            7ª COMPAÑÍA
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-fire-red" />
            <span className="font-accent text-2xl sm:text-3xl text-fire-orange tracking-widest">
              BOMBEROS VIÑA DEL MAR
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-fire-red" />
          </div>

          <p className="text-xl sm:text-2xl text-fog-gray mb-4 font-light max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-fire-red font-semibold">Abnegación</span> •{" "}
            <span className="text-fire-orange font-semibold">Servicio</span> •{" "}
            <span className="text-fire-yellow font-semibold">Disciplina</span>
          </p>

          <p className="text-base sm:text-lg text-ash-gray max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            Bomba Viña del Mar Alto - Protectores de la comunidad con compromiso y profesionalismo
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a
              href="/historia"
              className="px-8 py-4 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-fire-red/50 transition-all duration-300 hover-lift"
            >
              Conoce Nuestra Historia
            </a>
            <a
              href="tel:132"
              className="px-8 py-4 bg-transparent border-2 border-fire-red text-fire-red font-semibold rounded-lg hover:bg-fire-red hover:text-white transition-all duration-300"
            >
              Emergencias: 132
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-carbon-black to-transparent" />
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-fog-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-carbon-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-display text-fire-red mb-2">
                <Counter end={53} duration={2000} />
              </div>
              <p className="text-fog-gray text-sm uppercase tracking-wider">Años de Servicio</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-display text-fire-orange mb-2">
                <Counter end={500} duration={2000} suffix="+" />
              </div>
              <p className="text-fog-gray text-sm uppercase tracking-wider">Emergencias Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-display text-fire-yellow mb-2">
                <Counter end={50} duration={2000} suffix="+" />
              </div>
              <p className="text-fog-gray text-sm uppercase tracking-wider">Voluntarios Activos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-display text-rescue-blue mb-2">
                <Counter end={24} duration={2000} />
              </div>
              <p className="text-fog-gray text-sm uppercase tracking-wider">Disponibilidad 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Lo Que Hacemos</span>
            <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 tracking-wide">
              NUESTROS SERVICIOS
            </h2>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="group bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-6 hover:border-fire-red/50 transition-all duration-300 hover-lift"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-fire-red/20 to-fire-orange/20 flex items-center justify-center text-fire-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {servicio.icon}
                </div>
                <h3 className="font-accent text-xl text-white mb-2 tracking-wide">
                  {servicio.title}
                </h3>
                <p className="text-fog-gray text-sm leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-carbon-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-fire-red/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-fire-orange font-accent text-sm uppercase tracking-widest">Desde 1968</span>
              <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 tracking-wide">
                NUESTRA HISTORIA
              </h2>
              <div className="w-24 h-1 gradient-fire mt-6 rounded-full" />
              <p className="text-fog-gray text-lg mt-8 leading-relaxed">
                Nacimos como brigada voluntaria en 1968, tras los devastadores incendios forestales que amenazaron Viña del Mar Alto. Los vecinos, liderados por Don Carlos Jiménez Díaz, se organizaron para proteger a su comunidad.
              </p>
              <p className="text-fog-gray text-lg mt-4 leading-relaxed">
                El 21 de septiembre de 1971, nos convertimos en la Séptima Compañía del Cuerpo de Bomberos de Viña del Mar, siendo conocidos como <span className="text-fire-orange font-semibold">"Los Naranjiles"</span> por nuestros característicos uniformes naranjas.
              </p>
              <a
                href="/historia"
                className="inline-flex items-center gap-2 mt-8 text-fire-red font-semibold hover:text-fire-orange transition-colors duration-300"
              >
                Leer Historia Completa
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-fire-red/20 via-fire-orange/10 to-transparent p-1">
                <div className="w-full h-full rounded-2xl bg-carbon-gray/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-fire flex items-center justify-center animate-pulse-fire">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.5 2 5 5.5 5 10c0 3 1.5 5.5 4 7v3c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-3c2.5-1.5 4-4 4-7 0-4.5-3.5-8-7-8zm0 2c2.8 0 5 2.2 5 5 0 1.5-.5 3-1.5 4h-7C7.5 12 7 10.5 7 9c0-2.8 2.2-5 5-5z"/>
                      </svg>
                    </div>
                    <p className="font-display text-4xl text-white tracking-wider">DESDE 1971</p>
                    <p className="text-fog-gray mt-2">53 años protegiendo Viña del Mar</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-fire-red/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-fire-orange/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white tracking-wide">
            ¿NECESITAS AYUDA?
          </h2>
          <p className="text-fog-gray text-lg mt-4 max-w-2xl mx-auto">
            Para emergencias inmediatas, llama a nuestro número de emergencias. Estamos disponibles 24/7 para protegerte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a
              href="tel:132"
              className="flex items-center gap-4 px-10 py-5 gradient-fire text-white font-bold text-xl rounded-xl hover:shadow-lg hover:shadow-fire-red/50 transition-all duration-300 hover-lift"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              132
            </a>
            <a
              href="tel:+56322610397"
              className="flex items-center gap-4 px-8 py-5 bg-carbon-gray text-white font-semibold rounded-xl border border-fire-red/30 hover:border-fire-red transition-all duration-300"
            >
              <svg className="w-6 h-6 text-fire-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (56-32) 261 03 97
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
