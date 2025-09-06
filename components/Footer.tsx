export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-ink/70">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Siböra. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ink">Contacto</a>
            <a href="#" className="hover:text-ink">Twitter</a>
            <a href="#" className="hover:text-ink">LinkedIn</a>
          </div>
        </div>
        <p className="mt-3 text-xs">Disclaimer: Los tokens representan evidencia de impacto y no constituyen valores financieros por sí mismos.</p>
      </div>
    </footer>
  )
}

