export default function Apps() {
  return (
    <section id="apps" className="relative section overflow-hidden">
      <div className="section-ambient section-ambient--subtle" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center reveal in-view">
          <h2 className="text-3xl sm:text-4xl font-semibold">Aplicativos</h2>
          <p className="mt-3 text-ink/70">Dos experiencias que trabajan en conjunto: una para usuarios en terreno y otra para equipos que gestionan el impacto.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="card card-hover p-6">
            <div className="flex items-center gap-3">
              <div className="mx-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-ocean grid place-content-center text-white">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-semibold">App móvil — Usuarios</h3>
            </div>
            <p className="mt-3 text-ink/70">Mapa gamificado, captura fotos, gana tokens y gestiona tu wallet.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <FeatureItem>Mapa con puntos de limpieza</FeatureItem>
              <FeatureItem>Evidencia con fotos y geolocalización</FeatureItem>
              <FeatureItem>Wallet integrada y canje</FeatureItem>
              <FeatureItem>Validación por NFC en centrales</FeatureItem>
              <FeatureItem>Mini‑juego / Proof‑of‑Work al entregar</FeatureItem>
              <FeatureItem>Amigos y búsqueda de “search party”</FeatureItem>
            </ul>
            <div className="mt-4 text-xs text-ink/60">
              Módulos: Home/Mapa, Misiones, Recompensas, Álbum, Perfil.
            </div>
          </div>
          <div className="card card-hover p-6">
            <div className="flex items-center gap-3">
              <div className="mx-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-400 to-ocean grid place-content-center text-white">
                <DashboardIcon />
              </div>
              <h3 className="text-xl font-semibold">Web/Dashboard — Empresas</h3>
            </div>
            <p className="mt-3 text-ink/70">Reportes ESG, compra de eco‑tokens y métricas de impacto.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <FeatureItem>Reportes trazables para auditorías</FeatureItem>
              <FeatureItem>Compra/retención de eco‑tokens</FeatureItem>
              <FeatureItem>APIs y panel multi‑sede</FeatureItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 inline-flex w-4 h-4 rounded-full bg-primary-200 text-primary-700 items-center justify-center">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="3" width="10" height="18" rx="2.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="17.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="3" y="12" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="15" y="12" width="6" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
