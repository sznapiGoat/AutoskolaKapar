"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import { site } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative bg-graphite overflow-hidden min-h-screen flex flex-col lg:flex-row">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-red origin-left z-30"
      />

      {/* ── LEFT panel: content ── */}
      <div className="relative z-10 flex flex-col justify-end px-6 lg:px-12 pb-16 pt-28 lg:w-[58%]">
        {/* BEZPEČNĚ watermark */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
          <span
            className="font-display font-black text-cream/[0.04] select-none leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(80px, 12vw, 200px)" }}
          >
            BEZPEČNĚ
          </span>
        </div>

        {/* Location badge */}
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

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-black text-cream uppercase leading-[0.9] mb-6"
          style={{ fontSize: "clamp(52px, 8vw, 120px)" }}
        >
          Autoškola<br />
          <span className="text-red">Lukáš</span><br />
          Kápar
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-muted text-lg max-w-md leading-relaxed mb-10"
        >
          Srozumitelná výuka, klidné vedení a praktická příprava pro bezpečný pohyb v provozu.
          Více než 10 let zkušeností, ~1 000 absolventů.
        </motion.p>

        {/* CTAs */}
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

        {/* Mobile-only info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="lg:hidden mt-10 bg-surface border border-border p-6 space-y-4"
        >
          <div>
            <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">Nejbližší kurz</p>
            <p className="font-display font-bold text-cream text-2xl">{site.nextCourse}</p>
          </div>
          <div className="w-full h-px bg-border" />
          <div>
            <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">Kontakt</p>
            <a href={`tel:${site.phoneRaw}`} className="font-display font-bold text-cream text-lg hover:text-red transition-colors block">
              {site.phone}
            </a>
            <p className="text-muted text-xs mt-0.5">{site.contactPerson}</p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={13} className="text-red mt-0.5 shrink-0" />
            <p className="text-muted text-xs leading-relaxed">{site.address}</p>
          </div>
        </motion.div>

        {/* Slogan strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 pt-6 border-t border-border flex items-center justify-between"
        >
          <span className="font-display font-bold text-red text-sm tracking-widest uppercase">
            {site.slogan}
          </span>
          <span className="text-muted text-xs tracking-widest uppercase hidden sm:block">
            AM · A1 · A2 · A · B · B+E · C · C+E · T
          </span>
        </motion.div>
      </div>

      {/* ── RIGHT panel: image ── */}
      <div className="hidden lg:block relative flex-1">
        <Image
          src="/images/kapar1.jpeg"
          alt="Výuka jízdy s instruktorem autoškoly Lukáš Kápar"
          fill
          className="object-cover object-center"
          priority
          sizes="42vw"
        />
        {/* Left-edge gradient to blend with content */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-graphite to-transparent pointer-events-none z-10" />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-graphite/20 to-transparent pointer-events-none z-10" />

        {/* Info card overlaid on image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute bottom-16 right-8 z-20 bg-graphite/92 backdrop-blur-sm border border-border p-6 space-y-4 w-72"
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
            <a
              href={`tel:${site.phoneRaw}`}
              className="font-display font-bold text-cream text-lg hover:text-red transition-colors block"
            >
              {site.phone}
            </a>
            <p className="text-muted text-xs mt-0.5">{site.contactPerson}</p>
          </div>
          <div className="w-full h-px bg-border" />
          <div className="flex items-start gap-2">
            <MapPin size={13} className="text-red mt-0.5 shrink-0" />
            <p className="text-muted text-xs leading-relaxed">
              {site.address}<br />{site.addressNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
