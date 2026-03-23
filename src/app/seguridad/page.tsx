export default function SeguridadPage() {
  const tips = [
    {
      title: "Prevención de Incendios",
      items: ["No dejes velas encendidas sin supervisión", "Revisa regularmente las instalaciones eléctricas", "No sobrecargues enchufes"]
    },
    {
      title: "En Caso de Incendio",
      items: ["Mantén la calma y evacúa inmediatamente", "Si hay humo, arrástrate por el suelo", "Llama al 132 desde un lugar seguro"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wide">SEGURIDAD</h1>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-stone-800/50 border border-red-600/10 rounded-xl p-6">
                <h2 className="font-accent text-xl text-orange-400 mb-4">{tip.title}</h2>
                <ul className="space-y-2">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-600/10 border border-red-600/30 rounded-xl p-6 text-center">
            <h3 className="font-accent text-lg text-white mb-3">¿Necesitas capacitación?</h3>
            <a href="/contacto" className="inline-block px-6 py-3 gradient-fire text-white font-medium rounded-lg">Contáctanos</a>
          </div>
        </div>
      </section>
    </div>
  );
}
