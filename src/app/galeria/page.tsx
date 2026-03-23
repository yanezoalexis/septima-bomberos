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
              Momentos capturados de nuestro trabajo, equipo y comunidad
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/septima.cbvm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Ver más en Instagram
              </a>
              <a
                href="/instagram"
                className="inline-flex items-center gap-2 px-6 py-3 bg-carbon-gray text-white font-semibold rounded-lg hover:bg-carbon-gray/80 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Galería Completa
              </a>
            </div>
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
