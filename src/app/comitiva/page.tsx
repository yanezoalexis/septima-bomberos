import PageHeader from "@/components/PageHeader";

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
    <>
      <PageHeader title="COMITIVA 2026" />
      
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-zinc-400 mb-12">Bomberas y bomberos voluntarios que lideran nuestra compañía</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {oficiales.map((oficial, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5 text-center hover:border-red-600/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full gradient-fire flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="font-accent text-white text-sm">{oficial.nombre}</h3>
                <p className="text-red-500 text-xs font-semibold mt-1">{oficial.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
