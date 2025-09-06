export default function ComoFunciona() {
  const steps: { title: string; text: string; icon: React.ReactNode }[] = [
    {
      title: 'Explora y limpia',
      text: 'Identifica puntos, participa en limpiezas y organiza brigadas.',
      icon: <MapIcon />,
    },
    {
      title: 'Evidencia y registra',
      text: 'Sube fotos con geolocalización y cantidad estimada.',
      icon: <CameraIcon />,
    },
    {
      title: 'Verificación y tokenización',
      text: 'Acerca el teléfono al sensor NFC de la central. La evidencia se valida y se registra en blockchain.',
      icon: <ChainSmallIcon />,
    },
    {
      title: 'Recompensas y reportes',
      text: 'Gana eco‑tokens y genera reportes ESG trazables.',
      icon: <CoinGiftIcon />,
    },
  ]

  return (
    <section id="como-funciona" className="relative section overflow-hidden">
      <div className="section-ambient section-ambient--subtle" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal in-view">
          <h2 className="text-3xl sm:text-4xl font-semibold">Cómo funciona</h2>
          <p className="mt-3 text-ink/70">Un flujo simple con evidencias verificables y trazabilidad de punta a punta.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="card card-hover p-6 relative">
              <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">Paso {idx + 1}</span>
              <div className="mx-auto w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-ocean grid place-content-center text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-ink/70 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m9 5-4 2v12l4-2 6 2 4-2V3l-4 2-6-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="2" fill="currentColor"/>
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function ChainSmallIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8H7a4 4 0 0 0 0 8h2" stroke="currentColor" strokeWidth="2"/>
      <path d="M15 8h2a4 4 0 1 1 0 8h-2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function CoinGiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6.5" rx="5.5" ry="2.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M6.5 6.5v9c0 1.4 2.46 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-9" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12h8M9.5 9.5h5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

