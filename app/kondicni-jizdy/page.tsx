import type { Metadata } from "next"
import { conditioning, site } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Kondiční jízdy",
  description: "Zdokonalte své řidičské dovednosti s kondičními jízdami pro kategorie A2, A, B a B+E.",
}

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

function PriceTable({ title, rows }: { title: string; rows: { label: string; price: number }[] }) {
  return (
    <FadeIn>
      <div className="bg-surface border border-border p-8">
        <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
          {title}
        </h3>
        <div className="space-y-0">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-4 border-b border-border last:border-0">
              <span className="text-muted text-sm">{r.label}</span>
              <span className="font-display font-bold text-cream">{fmt(r.price)}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default function KondicniJizdyPage() {
  return (
    <>
      <PageHeader
        label="Kondiční jízdy"
        title="Zdokonalte své řidičské dovednosti"
        desc={conditioning.intro}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PriceTable title="Motocykly (A2 / A)" rows={conditioning.motorcycle} />
            <PriceTable title="Automobil (B)" rows={conditioning.carB} />
            <PriceTable title="Automobil s přívěsem (B+E)" rows={conditioning.carBE} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-surface-2 border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                  Co kondiční jízdy zahrnují
                </h3>
                <ul className="space-y-3">
                  {[
                    "Parkování a couvání",
                    "Jízda na dálnici",
                    "Provoz ve městě (České Budějovice, Praha)",
                    "Jízda s automatickou převodovkou",
                    "Nácvik problematických manévrů",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-surface-2 border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                  Jak se přihlásit
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {conditioning.note}
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="flex items-center gap-3 font-display font-bold text-cream hover:text-red transition-colors"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 font-display font-bold text-cream hover:text-red transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
