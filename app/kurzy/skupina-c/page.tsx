import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Skupina C / C+E — Nákladní vozidla",
  description: "Kurz řidičského průkazu C a C+E v Trhových Svinech. Skupina C od 36 000 Kč, rozšíření C+E od 28 000 Kč.",
}

export default function SkupinaCPage() {
  return (
    <>
      <PageHeader
        label="Skupina C / C+E"
        title="Nákladní vozidla"
        desc="Těžká nákladní vozidla nad 3 500 kg a jízdní soupravy. Věk od 21 let."
        breadcrumb={{ label: "Kurzy", href: "/kurzy" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.1}>
            {[
              {
                code: "C",
                name: "Nákladní automobil",
                desc: "Motorová vozidla s maximální přípustnou hmotností převyšující 3 500 kg.",
                age: "21+",
                price: 36000,
                notes: ["Podmínka: platný průkaz skupiny B"],
              },
              {
                code: "C+E",
                name: "Nákladní souprava",
                desc: "Jízdní souprava složená z vozidla skupiny C a přípojného vozidla.",
                age: "21+",
                price: 28000,
                notes: ["Podmínka: platný průkaz skupiny C", "Rozšíření ze skupiny C"],
              },
            ].map((cat) => (
              <div key={cat.code} className="bg-surface border border-border p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display font-black text-red leading-none" style={{ fontSize: "72px" }}>{cat.code}</span>
                  <span className="font-display font-bold text-muted text-sm uppercase tracking-widest">věk {cat.age}</span>
                </div>
                <p className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-3">{cat.name}</p>
                <p className="text-muted text-sm leading-relaxed mb-8">{cat.desc}</p>
                <div className="border-t border-border pt-6 flex items-end justify-between">
                  <div>
                    {cat.notes.map((n) => (
                      <p key={n} className="text-muted text-xs">{n}</p>
                    ))}
                  </div>
                  <p className="font-display font-black text-red text-3xl">{cat.price.toLocaleString("cs-CZ")} Kč</p>
                </div>
              </div>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2} className="mt-8">
            <div className="bg-surface border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-muted text-sm max-w-xl">
                Pro podrobnosti o průběhu kurzu a termínech nás kontaktujte. Přezkoušení po 3 neúspěšných zkouškách: skupina C 35 000 Kč, skupina C+E 25 000 Kč.
              </p>
              <Link href="/kontakt" className="shrink-0 inline-flex items-center gap-2 font-display font-bold text-red text-sm tracking-widests uppercase hover:underline">
                Kontaktovat nás <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
