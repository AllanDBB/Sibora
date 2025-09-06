import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative section overflow-hidden pt-36 md:pt-48 lg:pt-52">
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
              Demo en desarrollo — Hackathon
            </div>
            <div className="mt-4 flex items-center gap-4 justify-center lg:justify-start">
              <Image src="/Sibora-no-fondo.png" alt="Logo Siböra" width={96} height={96} className="drop-shadow-lg rounded-2xl shadow-[0_0_0_10px_rgba(101,205,193,0.18)]" />
              <h1 className="text-[2.1rem] sm:text-5xl leading-tight font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#65cdc1,#16a7a3,#127ead)] animate-gradient">De residuos a recompensas</span>
              </h1>
            </div>
            <p className="mt-4 text-ink/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Convierte limpieza en valor. Economía regenerativa, accesible para todos. Gamificación, trazabilidad y recompensas por acciones ambientales.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#cta" className="btn btn-primary px-5 py-3 text-base">Unirse a la beta</a>
              <a href="#cta" className="btn btn-ghost px-5 py-3 text-base">Ver demo del Dashboard</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              {/* Mockups stack: Dashboard + Phone + Coin */}
              <div className="relative">
                {/* Prominent brand mark behind */}
                <div className="hidden sm:block pointer-events-none absolute -top-24 -right-28 w-[28rem] h-[28rem] rounded-full bg-brand-gradient opacity-10 blur-2xl z-[-1]" />
                <Image src="/Sibora-no-fondo.png" alt="Marca Sibora" width={520} height={520} className="hidden sm:block pointer-events-none absolute -top-16 -right-16 w-72 sm:w-80 md:w-[22rem] opacity-15 contrast-125 z-[-1]" />

                {/* Dashboard card */}
                <div className="card p-5 shadow-soft">
                  <div className="flex items-center gap-2 mb-3 text-xs text-ink/60">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="w-2 h-2 rounded-full bg-[#65cdc1]" />
                    <span className="w-2 h-2 rounded-full bg-[#127ead]" />
                    <span className="ml-2">dashboard.sibora</span>
                  </div>
                  {/* fake widgets */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 h-32 rounded-xl bg-gradient-to-br from-primary-100 to-[#65cdc1]" />
                    <div className="h-32 rounded-xl bg-gradient-to-br from-[#65cdc1] to-[#127ead]" />
                    <div className="h-24 rounded-xl bg-white border border-black/5" />
                    <div className="h-24 rounded-xl bg-white border border-black/5" />
                    <div className="h-24 rounded-xl bg-white border border-black/5" />
                  </div>
                </div>
                {/* Phone mock floating */}
                <div className="hidden sm:block absolute -right-8 -bottom-10 w-40 sm:w-48 md:w-56 aspect-[9/19] rounded-[2rem] border border-black/10 bg-white shadow-2xl float-slow">
                  <div className="h-6" />
                  <div className="p-3 space-y-2">
                    <div className="h-28 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#16a7a3_0%,transparent_60%),radial-gradient(circle_at_80%_40%,#127ead_0%,transparent_55%)]" />
                    <div className="h-3 rounded bg-black/10 w-5/6" />
                    <div className="h-3 rounded bg-black/10 w-3/6" />
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-10 rounded-xl bg-primary-100" />
                      <div className="h-10 rounded-xl bg-[rgba(101,205,193,0.3)]" />
                      <div className="h-10 rounded-xl bg-[rgba(18,126,173,0.12)]" />
                    </div>
                  </div>
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
