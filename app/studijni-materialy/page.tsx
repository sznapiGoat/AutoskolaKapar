import type { Metadata } from "next"
import { studyMaterials } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { BookOpen, Monitor, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Studijní materiály",
  description: "Bezplatné studijní materiály pro studenty autoškoly, učebnice, online testy a mobilní aplikace.",
}

const icons = [BookOpen, Monitor, Smartphone]

export default function StudijniMaterialyPage() {
  return (
    <>
      <PageHeader
        label="Studijní materiály"
        title="Vše pro úspěšnou přípravu"
        desc="Ke každému kurzu získáte přístup ke studijním materiálům zdarma. Připravíte se na zkoušky efektivně a v pohodlí."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {studyMaterials.map((material, i) => {
              const Icon = icons[i]
              return (
                <div key={i} className="bg-surface border border-border p-10 group hover:border-red/40 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red/10 flex items-center justify-center mb-8 group-hover:bg-red/20 transition-colors duration-300">
                    <Icon size={22} className="text-red" />
                  </div>
                  <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                    {material.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{material.desc}</p>
                </div>
              )
            })}
          </FadeInStagger>
        </div>
      </section>

      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-graphite border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                  Platí pro všechny kategorie
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Studijní materiály jsou dostupné pro studenty všech vyučovaných kategorií,
                  AM, A1, A2, A, B, B+E, C, C+E i T. Obsah je pravidelně aktualizován
                  tak, aby odpovídal aktuálním zkušebním otázkám.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-graphite border border-border p-8">
                <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-6">
                  Studovna pro žáky
                </h3>
                <div className="space-y-4 text-sm text-muted leading-relaxed">
                  <p>
                    Přihlašovací údaje obdržíte e-mailem uvedeným v žádosti o přijetí k výuce a výcviku.
                  </p>
                  <p>
                    Přihlašování žáků autoškol a plánování jízd zajišťuje{" "}
                    <a
                      href="https://www.mojeautoskola.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream font-medium hover:text-red transition-colors underline underline-offset-4"
                    >
                      MOJE AUTOŠKOLA
                    </a>{" "}
                   , software pro autoškoly.
                  </p>
                  <a
                    href="https://www.mojeautoskola.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-bold text-red text-sm tracking-widest uppercase hover:underline mt-2"
                  >
                    MOJE AUTOŠKOLA →
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
