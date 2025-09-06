"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#que-es', label: '¿Qué es?' },
    { href: '#apps', label: 'Aplicativos' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#como-funciona', label: 'Cómo funciona' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all relative ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-black/10' : 'bg-white/60 md:bg-transparent backdrop-blur-md border-b border-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/Sibora-no-fondo.png" alt="Sibora logo" width={40} height={40} className="object-contain drop-shadow-sm" />
          <span className="font-semibold tracking-tight">Siböra</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-ink/80 hover:text-ink transition-colors hover:underline underline-offset-4">{item.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#apps" className="btn btn-primary py-2 px-3">Ver demo</a>
        </div>
        <div className="md:hidden">
          <a href="#apps" className="btn btn-primary py-2 px-3">Ver demo</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-brandMint/0 via-brandMint/60 to-brandBlue/0" />
    </header>
  )
}
