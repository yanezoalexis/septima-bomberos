export default function HistoriaPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-carbon-black to-carbon-gray/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fire-red font-accent text-sm uppercase tracking-widest">Nuestra Identidad</span>
            <h1 className="font-display text-5xl sm:text-7xl text-white mt-4 tracking-wide">
              NUESTRA HISTORIA
            </h1>
            <div className="w-24 h-1 gradient-fire mx-auto mt-6 rounded-full" />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8 mb-8">
              <h2 className="font-display text-3xl text-fire-orange mb-4">Orígenes (1968)</h2>
              <p className="text-fog-gray leading-relaxed">
                Varios y complejos incendios de envergadura afectaron a Viña del Mar desde enero de 1968, entre ellos el barrio residencial de Viña del Mar Alto, amenazado por incendios forestales en los alrededores de la empresa Rhona.
              </p>
              <p className="text-fog-gray leading-relaxed mt-4">
                El 9 de febrero de 1968, tras reuniones preliminares entre vecinos y con una juventud de alto espíritu cívico, se decidió crear la <span className="text-fire-orange font-semibold">Brigada Forestal de Viña del Mar Alto</span>.
              </p>
            </div>

            <div className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8 mb-8">
              <h2 className="font-display text-3xl text-fire-orange mb-4">Los Naranjiles</h2>
              <p className="text-fog-gray leading-relaxed">
                Los primeros voluntarios, con sus trajes naranjas y cascos amarillos, fueron denominados por los Bomberos de Viña del Mar como <span className="text-fire-orange font-semibold">"Los Naranjiles"</span>.
              </p>
              <p className="text-fog-gray leading-relaxed mt-4">
                Tras casi 3 años de intensa actividad, instrucción y academias combinadas con las Compañías del Cuerpo de Bomberos de Viña del Mar, en julio de 1971 lograron distribuir un millón cuatrocientos mil litros de agua a vecinos de la parte alta que se mantenían sin suministro tras un terremoto.
              </p>
            </div>

            <div className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8 mb-8">
              <h2 className="font-display text-3xl text-fire-orange mb-4">Fundación (21 de Septiembre, 1971)</h2>
              <p className="text-fog-gray leading-relaxed">
                Por acuerdo del Directorio General del Cuerpo de Bomberos de Viña del Mar, la Brigada de Viña del Mar Alto pasó a ser Compañía regular de la institución, bajo el número ordinal <span className="text-fire-red font-semibold">"siete"</span>.
              </p>
              <p className="text-fog-gray leading-relaxed mt-4">
                El 21 de septiembre de 1971 se realizó la Sesión Solemne que fundó definitivamente a la Compañía de Viña del Mar Alto con el nombre: <span className="text-white font-semibold">"Séptima Compañía de Bomberos, Bomba Viña del Mar Alto"</span>.
              </p>
            </div>

            <div className="bg-carbon-gray/30 backdrop-blur-sm border border-fire-red/10 rounded-xl p-8">
              <h2 className="font-display text-3xl text-fire-orange mb-4">Lema y Valores</h2>
              <p className="text-2xl font-display text-white text-center tracking-wider">
                ABNEGACIÓN • SERVICIO • DISCIPLINA
              </p>
              <p className="text-fog-gray leading-relaxed mt-4 text-center">
                Estos tres pilares han guiado a nuestra compañía durante más de 50 años de servicio ininterrumpido a la comunidad de Viña del Mar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
