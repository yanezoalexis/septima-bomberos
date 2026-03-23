export default function ServiciosPage() {
  const servicios = [
    { icon: "🔥", title: "Incendios Forestales", description: "Especialistas en áreas verdes y periurbanas con equipamiento especializado." },
    { icon: "🏢", title: "Incendios Estructurales", description: "Protección y rescate en edificaciones residenciales e industriales." },
    { icon: "🚗", title: "Rescate Vehicular", description: "Extricación y atención prehospitalaria en accidentes." },
    { icon: "🏥", title: "Atención Prehospitalaria", description: "Primeros auxilios y soporte vital básico." },
    { icon: "🌊", title: "Rescate Acuático", description: "Operaciones de rescate en playas y zonas inundadas." },
    { icon: "⚠️", title: "Materiales Peligrosos", description: "Handle de derrames y fugas de sustancias peligrosas." },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wide">SERVICIOS</h1>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
                <div className="text-4xl mb-3">{servicio.icon}</div>
                <h3 className="font-accent text-lg text-white tracking-wide">{servicio.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
