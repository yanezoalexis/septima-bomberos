export default function NovedadesPage() {
  const novedades = [
    {
      date: "22 Marzo 2026",
      title: "Emergencia en Sector Reñaca",
      excerpt: "Nuestra compañía acudió a llamado por incendio estructural en el sector de Reñaca...",
      category: "Intervención"
    },
    {
      date: "15 Marzo 2026",
      title: "Academia de Instructores 2026",
      excerpt: "Durante este fin de semana se llevó a cabo la academia de instructores con la participación...",
      category: "Capacitación"
    },
    {
      date: "1 Marzo 2026",
      title: "Aniversario 162° Cuerpo de Bomberos",
      excerpt: "Representación de nuestra compañía en los actos commemorating del aniversario del Cuerpo...",
      category: "Institucional"
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Noticias</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              NOVEDADES
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
            <p className="text-fog-gray mt-6 max-w-2xl mx-auto">
              Mantente informado sobre nuestras actividades, intervenciones y eventos
            </p>
          </div>

          <div className="space-y-6">
            {novedades.map((novedad, index) => (
              <article
                key={index}
                className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-6 hover:border-fire-red/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-fire-red/20 text-fire-red text-xs font-semibold rounded-full">
                      {novedad.category}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-ash-gray text-sm">{novedad.date}</p>
                    <h2 className="font-accent text-xl text-white mt-1 tracking-wide">
                      {novedad.title}
                    </h2>
                    <p className="text-fog-gray mt-2 text-sm leading-relaxed">
                      {novedad.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-fire-orange">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-ash-gray">
              Más novedades próximamente. Síguenos en redes sociales para actualizaciones en tiempo real.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
