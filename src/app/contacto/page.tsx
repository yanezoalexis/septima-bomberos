import PageHeader from "@/components/PageHeader";

export default function ContactoPage() {
  return (
    <>
      <PageHeader title="CONTACTO" />
      
      <div className="py-20 px-4 bg-zinc-900/50 section-pattern">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="font-display text-3xl text-white">Información de Contacto</h2>
              
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Dirección</h3>
                    <p className="text-zinc-400">Logroño 1298, Viña del Mar, Chile</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <p className="text-zinc-400">(56-32) 261 03 97</p>
                    <p className="text-red-500 font-bold mt-1">Emergencias: 132</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-zinc-400">contacto@septimabomberos.cl</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-fire flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horario</h3>
                    <p className="text-zinc-400">Atención 24/7 para emergencias</p>
                    <p className="text-zinc-500 text-sm">Oficina: Lunes a Viernes 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.facebook.com/p/S%C3%A9ptima-Compa%C3%B1%C3%ADa-Bomberos-Vi%C3%B1a-del-Mar-100069157203051/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/septima.cbvm" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-3xl text-white mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Nombre</label>
                  <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email</label>
                  <input type="email" placeholder="tu@email.com" className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Mensaje</label>
                  <textarea rows={5} placeholder="Escribe tu mensaje aquí..." className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-4 gradient-fire text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-600/30 transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
