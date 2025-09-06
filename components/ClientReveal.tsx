"use client";
import { useEffect } from 'react'

export default function ClientReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      })
    }, { threshold: 0.1 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return <>{children}</>
}

