export default function QueEs() {
  return (
    <section id="que-es" className="relative section overflow-hidden">
      {/* Subtle ambient background for higher contrast */}
      <div className="section-ambient section-ambient--subtle" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center reveal in-view">
          <h2 className="text-3xl sm:text-4xl font-semibold">¿Qué es Siböra?</h2>
          <p className="mt-4 text-ink/70">
            Siböra es una plataforma que transforma tus acciones ambientales en valor real. Integra gamificación, trazabilidad en blockchain y economía circular, con validación por NFC en centrales de entrega.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs">
            <span className="glass px-2.5 py-1 rounded-full">NFC integrado</span>
            <span className="glass px-2.5 py-1 rounded-full">Mini‑juego / Proof‑of‑Work</span>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <Feature icon={<GameIcon />} title="Gamificación">
            Explora tu ciudad, registra limpiezas y sube de nivel.
          </Feature>
          <Feature icon={<ChainIcon />} title="Trazabilidad">
            Evidencias verificables en blockchain para auditorías, sin greenwashing.
          </Feature>
          <Feature icon={<CoinIcon />} title="Recompensas">
            Gana eco‑tokens canjeables por beneficios, productos y experiencias.
          </Feature>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
  return (
    <div className="card card-hover p-6 text-center">
      <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-ocean grid place-content-center text-white">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-ink/70 text-sm">{children}</p>
    </div>
  )
}

function GameIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12a8 8 0 1 1 16 0H4Z" fill="currentColor" opacity=".2"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8.5" cy="10" r="1" fill="currentColor"/>
      <circle cx="15.5" cy="10" r="1" fill="currentColor"/>
    </svg>
  )
}

function ChainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 7h-2a4 4 0 0 0 0 8h2" stroke="currentColor" strokeWidth="2"/>
      <path d="M15 7h2a4 4 0 1 1 0 8h-2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="7" rx="6" ry="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 7v10c0 1.66 2.69 3 6 3s6-1.34 6-3V7" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 9v8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

