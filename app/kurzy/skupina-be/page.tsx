import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Skupina B+E — Auto s přívěsem",
  description: "Kurz řidičského průkazu B+E v Trhových Svinech. Standard 9 500 Kč, zrychlený kurz 11 900 Kč.",
}

export default function SkupinaBEPage() {
  return (
    <>
      <PageHeader
        label="Skupina B+E"
        title="Auto s přívěsem"
        desc="Vozidlo skupiny B s přípojným vozidlem, jehož celková hmotnost přesahuje 750 kg — celkem do 7 000 kg."
        breadcrumb={{ label: "Kurzy", href: "/kurzy" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeInStagger className="space-y-4" staggerDelay={0.08}>
              {[
                { name: "Standard", price: "9 500 Kč", desc: "Skupinový kurz v pravidelných termínech." },
                { name: "Zrychlený kurz", price: "11 900 Kč", desc: "Intenzivní průběh, dokončení do přibližně 2 týdnů." },
              ].map((pkg) => (
                <div key={pkg.name} className="bg-surface border border-border p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-display font-bold text-cream text-2xl uppercase tracking-wide">{pkg.name}</p>
                      <p className="text-muted text-sm mt-1">{pkg.desc}</p>
                    </div>
                    <p className="font-display font-black text-red text-3xl shrink-0">{pkg.price}</p>
                  </div>
                </div>
              ))}
              <div className="bg-surface border border-border p-8">
                <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-4">Další poplatky</p>
                {[
                  { label: "Doplňkový výcvik (60 min)", price: "600 Kč" },
                  { label: "Věk", price: "od 18 let" },
                  { label: "Podmínka", price: "platný průkaz skupiny B" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between py-2.5 border-b border-border last:border-0">
                    <span className="text-muted text-sm">{r.label}</span>
                    <span className="font-display font-bold text-cream text-sm">{r.price}</span>
                  </div>
                ))}
              </div>
            </FadeInStagger>

            <FadeIn delay={0.15}>
              <div className="bg-surface border border-border p-8 h-full flex flex-col gap-6">
                <div>
                  <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-4">Kombinace s dalšími kurzy</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    Skupinu B+E lze kombinovat s motocyklovými kurzy za zvýhodněnou cenu:
                  </p>
                  {[
                    { label: "A + B+E", price: "24 100 Kč", save: "−2 700 Kč" },
                    { label: "A + B+E + T", price: "35 700 Kč", save: "−4 000 Kč" },
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
                <div className="mt-auto flex flex-col gap-3">
                  <Link href="/online-prihlaska" className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white font-display font-bold text-sm tracking-widest uppercase px-6 py-3 transition-colors">
                    Přihlásit se <ArrowRight size={14} />
                  </Link>
                  <Link href="/cenik" className="text-center text-muted text-sm hover:text-cream transition-colors">
                    Zobrazit úplný ceník
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
