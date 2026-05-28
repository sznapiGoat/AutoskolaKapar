import type { Metadata } from "next"
import { categories } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Kurzy",
  description: "Přehled všech kategorií řidičského průkazu — AM, A1, A2, A, B, B+E, C, C+E, T. Věkové požadavky a co každá kategorie zahrnuje.",
}

const motorcycleCategories = categories.filter((c) =>
  ["AM", "A1", "A2", "A"].includes(c.code)
)
const carCategories = categories.filter((c) =>
  ["B", "B+E", "C", "C+E", "T"].includes(c.code)
)

function CategoryGrid({ items }: { items: typeof categories }) {
  return (
    <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border" staggerDelay={0.07}>
      {items.map((cat) => (
        <div
          key={cat.code}
          className="bg-surface p-10 group hover:bg-surface-2 transition-colors duration-300"
        >
          <div className="flex items-start justify-between mb-8">
            <span className="font-display font-black text-red leading-none" style={{ fontSize: "72px" }}>
              {cat.code}
            </span>
            <div className="text-right">
              <span className="font-display font-bold text-xs tracking-widest text-muted uppercase block">
                Věk
              </span>
              <span className="font-display font-bold text-cream text-xl">{cat.age}</span>
            </div>
          </div>
          <h3 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-4">
            {cat.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed">{cat.desc}</p>
        </div>
      ))}
    </FadeInStagger>
  )
}

export default function KurzyPage() {
  return (
    <>
      <PageHeader
        label="Nabídka kurzů"
        title="Kategorie řidičského průkazu"
        desc="Provádíme výcvik a přípravu na zkoušky ve všech níže uvedených skupinách. Vyberte tu, která odpovídá vašim potřebám."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="font-display font-bold text-3xl text-cream uppercase tracking-wide mb-1">
              Motocykly
            </h2>
            <div className="w-12 h-0.5 bg-red" />
          </FadeIn>
          <CategoryGrid items={motorcycleCategories} />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="font-display font-bold text-3xl text-cream uppercase tracking-wide mb-1">
              Automobily a ostatní
            </h2>
            <div className="w-12 h-0.5 bg-red" />
          </FadeIn>
          <CategoryGrid items={carCategories} />
        </div>
      </section>

      <section className="py-16 bg-graphite border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface border border-border p-8 max-w-2xl">
              <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-3">
                Rozšíření a kombinace
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Pokud již máte řidičský průkaz skupiny A1 nebo A2, můžete využít zvýhodněné rozšíření na vyšší kategorii.
                Nabízíme také kombinované kurzy B+T, A+B a další — s výraznou slevou oproti samostatnému absolvování.
                Podrobnosti najdete v{" "}
                <a href="/cenik" className="text-cream underline underline-offset-4 hover:text-red transition-colors">
                  ceníku
                </a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
