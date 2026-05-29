"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, UserPlus } from "lucide-react"
import { navLinks, site } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-graphite/97 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Autoškola Kapar — domů">
            <Image
              src="/images/kapar5.png"
              alt="Autoškola Kapar"
              width={120}
              height={120}
              className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active ? "text-red" : "text-muted hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="hidden xl:block text-sm font-medium text-muted hover:text-cream transition-colors duration-200"
            >
              {site.phone}
            </a>
            <Link
              href="/online-prihlaska"
              className="hidden sm:inline-flex items-center gap-1.5 bg-red hover:bg-red-dark text-white font-display font-bold text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200"
            >
              <UserPlus size={13} />
              Přihlásit se
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-cream hover:text-red transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-graphite/98 backdrop-blur-xl flex flex-col pt-16"
          >
            {/* Mobile logo */}
            <div className="px-6 pt-6 pb-2">
              <Image
                src="/images/kapar5.png"
                alt="Autoškola Kapar"
                width={100}
                height={100}
                className="h-14 w-auto"
              />
            </div>

            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display font-bold text-3xl tracking-wide uppercase transition-colors ${
                      (link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/"))
                        ? "text-red"
                        : "text-cream hover:text-red"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 py-6 border-t border-border mt-auto">
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-display font-bold text-2xl text-cream tracking-wide hover:text-red transition-colors"
              >
                {site.phone}
              </a>
              <p className="text-muted text-sm mt-1">{site.contactPerson}</p>
              <Link
                href="/online-prihlaska"
                className="inline-flex items-center gap-2 mt-4 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors"
              >
                <UserPlus size={15} />
                Přihlásit se
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
