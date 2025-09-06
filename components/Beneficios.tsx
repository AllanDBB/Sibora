export default function Beneficios() {
  return (
    <section id="beneficios" className="relative section overflow-hidden">
      <div className="section-ambient section-ambient--benefits" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center reveal in-view">
          <h2 className="text-3xl sm:text-4xl font-semibold">Beneficios</h2>
          <p className="mt-3 text-ink/70">Valor real para ciudadanos, empresas y territorios, con trazabilidad y cumplimiento normativo.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Para ciudadanos" icon={<UserIcon />}>
            <ul className="space-y-2 text-sm text-ink/80">
              <FeatureItem>Gana eco‑tokens por acciones verificadas</FeatureItem>
              <FeatureItem>Canje por productos, descuentos y experiencias</FeatureItem>
              <FeatureItem>Progreso, niveles y desafíos locales</FeatureItem>
            </ul>
          </Card>

          <Card title="Para empresas" icon={<BuildingIcon />}>
            <ul className="space-y-2 text-sm text-ink/80">
              <FeatureItem>Reportes ESG trazables para auditorías</FeatureItem>
              <FeatureItem>Compra/retención de eco‑tokens y patrocinios</FeatureItem>
              <FeatureItem>APIs para integrar programas de sostenibilidad</FeatureItem>
            </ul>
          </Card>

          <Card title="Para municipios y ONG" icon={<CityIcon />}>
            <ul className="space-y-2 text-sm text-ink/80">
              <FeatureItem>Activación comunitaria con incentivos</FeatureItem>
              <FeatureItem>Mapa vivo de puntos críticos y limpiezas</FeatureItem>
              <FeatureItem>Métricas de impacto por barrio/distrito</FeatureItem>
            </ul>
          </Card>

          <div className="lg:col-span-3 card p-6 border-accent/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(254,158,0,0.15)] text-accent grid place-content-center">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cumplimiento y trazabilidad</h3>
                <p className="mt-1 text-ink/70 text-sm">
                  Soportamos programas alineados con la Ley 8839 (Gestión Integral de Residuos) y normativa complementaria, facilitando planes de manejo, trazabilidad de materiales y evidencia para auditorías.
                </p>
                <ul className="mt-2 text-sm text-ink/80 grid sm:grid-cols-2 gap-y-2">
                  <FeatureItem>Bitácoras y evidencias con geolocalización</FeatureItem>
                  <FeatureItem>Certificados/constancias descargables</FeatureItem>
                  <FeatureItem>Roles y permisos por organización</FeatureItem>
                  <FeatureItem>Exportables para fiscalización y reportes</FeatureItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="card card-hover p-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent2/90 text-white grid place-content-center">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="mt-3">
        {children}
      </div>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 inline-flex w-4 h-4 rounded-full bg-accent/20 text-accent items-center justify-center">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M5 19a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="11" width="2" height="2" fill="currentColor"/>
      <rect x="12" y="11" width="2" height="2" fill="currentColor"/>
      <rect x="18" y="9" width="2" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function CityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21V10l4-2 4 2v11H3Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M11 21V6l3-1 3 1v15h-6Z" stroke="currentColor" strokeWidth="2"/>
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

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 5 6v6a11 11 0 0 0 7 9 11 11 0 0 0 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="2"/>
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

