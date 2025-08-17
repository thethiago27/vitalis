export function DocumentsCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-20 top-20 h-40 w-40 rounded-full bg-white/10 blur-xl filter" />
        <div className="animate-blob animation-delay-2000 absolute bottom-20 right-20 h-32 w-32 rounded-full bg-white/10 blur-xl filter" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Precisa de documentação técnica?</h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-blue-100">
            Entre em contato conosco para elaborar a documentação ideal para sua empresa. Nossa equipe de especialistas
            está pronta para elaborar toda a documentação necessária para sua empresa estar em conformidade com a
            legislação.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="tel:+5511992541052"
              className="group inline-flex transform items-center justify-center rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="mr-2">📞</span>
              <span>Ligar agora</span>
              <div className="ml-2 h-5 w-5 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-110" />
            </a>

            <a
              href="mailto:comercial.01@vitalisssho.org"
              className="group inline-flex transform items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <span className="mr-2">✉️</span>
              <span>Enviar e-mail</span>
              <div className="ml-2 h-5 w-5 rounded-full bg-white transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

          {/* Informações adicionais */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-100">Suporte disponível</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">100%</div>
              <div className="text-blue-100">Conformidade legal</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">Especialistas</div>
              <div className="text-blue-100">Habilitados e experientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
