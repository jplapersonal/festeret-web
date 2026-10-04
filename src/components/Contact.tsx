export function Contact() {
  const fieldClass = "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 outline-none focus:border-grana focus:ring-2 focus:ring-grana/15 transition-all";
  
  return (
    <section id="contacto" className="relative bg-paper-2 text-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <p className="eyebrow text-grana">Contacto</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium">
            ¿Tenéis un proyecto diferente? <br />
            <em className="text-oro">Hablemos.</em>
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-md">
            Si representas a una Junta Central, Ayuntamiento o quieres integrar el Festeret a gran escala, escríbenos. Te contestaremos antes de que acabe la diana.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-ink/80">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 ring-1 ring-ink/10">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <a href="mailto:hola@festeret.ai" className="text-lg font-medium hover:text-grana transition-colors">hola@festeret.ai</a>
            </div>
          </div>
        </div>

        <div className="reveal">
          <form 
            className="rounded-[2rem] bg-ink/5 ring-1 ring-ink/10 p-8 sm:p-10"
            onSubmit={(e) => { e.preventDefault(); alert("Formulario de ejemplo. Para activar el envío, conéctalo a un servicio como Formspree."); }}
          >
            <h3 className="font-display text-2xl font-medium mb-8">Envíanos un mensaje</h3>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input id="name" required type="text" placeholder="Tu nombre" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" required type="email" placeholder="Correo electrónico" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea id="message" required rows={4} placeholder="¿En qué podemos ayudaros?" className={`${fieldClass} resize-none`} />
              </div>
              <button type="submit" className="w-full rounded-full bg-ink text-paper hover:bg-ink/80 py-4 font-semibold transition-colors cursor-pointer mt-4">
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
