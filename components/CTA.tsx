export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="card p-8 bg-gradient-to-b from-white to-primary-50/40">
          <h2 className="text-3xl sm:text-4xl font-semibold">Únete al movimiento regenerativo</h2>
          <p className="mt-3 text-ink/70">Convierte tus acciones ambientales en valor real.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="btn btn-primary px-6 py-3 text-base" href="#">Descargar App</a>
            <a className="btn btn-ghost px-6 py-3 text-base" href="#">Probar Dashboard</a>
          </div>
        </div>
      </div>
    </section>
  )
}

