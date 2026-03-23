export default function NovedadesPage() {
  const novedades = [
    { date: "22 Marzo 2026", title: "Emergencia en Sector Reñaca", category: "Intervención" },
    { date: "15 Marzo 2026", title: "Academia de Instructores 2026", category: "Capacitación" },
    { date: "1 Marzo 2026", title: "Aniversario 162° Cuerpo de Bomberos", category: "Institucional" },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wide">NOVEDADES</h1>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {novedades.map((novedad, index) => (
              <div key={index} className="bg-stone-800/50 border border-red-600/10 rounded-xl p-5 hover:border-red-600/30 transition-all">
                <span className="inline-block px-2 py-1 bg-red-600/20 text-red-500 text-xs font-medium rounded-full">{novedad.category}</span>
                <p className="text-gray-600 text-xs mt-2">{novedad.date}</p>
                <h3 className="font-accent text-lg text-white mt-1">{novedad.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
