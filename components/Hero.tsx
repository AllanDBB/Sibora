import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative section overflow-hidden pt-28 md:pt-40 lg:pt-44">
      {/* Captivating layered background */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 sm:opacity-40" />
      <div className="hero-bg -z-10" />
      <div className="hidden sm:block hero-beam" style={{ top: '10%', ['--rot' as any]: '8deg' }} />
      <div className="hidden sm:block hero-beam thin" style={{ top: '55%', ['--rot' as any]: '-12deg' }} />
      {/* Noise overlay */}
      <svg className="pointer-events-none absolute inset-0 opacity-[0.035] -z-10" aria-hidden>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal in-view text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-ink/80">
              <span className="w-2 h-2 rounded-full bg-brandBlue animate-pulse" />
              Demo: App + Dashboard
            </div>
            <div className="mt-4 flex items-center gap-4 justify-center lg:justify-start">
              <Image src="/Sibora-no-fondo.png" alt="Logo Siböra" width={96} height={96} className="drop-shadow-lg rounded-2xl shadow-[0_0_0_10px_rgba(101,205,193,0.18)]" />
              <h1 className="text-[2.1rem] sm:text-5xl leading-tight font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#65cdc1,#16a7a3,#127ead)] animate-gradient">De residuos a recompensas</span>
              </h1>
            </div>
            <p className="mt-4 text-ink/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Convierte limpieza en valor. Economía regenerativa y accesible: gamificación, trazabilidad y recompensas por acciones ambientales.
            </p>
            <div className="mt-2 flex items-center gap-2 justify-center lg:justify-start text-xs">
              <span className="glass px-2.5 py-1 rounded-full">NFC integrado</span>
              <span className="glass px-2.5 py-1 rounded-full">Wallet corporativa</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#apps" className="btn btn-primary px-5 py-3 text-base">Descargar App</a>
              <a href="/dashboard" className="btn btn-ghost px-5 py-3 text-base">Probar Dashboard</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              {/* Mockups stack: use real images from /public */}
              <div className="relative">
                {/* Brand glow */}
                <div className="hidden sm:block pointer-events-none absolute -top-24 -right-28 w-[28rem] h-[28rem] rounded-full bg-brand-gradient opacity-10 blur-2xl z-[-1]" />

                {/* Dashboard image */}
                <div className="card overflow-hidden shadow-soft">
                  <Image src="/Dashboard.png" alt="Mock de Dashboard" width={960} height={600} className="w-full h-auto" priority />
                </div>

                {/* App image floating */}
                <div className="hidden sm:block absolute -right-8 -bottom-10 w-36 sm:w-44 md:w-52 drop-shadow-2xl float-slow">
                  <Image src="/App.png" alt="Mock de App" width={380} height={760} className="w-full h-auto" />
                </div>

                {/* Coin visual */}
                <div className="absolute -left-10 -bottom-12 w-36 h-36 grid place-content-center">
                  <Image src="/Coin.png" alt="Sibora coin" width={180} height={180} className="drop-shadow-2xl spin-slow" />
                </div>
              </div>
              <div className="absolute -z-10 -top-10 -right-10 w-60 h-60 rounded-full blur-3xl bg-primary-300/30" />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll cue */}
      <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 text-ink/40 text-xs flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m0 0l-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        Desplaza para saber más
      </div>
    </section>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-sm">{children}</span>
}
