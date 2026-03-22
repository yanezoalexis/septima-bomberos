export default function ComitivaPage() {
  const oficiales = [
    { cargo: "Capitán", nombre: "Ignacio Morales Barckhahn" },
    { cargo: "Director", nombre: "Fernando Recio Palma" },
    { cargo: "Secretario", nombre: "Mario Camblor Concha" },
    { cargo: "Tesorero", nombre: "Rodrigo Olivares Arenas" },
    { cargo: "Ayudante", nombre: "Felipe Rubio Pérez" },
    { cargo: "Teniente 1º", nombre: "Alexis Yañez Osses" },
    { cargo: "Teniente 2º", nombre: "Nicolás Marchant Riveros" },
    { cargo: "Teniente 3º", nombre: "Matías Paillamán Flores" },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Nuestro Equipo</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              COMITIVA 2026
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
            <p className="text-fog-gray mt-6 max-w-2xl mx-auto">
              Bomberas y bomberos voluntarios que lideran nuestra compañía con dedicación y compromiso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oficiales.map((oficial, index) => (
              <div
                key={index}
                className="group bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-6 hover:border-fire-red/50 transition-all duration-300 hover-lift"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="font-accent text-lg text-white text-center tracking-wide">
                  {oficial.nombre}
                </h3>
                <p className="text-fire-red text-sm text-center font-semibold mt-2">
                  {oficial.cargo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
