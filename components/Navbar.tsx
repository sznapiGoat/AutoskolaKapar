"use client"

import { useState, useEffect } from "react"
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
            ? "bg-graphite/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-red flex items-center justify-center">
              <span className="font-display font-bold text-sm text-white tracking-wider">AK</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-cream text-sm tracking-widest uppercase">
                Autoškola Kápar
              </span>
            </div>
          </Link>

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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-graphite/98 backdrop-blur-xl flex flex-col pt-16"
          >
            <nav className="flex flex-col px-6 py-8 gap-2">
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
            <div className="px-6 py-4 border-t border-border mt-auto">
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-display font-bold text-2xl text-cream tracking-wide"
              >
                {site.phone}
              </a>
              <p className="text-muted text-sm mt-1">{site.contactPerson}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
