export default function ComoFunciona() {
  const steps = [
    {
      title: 'Paso 1',
      text: 'Limpias / reportas → la app valida.',
    },
    {
      title: 'Paso 2',
      text: 'Se genera token en MorphoChain.',
    },
    {
      title: 'Paso 3',
      text: 'Empresa compra token → usuario gana dinero.',
    },
  ]
  return (
    <section id="como-funciona" className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold">¿Cómo funciona?</h2>
          <p className="mt-3 text-ink/70">Un flujo simple con trazabilidad de punta a punta.</p>
        </div>
        <div className="relative grid sm:grid-cols-3 gap-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="card card-hover p-6 relative">
              <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">{s.title}</span>
              <div className="mt-2 text-ink/80">{s.text}</div>
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2 translate-y-[-50%] w-4 h-4 rotate-45 bg-primary-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

