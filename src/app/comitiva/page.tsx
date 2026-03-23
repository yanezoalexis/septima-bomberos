import PageHeader from "@/components/PageHeader";

export default function ComitivaPage() {
  const oficiales = [
    { cargo: "Capitán", nombre: "Ignacio Morales Barckhahn", icon: "👨‍✈️" },
    { cargo: "Director", nombre: "Fernando Recio Palma", icon: "🎖️" },
    { cargo: "Secretario", nombre: "Mario Camblor Concha", icon: "📝" },
    { cargo: "Tesorero", nombre: "Rodrigo Olivares Arenas", icon: "💰" },
    { cargo: "Ayudante", nombre: "Felipe Rubio Pérez", icon: "🛡️" },
    { cargo: "Teniente 1º", nombre: "Alexis Yañez Osses", icon: "⭐" },
    { cargo: "Teniente 2º", nombre: "Nicolás Marchant Riveros", icon: "⭐" },
    { cargo: "Teniente 3º", nombre: "Matías Paillamán Flores", icon: "⭐" },
  ];

  return (
    <>
      <PageHeader title="COMITIVA 2026" />
      
      <div className="py-20 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto">
            Bomberas y bomberos voluntarios que lideran nuestra compañía con dedicación y compromiso hacia la comunidad de Viña del Mar
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oficiales.map((oficial, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center card-hover group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl gradient-fire flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{oficial.icon}</span>
                </div>
                <h3 className="font-accent text-lg text-white mb-1 tracking-wide group-hover:text-orange-400 transition-colors">{oficial.nombre}</h3>
                <p className="text-red-500 text-sm font-bold">{oficial.cargo}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-white mb-4">¿Quieres ser voluntario?</h3>
            <p className="text-zinc-400 mb-6">Únete a nuestra compañía y forma parte de este equipo de servicio a la comunidad.</p>
            <a href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 gradient-fire text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/30 transition-all">
              Contáctanos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
