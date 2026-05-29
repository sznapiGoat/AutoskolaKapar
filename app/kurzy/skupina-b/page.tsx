import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Skupina B — Osobní automobil",
  description: "Kurz řidičského průkazu skupiny B v Trhových Svinech. Flexi od 20 900 Kč, Standard od 22 900 Kč, Premium od 24 900 Kč.",
}

const packages = [
  {
    name: "Flexi",
    price: 20900,
    desc: "Flexibilní termíny — docházejte, kdy vám to vyhovuje.",
  },
  {
    name: "Standard",
    price: 22900,
    desc: "Pevné skupinové termíny — nejoblíbenější volba.",
  },
  {
    name: "Premium",
    price: 24900,
    desc: "Prioritní obsluha, více individuálních jízd.",
  },
]

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

export default function SkupinaBPage() {
  return (
    <>
      <PageHeader
        label="Skupina B"
        title="Osobní automobil"
        desc="Osobní vozidla do 3 500 kg. Nejrozšířenější skupina řidičského průkazu, vhodná od 17 let."
        breadcrumb={{ label: "Kurzy", href: "/kurzy" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Packages */}
            <div className="lg:col-span-2">
              <FadeIn className="mb-8">
                <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">Balíčky</p>
                <h2 className="font-display font-bold text-cream text-3xl uppercase">Vyberte si variantu</h2>
              </FadeIn>
              <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.08}>
                {packages.map((pkg) => (
                  <div key={pkg.name} className="bg-surface border border-border p-8 flex flex-col gap-6 hover:border-red/40 transition-colors duration-300">
                    <div>
                      <div className="w-8 h-0.5 bg-red mb-4" />
                      <p className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-2">{pkg.name}</p>
                      <p className="text-muted text-sm leading-relaxed">{pkg.desc}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="font-display font-black text-red text-3xl">{fmt(pkg.price)}</p>
                      <p className="text-muted text-xs mt-1">individuální cena na dohodě</p>
                    </div>
                  </div>
                ))}
              </FadeInStagger>
            </div>

            {/* Key info */}
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div className="bg-surface border border-border p-8">
                  <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-5">Základní informace</p>
                  <ul className="space-y-4">
                    {[
                      { k: "Věk", v: "od 17 let" },
                      { k: "Doplňkový výcvik", v: "500 Kč / 60 min" },
                      { k: "Rozšíření B96", v: "7 900 Kč" },
                    ].map((r) => (
                      <li key={r.k} className="flex justify-between gap-4 py-3 border-b border-border last:border-0">
                        <span className="text-muted text-sm">{r.k}</span>
                        <span className="font-display font-bold text-cream text-sm text-right">{r.v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface border border-border p-8">
                  <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-4">Sleva pro studenty</p>
                  <p className="text-cream font-display font-bold text-2xl mb-1">−1 000 Kč</p>
                  <p className="text-muted text-xs leading-relaxed">SOŠ a Gymnázium Trhové Sviny</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Driving photo */}
          <FadeIn delay={0.15} className="mt-10">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/kapar4.jpg"
                alt="Žákyně při jízdě ve výcvikovém vozidle autoškoly Lukáš Kápar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-graphite/20 to-transparent pointer-events-none" />
            </div>
          </FadeIn>

          {/* What's included */}
          <FadeIn delay={0.2} className="mt-6">
            <div className="bg-surface border border-border p-8">
              <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">Co kurz zahrnuje</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Výuka teorie v rozsahu daném zákonem",
                  "Praktické jízdy s instruktorem",
                  "Příprava na zkoušky z předpisů a jízdy",
                  "Výpůjčka učebnice a přístup k online testům",
                  "Přihlášení k závěrečným zkouškám",
                  "Přístup do aplikace MOJE AUTOŠKOLA",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-red shrink-0 mt-0.5" />
                    <span className="text-muted text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Upgrades + CTA */}
          <FadeIn delay={0.25} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-surface border border-border p-8">
                <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-3">Zvýhodněné kombinace</p>
                <p className="text-muted text-sm leading-relaxed">
                  B+T od <span className="text-cream font-bold">37 100 Kč</span> (sleva 2 700 Kč) ·
                  A2+B od <span className="text-cream font-bold">37 100 Kč</span> (sleva 2 700 Kč)
                </p>
              </div>
              <div className="sm:w-64 bg-red p-8 flex flex-col justify-between">
                <p className="text-white/80 text-sm mb-4">Přihlaste se nebo se zeptejte na podrobnosti.</p>
                <Link href="/online-prihlaska" className="inline-flex items-center gap-2 bg-white text-red font-display font-bold text-sm tracking-widest uppercase px-5 py-3 hover:bg-cream transition-colors">
                  Přihlásit se <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
