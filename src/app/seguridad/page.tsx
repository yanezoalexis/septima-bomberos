export default function SeguridadPage() {
  const tips = [
    {
      title: "Prevención de Incendios",
      items: [
        "No dejes velas encendidas sin supervisión",
        "Revisa regularmente las instalaciones eléctricas",
        "Mantén extintores en áreas estratégicas",
        "No sobrecargues enchufes múltiples"
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
    },
    {
      title: "Prevención Forestal",
      items: [
        "No enciendas fuego en zonas boscosas",
        "No tires colillas de cigarrillo en la calle",
        "Reporta humo sospechoso inmediatamente",
        "Mantén despejado el entorno de tu casa"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Educación</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              SEGURIDAD
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
            <p className="text-fog-gray mt-6 max-w-2xl mx-auto">
              Tips y recomendaciones para prevenir emergencias y saber cómo actuar
            </p>
          </div>

          <div className="space-y-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8"
              >
                <h2 className="font-accent text-2xl text-fire-orange mb-6 tracking-wide">
                  {tip.title}
                </h2>
                <ul className="space-y-4">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-fire-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-fog-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-fire-red/10 border border-fire-red/30 rounded-xl p-8 text-center">
            <h3 className="font-accent text-xl text-white mb-4 tracking-wide">
              ¿Necesitas capacitación para tu comunidad?
            </h3>
            <p className="text-fog-gray mb-6">
              Ofrecemos Charlas de prevención de incendios para juntas de vecinos, colegios y empresas.
            </p>
            <a
              href="/contacto"
              className="inline-block px-6 py-3 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-fire-red/50 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
