export default function HistoriaPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl sm:text-6xl text-white tracking-wide">NUESTRA HISTORIA</h1>
            <div className="w-20 h-1 gradient-fire mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-6">
            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-6">
              <h2 className="font-display text-2xl text-orange-400 mb-4">Orígenes (1968)</h2>
              <p className="text-gray-400 leading-relaxed">
                Varios incendios de envergadura afectaron a Viña del Mar desde enero de 1968, especialmente el barrio de Viña del Mar Alto.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                El 9 de febrero de 1968, tras reuniones entre vecinos, se creó la <span className="text-orange-400 font-semibold">Brigada Forestal de Viña del Mar Alto</span>.
              </p>
            </div>

            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-6">
              <h2 className="font-display text-2xl text-orange-400 mb-4">Los Naranjiles</h2>
              <p className="text-gray-400 leading-relaxed">
                Los primeros voluntarios con trajes naranjas y cascos amarillos fueron denominados por los Bomberos de Viña del Mar como <span className="text-orange-400 font-semibold">"Los Naranjiles"</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Tras casi 3 años de intensa actividad, en julio de 1971 distribuyeron un millón cuatrocientos mil litros de agua a vecinos afectados por un terremoto.
              </p>
            </div>

            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-6">
              <h2 className="font-display text-2xl text-orange-400 mb-4">Fundación (21 de Septiembre, 1971)</h2>
              <p className="text-gray-400 leading-relaxed">
                Por acuerdo del Directorio General del Cuerpo de Bomberos de Viña del Mar, la Brigada se convirtió en la <span className="text-red-500 font-semibold">Séptima Compañía</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                <span className="text-white font-semibold">"Séptima Compañía de Bomberos, Bomba Viña del Mar Alto"</span>
              </p>
            </div>

            <div className="bg-stone-800/50 border border-red-600/10 rounded-xl p-6 text-center">
              <p className="text-2xl font-display text-white tracking-wider">
                ABNEGACIÓN • SERVICIO • DISCIPLINA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
