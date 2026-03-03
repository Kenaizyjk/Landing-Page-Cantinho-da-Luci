"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"

const navLinks = [
  { href: "#menu", label: "Cardápio" },
  { href: "#hospedagem", label: "Hospedagem" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-stone-900/96 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl sm:text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          Cantinho da Luci
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-[#D4AF37] font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531996481646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-bold px-4 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Reservar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-stone-900/98 border-t border-stone-800/60 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 pt-2 pb-5 gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-200 hover:text-[#D4AF37] font-medium py-3.5 px-3 text-base border-b border-stone-800/40 last:border-0 transition-colors touch-manipulation"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531996481646"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B5952F] text-stone-900 font-bold px-5 py-4 rounded-xl text-base transition-colors touch-manipulation"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle className="w-5 h-5" />
            Reservar Agora
          </a>
        </div>
      </div>
    </header>
  )
}
