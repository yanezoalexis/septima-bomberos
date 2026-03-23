import PageHeader from "@/components/PageHeader";

export default function NovedadesPage() {
  const novedades = [
    { date: "22 Marzo 2026", title: "Emergencia en Sector Reñaca", category: "Intervención" },
    { date: "15 Marzo 2026", title: "Academia de Instructores 2026", category: "Capacitación" },
    { date: "1 Marzo 2026", title: "Aniversario 162° Cuerpo de Bomberos", category: "Institucional" },
  ];

  return (
    <>
      <PageHeader title="NOVEDADES" />
      
      <div className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto space-y-4">
          {novedades.map((novedad, index) => (
            <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5 hover:border-red-600/50 transition-all">
              <span className="inline-block px-2 py-1 bg-red-600/20 text-red-500 text-xs font-medium rounded-full">{novedad.category}</span>
              <p className="text-zinc-600 text-xs mt-2">{novedad.date}</p>
              <h3 className="font-accent text-lg text-white mt-1">{novedad.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
