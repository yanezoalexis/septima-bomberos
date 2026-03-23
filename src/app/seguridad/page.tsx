import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function SeguridadPage() {
  const tips = [
    {
      title: "Prevención de Incendios",
      items: [
        "No dejes velas encendidas sin supervisión",
        "Revisa regularmente las instalaciones eléctricas",
        "No sobrecargues enchufes múltiples",
        "Mantén extintores en áreas estratégicas"
      ]
    },
    {
      title: "En Caso de Incendio",
      items: [
        "Mantén la calma y evacúa inmediatamente",
        "Si hay humo, arrástrate por el suelo",
        "Toca las puertas antes de abrirlas",
        "Llama al 132 desde un lugar seguro"
      ]
    }
  ];

  return (
    <>
      <PageHeader title="SEGURIDAD" />
      
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto space-y-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <h2 className="font-accent text-xl text-orange-400 mb-4">{tip.title}</h2>
              <ul className="space-y-2">
                {tip.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6 text-center">
            <h3 className="font-accent text-lg text-white mb-3">¿Necesitas capacitación para tu comunidad?</h3>
            <p className="text-zinc-400 text-sm mb-4">Ofrecemos Charlas de prevención de incendios para juntas de vecinos, colegios y empresas.</p>
            <Link href="/contacto" className="inline-block px-6 py-3 gradient-fire text-white font-medium rounded-lg">Contáctanos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
