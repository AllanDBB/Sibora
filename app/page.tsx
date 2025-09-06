import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QueEs from '@/components/QueEs'
import Apps from '@/components/Apps'
import Beneficios from '@/components/Beneficios'
import ComoFunciona from '@/components/ComoFunciona'
import Footer from '@/components/Footer'
import ClientReveal from '@/components/ClientReveal'

export default function Page() {
  // Use a small client-only intersection observer to animate sections
  return (
    <main>
      {/* Hero background */}
      <div className="relative pb-2">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_0%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(600px_300px_at_90%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
        <Navbar />
        <Hero />
      </div>
      <ClientReveal>
        <QueEs />
        <Apps />
        <Beneficios />
        <ComoFunciona />
      </ClientReveal>
      <Footer />
    </main>
  )
}
