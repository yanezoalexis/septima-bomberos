import PageHeader from "@/components/PageHeader";

export default function ServiciosPage() {
  const servicios = [
    { icon: "🔥", title: "Incendios Forestales", description: "Especialistas en áreas verdes y periurbanas con equipamiento especializado para combatir incendios de gran escala." },
    { icon: "🏢", title: "Incendios Estructurales", description: "Protección y rescate en edificaciones residenciales, comerciales e industriales." },
    { icon: "🚗", title: "Rescate Vehicular", description: "Extricación de víctimas en accidentes de tránsito con técnicas especializadas." },
    { icon: "🏥", title: "Atención Prehospitalaria", description: "Primeros auxilios y soporte vital básico hasta la llegada de SAMU." },
    { icon: "🌊", title: "Rescate Acuático", description: "Operaciones de rescate en playas, ríos y zonas inundadas." },
    { icon: "⚠️", title: "Materiales Peligrosos", description: "Handle de derrames y fugas de sustancias químicas o peligrosas." },
  ];

  return (
    <>
      <PageHeader title="SERVICIOS" />
      
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-zinc-400 mb-12">Brentados para responder ante diversas emergencias las 24 horas del día</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-red-600/50 transition-all">
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="font-accent text-lg text-white mb-2">{servicio.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
