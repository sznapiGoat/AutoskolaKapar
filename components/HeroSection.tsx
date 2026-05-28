"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { site } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-graphite overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-red origin-left"
      />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display font-black text-cream/[0.015] select-none"
          style={{ fontSize: "clamp(120px, 20vw, 320px)", lineHeight: 1, whiteSpace: "nowrap" }}
        >
          BEZPEČNĚ
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-6 h-0.5 bg-red" />
              <span className="font-display font-bold text-xs tracking-widest text-muted uppercase">
                Trhové Sviny
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-black text-cream uppercase leading-[0.9] mb-6"
              style={{ fontSize: "clamp(56px, 9vw, 140px)" }}
            >
              Autoškola<br />
              <span className="text-red">Lukáš</span><br />
              Kápar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-muted text-lg max-w-xl leading-relaxed mb-10"
            >
              Srozumitelná výuka, klidné vedení a praktická příprava pro bezpečný pohyb v provozu.
              Více než 10 let zkušeností, ~1 000 absolventů.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/cenik"
                className="inline-flex items-center gap-2.5 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 group"
              >
                Zobrazit ceník
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2.5 border border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.4)] text-cream font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200"
              >
                Kontakt
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-surface border border-border p-6 space-y-5"
            >
              <div>
                <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">
                  Nejbližší kurz
                </p>
                <p className="font-display font-bold text-cream text-2xl">{site.nextCourse}</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">
                  Kontakt
                </p>
                <a href={`tel:${site.phoneRaw}`} className="font-display font-bold text-cream text-lg hover:text-red transition-colors block">
                  {site.phone}
                </a>
                <p className="text-muted text-xs mt-0.5">{site.contactPerson}</p>
              </div>
              <div className="w-full h-px bg-border" />
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-red mt-0.5 shrink-0" />
                <p className="text-muted text-xs leading-relaxed">
                  {site.address}<br />{site.addressNote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slogan strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-border flex items-center justify-between"
        >
          <span className="font-display font-bold text-red text-sm tracking-widest uppercase">
            {site.slogan}
          </span>
          <span className="text-muted text-xs tracking-widest uppercase hidden sm:block">
            AM · A1 · A2 · A · B · B+E · C · C+E · T
          </span>
        </motion.div>
      </div>
    </section>
  )
}
