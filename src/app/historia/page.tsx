import PageHeader from "@/components/PageHeader";

export default function HistoriaPage() {
  return (
    <>
      <PageHeader title="NUESTRA HISTORIA" />
      
      <div className="py-20 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="glass-card rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-fire flex items-center justify-center">
                <span className="text-2xl">🌲</span>
              </div>
              <h2 className="font-display text-3xl text-orange-400">Orígenes (1968)</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Varios incendios de envergadura afectaron a Viña del Mar desde enero de 1968, especialmente el barrio de Viña del Mar Alto. Las llamas amenazaban las Viviendas y la comunidad se veía desprotegida.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              El 9 de febrero de 1968, tras reuniones entre vecinos y con una juventud de alto espíritu cívico, se decidió crear la <span className="text-orange-400 font-semibold">Brigada Forestal de Viña del Mar Alto</span> para la extinción de incendios.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                <span className="text-2xl">👨‍🚒</span>
              </div>
              <h2 className="font-display text-3xl text-orange-400">Los Naranjiles</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Los primeros voluntarios, con sus trajes naranjas y cascos amarillos, fueron denominados por los Bomberos de Viña del Mar como <span className="text-orange-400 font-semibold">"Los Naranjiles"</span>. Un apodo que llevaría con orgullo.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              Tras casi 3 años de intensa actividad, instrucción y academias combinadas con las Compañías del Cuerpo de Bomberos de Viña del Mar, en julio de 1971 lograron distribuir un millón cuatrocientos mil litros de agua a vecinos afectados por un terremoto.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <span className="text-2xl">🎖️</span>
              </div>
              <h2 className="font-display text-3xl text-orange-400">Fundación (21 de Septiembre, 1971)</h2>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Por acuerdo del Directorio General del Cuerpo de Bomberos de Viña del Mar, la Brigada de Viña del Mar Alto pasó a ser Compañía regular de la institución, bajo el número ordinal <span className="text-red-500 font-semibold">"siete"</span>.
            </p>
            <p className="text-zinc-400 leading-relaxed mt-4">
              El 21 de septiembre de 1971 se realizó la Sesión Solemne que fundó definitivamente a la Compañía con el nombre: <span className="text-white font-semibold">"Séptima Compañía de Bomberos, Bomba Viña del Mar Alto"</span>.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-10 text-center bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-600/20">
            <p className="text-3xl font-display text-white tracking-wider mb-4">
              ABNEGACIÓN • SERVICIO • DISCIPLINA
            </p>
            <p className="text-zinc-500">Nuestros pilares que nos guían desde 1971</p>
          </div>
        </div>
      </div>
    </>
  );
}
