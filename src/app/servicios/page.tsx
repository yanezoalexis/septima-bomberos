import PageHeader from "@/components/PageHeader";

export default function ServiciosPage() {
  const servicios = [
    { icon: "🔥", title: "Incendios Forestales", description: "Especialistas en áreas verdes y periurbanas con equipamiento especializado para combatir incendios de gran escala. Contamos con vehículos y herramientas especializadas.", color: "from-red-600/20" },
    { icon: "🏢", title: "Incendios Estructurales", description: "Protección y rescate en edificaciones residenciales, comerciales e industriales. Intervención rápida para minimizar daños y salvar vidas.", color: "from-orange-600/20" },
    { icon: "🚗", title: "Rescate Vehicular", description: "Extricación de víctimas en accidentes de tránsito con técnicas especializadas y equipamiento de corte profesional.", color: "from-yellow-600/20" },
    { icon: "🏥", title: "Atención Prehospitalaria", description: "Primeros auxilios y soporte vital básico en escenas de emergencia hasta la llegada de SAMU.", color: "from-teal-600/20" },
    { icon: "🌊", title: "Rescate Acuático", description: "Operaciones de rescate en playas, ríos y zonas inundadas del sector de Viña del Mar Alto.", color: "from-blue-600/20" },
    { icon: "⚠️", title: "Materiales Peligrosos", description: "Handle de derrames y fugas de sustancias químicas o peligrosas con protocolos de seguridad.", color: "from-purple-600/20" },
  ];

  return (
    <>
      <PageHeader title="SERVICIOS" />
      
      <div className="py-20 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
            Brentados para responder ante diversas emergencias las 24 horas del día, los 365 días del año
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => (
              <div key={index} className={`glass-card rounded-2xl p-8 card-hover bg-gradient-to-br ${servicio.color} to-zinc-800/50`}>
                <div className="text-5xl mb-6">{servicio.icon}</div>
                <h3 className="font-accent text-xl text-white mb-3 tracking-wide">{servicio.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
