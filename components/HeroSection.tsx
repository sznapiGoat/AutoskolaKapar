"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MapPin, ChevronDown } from "lucide-react"
import { site } from "@/lib/data"

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#111116]">
      {/* ── Full-bleed photo with slow zoom-in ── */}
      <motion.div
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0"
      >
        <Image
          src="/images/kapar1.jpeg"
          alt="Instruktor autoškoly Lukáš Kápar při výuce jízdy"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% center" }}
        />
      </motion.div>

      {/* ── Layered overlays for legibility ── */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Red accent line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.1 }}
        className="absolute top-0 left-0 right-0 h-1 bg-red origin-left z-20"
      />

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-24 pt-36"
      >
        {/* Location badge */}
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-red" />
          <span className="font-display font-bold text-xs tracking-[0.25em] text-white/80 uppercase">
            Trhové Sviny · {site.slogan}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-black text-white uppercase leading-[0.88] mb-6 drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
          style={{ fontSize: "clamp(56px, 9vw, 150px)" }}
        >
          Autoškola<br />
          <span className="text-red">Lukáš Kápar</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={item}
          className="text-white/85 text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
        >
          Srozumitelná výuka, klidné vedení a praktická příprava pro bezpečný
          pohyb v provozu. Přes 10 let zkušeností, téměř 1 000 absolventů.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
          <Link
            href="/online-prihlaska"
            className="group inline-flex items-center gap-2.5 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-9 py-4.5 transition-colors duration-200"
          >
            Přihlásit se
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/cenik"
            className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white hover:bg-white/5 text-white font-display font-bold text-sm tracking-widest uppercase px-9 py-4.5 transition-all duration-200 backdrop-blur-sm"
          >
            Zobrazit ceník
          </Link>
        </motion.div>

        {/* Info row */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-white/15"
        >
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-[11px] tracking-widest text-white/55 uppercase">
              Nejbližší kurz
            </span>
            <span className="font-display font-black text-red text-lg leading-none">
              {site.nextCourse}
            </span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href={`tel:${site.phoneRaw}`}
            className="group inline-flex items-center gap-2 font-display font-bold text-white text-lg hover:text-red transition-colors leading-none"
          >
            <Phone size={15} className="text-red" />
            {site.phone}
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="inline-flex items-center gap-2 text-white/60 text-sm">
            <MapPin size={14} />
            {site.addressNote}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
