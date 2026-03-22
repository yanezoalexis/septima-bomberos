export default function GaleriaPage() {
  const placeholders = [
    { title: "Cuartel Central", category: "Instalaciones" },
    { title: "Camión Bomba", category: "Vehículos" },
    { title: "Entrenamiento 2025", category: "Actividades" },
    { title: "Emergencia Viña Alto", category: "Intervenciones" },
    { title: "Academia de Instructores", category: "Capacitación" },
    { title: "Aniversario 50 Años", category: "Eventos" },
    { title: "Equipamiento Especial", category: "Materiales" },
    { title: "Brigada Forestal", category: "Servicios" },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Imágenes</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              GALERÍA
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
            <p className="text-fog-gray mt-6 max-w-2xl mx-auto">
              Momentos captured de nuestro trabajo, equipo y comunidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholders.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-carbon-gray/50 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fire-red/20 to-fire-orange/20 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 mb-4 rounded-full bg-fire-red/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-accent text-white text-sm tracking-wide">{item.title}</h3>
                  <p className="text-fog-gray text-xs mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-ash-gray mt-12 text-sm">
            Galería en desarrollo. ¡Próximamente más imágenes de nuestras intervenciones y actividades!
          </p>
        </div>
      </section>
    </div>
  );
}
