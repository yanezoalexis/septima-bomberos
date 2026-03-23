import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function SeguridadPage() {
  const tips = [
    {
      title: "Prevención de Incendios",
      icon: "🔥",
      items: [
        "No dejes velas encendidas sin supervisión",
        "Revisa regularmente las instalaciones eléctricas",
        "No sobrecargues enchufes múltiples",
        "Mantén extintores en áreas estratégicas de tu hogar"
      ]
    },
    {
      title: "En Caso de Incendio",
      icon: "🚨",
      items: [
        "Mantén la calma y evacúa inmediatamente",
        "Si hay humo, arrástrate por el suelo",
        "Toca las puertas antes de abrirlas",
        "Llama al 132 desde un lugar seguro"
      ]
    },
    {
      title: "Prevención Forestal",
      icon: "🌲",
      items: [
        "No enciendas fuego en zonas boscosas",
        "No tires colillas de cigarrillo en la calle",
        "Reporta humo sospechoso inmediatamente",
        "Mantén despejado el entorno de tu casa"
      ]
    }
  ];

  return (
    <>
      <PageHeader title="SEGURIDAD" />
      
      <div className="py-20 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-4xl mx-auto space-y-8">
          {tips.map((tip, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-fire flex items-center justify-center">
                  <span className="text-2xl">{tip.icon}</span>
                </div>
                <h2 className="font-accent text-2xl text-white tracking-wide">{tip.title}</h2>
              </div>
              <ul className="space-y-3">
                {tip.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="glass-card rounded-2xl p-10 text-center bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-600/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-fire flex items-center justify-center">
              <span className="text-3xl">📢</span>
            </div>
            <h3 className="font-display text-2xl text-white mb-4">¿Necesitas capacitación para tu comunidad?</h3>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Ofrecemos Charlas de prevención de incendios para juntas de vecinos, colegios y empresas de forma gratuita.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 gradient-fire text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all">
              Solicitar Capacitación
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
