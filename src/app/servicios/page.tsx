export default function ServiciosPage() {
  const servicios = [
    {
      icon: "🔥",
      title: "Incendios Forestales",
      description: "Especialistas en el combate de incendios en áreas verdes, bosques y zonas periurbanas. Contamos con equipamiento especializado y personal capacitado para emergencias de gran escala.",
      features: ["Equipamiento especializado", "Protocolos de evacuación", "Coordinación con CONAF"]
    },
    {
      icon: "🏢",
      title: "Incendios Estructurales",
      description: "Protección y rescate en edificaciones residenciales, comerciales e industriales. Intervención rápida para minimizar daños y salvar vidas.",
      features: ["Rescate de personas", "Control de propagación", "Evaluación estructural"]
    },
    {
      icon: "🚗",
      title: "Rescate Vehicular",
      description: "Extricación de víctimas en accidentes de tránsito con técnicas especializadas y equipamiento de corte.",
      features: ["Corte y extricación", "Estabilización vehicular", "Atención prehospitalaria"]
    },
    {
      icon: "🏥",
      title: "Atención Prehospitalaria",
      description: "Primeros auxilios y soporte vital básico en escenas de emergencia hasta la llegada de SAMU.",
      features: ["RCP básico", "Control de hemorragias", "Inmovilización"]
    },
    {
      icon: "🌊",
      title: "Rescate Acuático",
      description: "Operaciones de rescate en playas, ríos y zonas inundadas del sector de Viña del Mar Alto.",
      features: ["Rescate en aguas", "Busqueda y recuperación", "Prevención de ahogamientos"]
    },
    {
      icon: "⚠️",
      title: "Materiales Peligrosos",
      description: "Handle de derrames y fugas de sustancias químicas o peligrosas.",
      features: ["Detección de agentes", "Contención", "Descontaminación"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Capacidades</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              SERVICIOS
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
            <p className="text-fog-gray mt-6 max-w-2xl mx-auto">
              Brentados para responder ante diversas emergencias las 24 horas del día, los 365 días del año
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8 hover:border-fire-red/50 transition-all duration-300 hover-lift"
              >
                <div className="text-5xl mb-4">{servicio.icon}</div>
                <h3 className="font-accent text-2xl text-white mb-4 tracking-wide">
                  {servicio.title}
                </h3>
                <p className="text-fog-gray leading-relaxed mb-6">
                  {servicio.description}
                </p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-ash-gray">
                      <svg className="w-4 h-4 text-fire-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
