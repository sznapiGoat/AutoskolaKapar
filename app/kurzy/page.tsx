import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Kurzy",
  description: "Přehled kurzů řidičského průkazu, skupina B, motocykly AM/A1/A2/A, B+E, C, C+E, T.",
}

const courses = [
  {
    code: "B",
    name: "Osobní automobil",
    age: "17+",
    desc: "Nejoblíbenější kategorie. Osobní vozidla do 3 500 kg.",
    from: "20 900 Kč",
    href: "/kurzy/skupina-b",
    highlight: true,
  },
  {
    code: "AM · A1 · A2 · A",
    name: "Motocykly",
    age: "15–24+",
    desc: "Všechny motocyklové kategorie od mopedů po plný průkaz bez omezení výkonu.",
    from: "12 900 Kč",
    href: "/kurzy/motocykly",
    highlight: false,
  },
  {
    code: "B+E",
    name: "Auto s přívěsem",
    age: "18+",
    desc: "Vozidlo skupiny B s přívěsem, celková hmotnost do 7 000 kg.",
    from: "9 500 Kč",
    href: "/kurzy/skupina-be",
    highlight: false,
  },
  {
    code: "C / C+E",
    name: "Nákladní vozidlo",
    age: "21+",
    desc: "Těžká nákladní vozidla nad 3 500 kg a jízdní soupravy.",
    from: "28 000 Kč",
    href: "/kurzy/skupina-c",
    highlight: false,
  },
  {
    code: "T",
    name: "Traktor",
    age: "17+",
    desc: "Traktory a samojízdné pracovní stroje.",
    from: "16 900 Kč",
    href: "/kurzy/skupina-t",
    highlight: false,
  },
]

export default function KurzyPage() {
  return (
    <>
      <PageHeader
        label="Nabídka kurzů"
        title="Kurzy řidičského průkazu"
        desc="Vyberte kategorii a zjistěte vše o průběhu kurzu, cenách a požadavcích."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured B card */}
          <FadeIn className="mb-6">
            {(() => {
              const b = courses[0]
              return (
                <Link
                  href={b.href}
                  className="group block bg-red p-10 relative overflow-hidden hover:bg-red-dark transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 font-display font-black text-white/10 leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(100px, 15vw, 200px)" }}>
                    {b.code}
                  </div>
                  <div className="relative z-10 flex items-start justify-between gap-8">
                    <div>
                      <p className="text-white/70 font-display font-bold text-xs tracking-widest uppercase mb-2">
                        Nejoblíbenější · věk {b.age}
                      </p>
                      <h2 className="font-display font-black text-white text-4xl uppercase leading-tight mb-3">
                        Skupina {b.code}: {b.name}
                      </h2>
                      <p className="text-white/80 text-sm leading-relaxed max-w-lg">{b.desc}</p>
                      <p className="text-white font-display font-bold text-xl mt-4">od {b.from}</p>
                    </div>
                    <ArrowRight size={28} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-2" />
                  </div>
                </Link>
              )
            })()}
          </FadeIn>

          {/* Other courses grid */}
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.07}>
            {courses.slice(1).map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-surface border border-border hover:border-red/40 p-8 transition-all duration-300 flex flex-col gap-5"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display font-black text-red text-3xl leading-none">{c.code}</span>
                  <span className="font-display font-bold text-xs text-muted tracking-widest uppercase">
                    {c.age}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-2 group-hover:text-red transition-colors duration-300">
                    {c.name}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-cream font-display font-bold text-sm">od {c.from}</span>
                  <ArrowRight size={15} className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3} className="mt-8">
            <div className="bg-surface border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-muted text-sm leading-relaxed max-w-xl">
                Zvýhodněné balíčky při kombinaci více kurzů, např. A2+B nebo B+T. Věrnostní slevy pro opakované zákazníky.
              </p>
              <Link
                href="/cenik"
                className="shrink-0 inline-flex items-center gap-2 font-display font-bold text-red text-sm tracking-widest uppercase hover:underline"
              >
                Zobrazit ceník <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
