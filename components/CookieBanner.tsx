"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "cookie-consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-dark border border-dark-border shadow-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-dark-text text-sm uppercase tracking-wide mb-1">
            Soubory cookie
          </p>
          <p className="text-dark-muted text-xs leading-relaxed">
            Tento web může používat analytické cookies pro zlepšení uživatelského zážitku.{" "}
            <Link href="/ochrana-osobnich-udaju" className="text-dark-text underline underline-offset-2 hover:text-red transition-colors">
              Zásady ochrany osobních údajů
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-display font-bold text-dark-muted text-xs tracking-widests uppercase hover:text-dark-text transition-colors px-4 py-2"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="bg-red hover:bg-red-dark text-white font-display font-bold text-xs tracking-widests uppercase px-6 py-2.5 transition-colors duration-200"
          >
            Přijmout
          </button>
          <button
            onClick={decline}
            className="text-dark-muted hover:text-dark-text transition-colors p-1"
            aria-label="Zavřít"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
