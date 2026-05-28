import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Skupina T — Traktor",
  description: "Kurz řidičského průkazu skupiny T v Trhových Svinech. Standard 16 900 Kč, rozšíření ze skupiny B 12 900 Kč.",
}

export default function SkupinaTPage() {
  return (
    <>
      <PageHeader
        label="Skupina T"
        title="Traktor"
        desc="Traktory a samojízdné pracovní stroje. Věk od 17 let."
        breadcrumb={{ label: "Kurzy", href: "/kurzy" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { label: "Standard kurz", price: "16 900 Kč", desc: "Základní kurz skupiny T od nuly." },
                  { label: "Rozšíření ze skupiny B", price: "12 900 Kč", desc: "Zvýhodněná cena pro držitele skupiny B." },
                ].map((item) => (
                  <div key={item.label} className="bg-surface border border-border p-8 flex items-center justify-between gap-6">
                    <div>
                      <p className="font-display font-bold text-cream text-xl uppercase tracking-wide">{item.label}</p>
                      <p className="text-muted text-sm mt-1">{item.desc}</p>
                    </div>
                    <p className="font-display font-black text-red text-3xl shrink-0">{item.price}</p>
                  </div>
                ))}
                <div className="bg-surface border border-border p-8">
                  <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-4">Kombinace s dalšími kurzy</p>
                  {[
                    { label: "A2 + B + T", price: "52 700 Kč", save: "−4 000 Kč" },
                    { label: "A + B + T", price: "52 700 Kč", save: "−4 000 Kč" },
                    { label: "B + T", price: "37 100 Kč", save: "−2 700 Kč" },
                    { label: "B+E + T", price: "20 100 Kč", save: "−2 700 Kč" },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                      <span className="text-muted text-sm">{b.label}</span>
                      <div className="text-right">
                        <span className="font-display font-bold text-cream text-sm block">{b.price}</span>
                        <span className="text-red text-xs">{b.save}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-red p-8 flex flex-col gap-6 h-full">
                <div>
                  <span className="font-display font-black text-white/20 leading-none block" style={{ fontSize: "100px" }}>T</span>
                  <p className="font-display font-bold text-white/80 text-xs tracking-widests uppercase mb-2">Věk</p>
                  <p className="font-display font-bold text-white text-3xl">od 17 let</p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Skupina T zahrnuje traktory, přívěsné vozíky a samojízdné pracovní stroje využívané v zemědělství a lesnictví.
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <Link href="/online-prihlaska" className="inline-flex items-center justify-center gap-2 bg-white text-red font-display font-bold text-sm tracking-widests uppercase px-6 py-3 hover:bg-cream transition-colors">
                    Přihlásit se <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
