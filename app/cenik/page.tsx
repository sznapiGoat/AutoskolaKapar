import type { Metadata } from "next"
import { pricing, site } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Ceník",
  description: "Přehled cen kurzů, motocykly, automobily, zvýhodněné balíčky, kondiční jízdy a věrnostní slevy.",
}

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

function PackageRow({ label, price }: { label: string; price: number }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <span className="text-muted text-sm">{label}</span>
      <span className="font-display font-bold text-cream text-sm">{fmt(price)}</span>
    </div>
  )
}

export default function CenikPage() {
  return (
    <>
      <PageHeader
        label="Ceník"
        title="Transparentní ceny bez překvapení"
        desc={`Platnost ceníku od ${site.pricingValidFrom}. Ceny jsou uvedeny bez DPH, provozovatel není plátce DPH.`}
      />

      {/* Package explanation */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.08}>
            {[
              { name: "Flexi", desc: "Flexibilní termíny, docházejte, kdy vám to vyhovuje. Ideální pro zaneprázdněné studenty a pracující." },
              { name: "Standard", desc: "Standardní průběh kurzu v pevně daných skupinových termínech. Nejoblíbenější volba." },
              { name: "Premium", desc: "Prioritní obsluha, více individuálních jízd a prémiový přístup po celou dobu kurzu." },
            ].map((pkg) => (
              <div key={pkg.name} className="bg-surface-2 border border-border p-8">
                <div className="w-8 h-0.5 bg-red mb-5" />
                <h3 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-3">
                  {pkg.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Motorcycle pricing */}
      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="font-display font-bold text-3xl text-cream uppercase tracking-wide mb-1">Motocykly</h2>
            <div className="w-12 h-0.5 bg-red" />
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.07}>
            {pricing.motorcycles.map((cat) => (
              <div key={cat.code} className="bg-surface border border-border p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display font-black text-red text-5xl leading-none">{cat.code}</span>
                </div>

                <div className="space-y-0">
                  {cat.flexi && <PackageRow label="Flexi" price={cat.flexi} />}
                  {cat.standard && <PackageRow label="Standard" price={cat.standard} />}
                  {cat.premium && <PackageRow label="Premium" price={cat.premium} />}
                  {cat.individual && (
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted text-sm">Individuální</span>
                      <span className="text-muted text-sm italic">na dohodě</span>
                    </div>
                  )}
                  {cat.extra && <PackageRow label="Doplňkový výcvik (60 min)" price={cat.extra} />}
                </div>

                {cat.upgrades && cat.upgrades.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-3">
                      Rozšíření
                    </p>
                    {cat.upgrades.map((u) => (
                      <PackageRow key={u.label} label={u.label} price={u.price} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Car pricing */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="font-display font-bold text-3xl text-cream uppercase tracking-wide mb-1">Automobily a ostatní</h2>
            <div className="w-12 h-0.5 bg-red" />
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {pricing.cars.map((cat) => (
              <div key={cat.code} className="bg-surface-2 border border-border p-8">
                <span className="font-display font-black text-red text-5xl leading-none block mb-6">
                  {cat.code}
                </span>
                <div className="space-y-0">
                  {"flexi" in cat && cat.flexi && <PackageRow label="Flexi" price={cat.flexi} />}
                  {cat.standard && <PackageRow label="Standard" price={cat.standard} />}
                  {"premium" in cat && cat.premium && <PackageRow label="Premium" price={cat.premium} />}
                  {"accelerated" in cat && cat.accelerated && (
                    <PackageRow label="Zrychlený kurz (2 týdny)" price={cat.accelerated} />
                  )}
                  {"extra" in cat && cat.extra && <PackageRow label="Doplňkový výcvik (60 min)" price={cat.extra} />}
                  {"individual" in cat && cat.individual && (
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted text-sm">Individuální</span>
                      <span className="text-muted text-sm italic">na dohodě</span>
                    </div>
                  )}
                </div>
                {cat.note && (
                  <p className="mt-4 text-xs text-muted/80 italic leading-relaxed">{cat.note}</p>
                )}
                {cat.upgrades && cat.upgrades.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-3">Rozšíření</p>
                    {cat.upgrades.map((u) => (
                      <PackageRow key={u.label} label={u.label} price={u.price} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Bundles */}
      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="font-display font-bold text-3xl text-cream uppercase tracking-wide mb-1">Zvýhodněné balíčky</h2>
            <div className="w-12 h-0.5 bg-red mb-4" />
            <p className="text-muted text-sm">Při absolvování více kurzů najednou ušetříte.</p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {pricing.bundles.map((b) => (
              <div key={b.label} className="bg-surface border border-border p-8 group hover:border-red/40 transition-colors duration-300">
                <h3 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-4">
                  {b.label}
                </h3>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-display font-black text-cream text-3xl">{fmt(b.price)}</span>
                  </div>
                  <span className="font-display font-bold text-red text-sm bg-red/10 px-3 py-1">
                    −{fmt(b.discount)}
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Loyalty + exam fees */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-surface-2 border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
                  Věrnostní slevy
                </h3>
                <p className="text-muted text-xs mb-4 leading-relaxed">Platí do 5 let od prvního kurzu.</p>
                <div className="space-y-0">
                  {pricing.loyalty.map((l) => (
                    <div key={l.course} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted text-sm">{l.course}</span>
                      <span className="font-display font-bold text-red text-sm">−{fmt(l.discount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-surface-2 border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
                  Poplatky Obecního úřadu
                </h3>
                <div className="space-y-0">
                  {pricing.examFees.map((f) => (
                    <PackageRow key={f.label} label={f.label} price={f.price} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-surface-2 border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
                  Ostatní poplatky
                </h3>
                <div className="space-y-0">
                  {pricing.other.map((o) => (
                    <PackageRow key={o.label} label={o.label} price={o.price} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Re-training */}
      <section className="py-16 bg-graphite border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface border border-border p-8 max-w-3xl">
              <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
                Přezkoušení po 3 neúspěšných zkouškách
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {pricing.retraining.map((r) => (
                  <PackageRow key={r.label} label={r.label} price={r.price} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
