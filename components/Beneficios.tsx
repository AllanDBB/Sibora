export default function Beneficios() {
  const items = [
    { title: 'Para ciudadanos', text: 'Limpia y gana tokens canjeables.' },
    { title: 'Para empresas', text: 'Cumple regulación con transparencia.' },
    { title: 'Para comercios', text: 'Atrae clientes con descuentos verdes.' },
  ]
  return (
    <section id="beneficios" className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Beneficios</h2>
          <p className="mt-3 text-ink/70">Valor para todos los actores de la economía circular.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.title} className="card card-hover p-6">
              <h3 className="font-semibold text-lg">{i.title}</h3>
              <p className="mt-2 text-ink/70">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

