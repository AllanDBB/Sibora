export default function Apps() {
  return (
    <section id="apps" className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold">App móvil — Usuarios</h3>
            <p className="mt-2 text-ink/70">Mapa gamificado, captura fotos, gana tokens, wallet.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>• Mapa con puntos de limpieza</li>
              <li>• Evidencia con fotos y geolocalización</li>
              <li>• Wallet integrada y canje</li>
            </ul>
          </div>
          <div className="card card-hover p-6">
            <h3 className="text-xl font-semibold">Web/Dashboard — Empresas</h3>
            <p className="mt-2 text-ink/70">Reportes ESG, compra de eco-tokens y métricas de impacto.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>• Reportes trazables para auditorías</li>
              <li>• Compra/retención de eco-tokens</li>
              <li>• APIs y panel multi-sede</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

