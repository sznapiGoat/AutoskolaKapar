import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Motocykly: AM, A1, A2, A",
  description: "Motocyklové kurzy v Trhových Svinech, skupiny AM, A1, A2 a A. Ceny od 12 900 Kč, rozšíření ze stávajícího průkazu.",
}

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

const motoCategories = [
  {
    code: "AM",
    name: "Moped",
    age: "15+",
    desc: "Mopedy a lehké motocykly omezené na 45 km/h.",
    flexi: 12900, standard: 13900, premium: 15500,
    upgrades: [],
  },
  {
    code: "A1",
    name: "Lehká motorka",
    age: "16+",
    desc: "Lehké motocykly s výkonem max. 11 kW.",
    flexi: 13500, standard: 14500, premium: 15900,
    upgrades: [],
  },
  {
    code: "A2",
    name: "Střední motorka",
    age: "18+",
    desc: "Motocykly se středním výkonem do 35 kW.",
    flexi: 15500, standard: 16900, premium: 18300,
    upgrades: [
      { label: "Rozšíření z A1 (< 2 roky)", price: 10500 },
      { label: "Rozšíření z A1 (> 2 roky)", price: 7900 },
    ],
  },
  {
    code: "A",
    name: "Plný průkaz",
    age: "20–24+",
    desc: "Motocykly bez omezení výkonu. Věk 20 let s A2, jinak 24 let.",
    flexi: 15500, standard: 16900, premium: 18300,
    upgrades: [
      { label: "Rozšíření z A1", price: 10500 },
      { label: "Rozšíření z A2 (< 2 roky)", price: 10500 },
      { label: "Rozšíření z A2 (> 2 roky)", price: 7900 },
    ],
  },
]

export default function MotocyklyPage() {
  return (
    <>
      <PageHeader
        label="Motocykly"
        title="AM · A1 · A2 · A"
        desc="Všechny motocyklové kategorie od mopedů po plný průkaz bez omezení výkonu. Každá skupina se dá začít samostatně nebo jako rozšíření stávajícího průkazu."
        breadcrumb={{ label: "Kurzy", href: "/kurzy" }}
      />

      {/* Polygon photo */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src="/images/kapar3.jpeg"
          alt="Motocykly autoškoly Lukáš Kápar na cvičném polygonu v Trhových Svinech"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-graphite to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-graphite/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-white/80 text-xs font-display font-bold tracking-widest uppercase bg-graphite/70 backdrop-blur-sm px-3 py-1.5">
            Cvičný polygon · Trhové Sviny
          </p>
        </div>
      </div>

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <FadeInStagger staggerDelay={0.08}>
            {motoCategories.map((cat) => (
              <div key={cat.code} className="bg-surface border border-border p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <span className="font-display font-black text-red leading-none block" style={{ fontSize: "80px" }}>
                        {cat.code}
                      </span>
                      <p className="font-display font-bold text-cream text-xl uppercase tracking-wide mt-2">{cat.name}</p>
                      <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mt-1">věk {cat.age}</p>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mt-4 lg:mt-0">{cat.desc}</p>
                  </div>

                  {/* Packages */}
                  <div className="lg:col-span-5">
                    <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-4">Ceny kurzů</p>
                    <div className="space-y-0">
                      {[
                        { n: "Flexi", p: cat.flexi },
                        { n: "Standard", p: cat.standard },
                        { n: "Premium", p: cat.premium },
                        { n: "Individuální", p: null },
                        { n: "Doplňkový výcvik (60 min)", p: 500 },
                      ].map((row) => (
                        <div key={row.n} className="flex justify-between py-2.5 border-b border-border last:border-0">
                          <span className="text-muted text-sm">{row.n}</span>
                          <span className="font-display font-bold text-cream text-sm">
                            {row.p ? fmt(row.p) : "na dohodě"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upgrades */}
                  <div className="lg:col-span-4">
                    {cat.upgrades.length > 0 && (
                      <>
                        <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-4">Rozšíření</p>
                        <div className="space-y-0">
                          {cat.upgrades.map((u) => (
                            <div key={u.label} className="flex justify-between py-2.5 border-b border-border last:border-0">
                              <span className="text-muted text-sm">{u.label}</span>
                              <span className="font-display font-bold text-cream text-sm">{fmt(u.price)}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3}>
            <div className="bg-red p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-display font-bold text-white text-xl uppercase">Máte zájem o motocyklový kurz?</p>
                <p className="text-white/70 text-sm mt-1">Přihlaste se nebo se zeptejte na aktuální skupinové termíny.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link href="/online-prihlaska" className="inline-flex items-center gap-2 bg-white text-red font-display font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-cream transition-colors">
                  Přihlásit se <ArrowRight size={14} />
                </Link>
                <Link href="/cenik" className="inline-flex items-center gap-2 border border-white/40 text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 hover:border-white transition-colors">
                  Ceník
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
