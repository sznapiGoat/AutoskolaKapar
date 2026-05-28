import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-graphite flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 text-center max-w-lg">
        <span
          className="font-display font-black text-cream/10 leading-none select-none block mb-8"
          style={{ fontSize: "clamp(120px, 25vw, 240px)" }}
        >
          404
        </span>
        <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-4">
          Stránka nenalezena
        </p>
        <h1 className="font-display font-black text-cream text-4xl uppercase mb-4">
          Tato stránka neexistuje
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Stránka byla přesunuta, nebo zadaná adresa neexistuje.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200"
          >
            <Home size={15} />
            Domů
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 border border-border hover:border-cream/30 text-cream font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200 group"
          >
            Kontakt
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
