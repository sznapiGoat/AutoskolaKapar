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

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-graphite/97 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} aria-label="Autoškola Lukáš Kápar — zpět na začátek">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Image
                src="/images/kapar6.webp"
                alt="Autoškola Lukáš Kápar"
                width={180}
                height={72}
                className="h-9 w-auto"
                priority
              />
            </motion.div>
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
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active ? "text-red" : "text-muted hover:text-cream"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-px bg-red"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href={`tel:${site.phoneRaw}`}
              className="hidden xl:block text-sm font-medium text-muted hover:text-cream transition-colors duration-200"
              whileHover={{ x: 1 }}
              transition={{ duration: 0.15 }}
            >
              {site.phone}
            </motion.a>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Link
                href="/online-prihlaska"
                className="hidden sm:inline-flex items-center gap-1.5 bg-red hover:bg-red-dark text-white font-display font-bold text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200"
              >
                <UserPlus size={13} />
                Přihlásit se
              </Link>
            </motion.div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-cream hover:text-red transition-colors"
              aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-graphite/99 backdrop-blur-xl flex flex-col pt-16"
          >
            {/* Logo in white box */}
            <div className="px-6 pt-8 pb-2">
              <div className="inline-block bg-white px-4 py-2.5">
                <Image
                  src="/images/kapar6.webp"
                  alt="Autoškola Lukáš Kápar"
                  width={160}
                  height={64}
                  className="h-10 w-auto"
                />
              </div>
            </div>

            <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
              {navLinks.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/")
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 py-3 font-display font-bold text-3xl tracking-wide uppercase transition-colors ${
                        active ? "text-red" : "text-cream hover:text-red"
                      }`}
                    >
                      {active && <span className="w-1.5 h-1.5 bg-red rounded-full shrink-0" />}
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-6 py-6 border-t border-border"
            >
              <a
                href={`tel:${site.phoneRaw}`}
                className="font-display font-bold text-2xl text-cream tracking-wide hover:text-red transition-colors"
              >
                {site.phone}
              </a>
              <p className="text-muted text-sm mt-0.5">{site.contactPerson}</p>
              <Link
                href="/online-prihlaska"
                className="inline-flex items-center gap-2 mt-5 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors"
              >
                <UserPlus size={15} />
                Přihlásit se
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
