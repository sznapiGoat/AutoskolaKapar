import type { Metadata } from "next"
import { conditioning, site } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Kondiční jízdy",
  description: "Kondiční jízdy skupin A2, A, B a B+E — oživení a zdokonalení řidičských dovedností s instruktorem.",
}

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč"
}

type PriceItem = { label: string; duration: string; price: number }

function PriceCard({ item }: { item: PriceItem }) {
  return (
    <div className="bg-graphite border border-border p-6 flex flex-col gap-4 hover:border-red/30 transition-colors duration-300">
      <p className="font-display font-bold text-cream text-base uppercase tracking-wide leading-tight">
        {item.label}
      </p>
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-border">
        <span className="text-muted text-sm">{item.duration}</span>
        <span className="font-display font-black text-red text-2xl">{fmt(item.price)}</span>
      </div>
    </div>
  )
}

export default function KondicniJizdyPage() {
  return (
    <>
      <PageHeader
        label="Kondiční jízdy"
        title={conditioning.intro}
        desc={conditioning.desc}
      />

      {/* B+E note */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-1 h-full bg-red shrink-0 self-stretch min-h-[48px]" />
              <p className="text-muted text-sm leading-relaxed">{conditioning.beDesc}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <FadeIn>
            <div>
              <h2 className="font-display font-bold text-cream text-3xl uppercase tracking-wide mb-1">
                Motocykly A2 · A
              </h2>
              <div className="w-10 h-0.5 bg-red mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {conditioning.motorcycle.map((item) => (
                  <PriceCard key={item.label + item.duration} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="font-display font-bold text-cream text-3xl uppercase tracking-wide mb-1">
                Automobil B
              </h2>
              <div className="w-10 h-0.5 bg-red mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {conditioning.carB.map((item) => (
                  <PriceCard key={item.label + item.duration} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h2 className="font-display font-bold text-cream text-3xl uppercase tracking-wide mb-1">
                Automobil s přívěsem B+E
              </h2>
              <div className="w-10 h-0.5 bg-red mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {conditioning.carBE.map((item) => (
                  <PriceCard key={item.label + item.duration} item={item} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Note + form */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-6">
                <div className="bg-graphite border border-border p-8">
                  <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-3">
                    Před kondiční jízdou
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{conditioning.note}</p>
                </div>
                <div className="bg-graphite border border-border p-8">
                  <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                    Přímý kontakt
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="block font-display font-bold text-cream text-xl hover:text-red transition-colors"
                    >
                      {site.phone}
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="block text-muted hover:text-cream transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-graphite border border-border p-8">
                <ContactForm title="Kontaktujte nás" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
