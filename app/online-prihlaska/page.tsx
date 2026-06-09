import type { Metadata } from "next"
import { site } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { ContactForm } from "@/components/ContactForm"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Online přihláška",
  description: "Přihlaste se do kurzu autoškoly Lukáš Kápar online přes MOJE AUTOŠKOLA nebo nám napište.",
}

export default function OnlinePrihlaskaPage() {
  return (
    <>
      <PageHeader
        label="Online přihláška"
        title="Přihlaste se do kurzu"
        desc="Registrace do kurzů probíhá přes systém MOJE AUTOŠKOLA. Máte dotazy? Napište nám přímo."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* MOJE AUTOŠKOLA */}
            <FadeIn>
              <div className="space-y-6">
                <div className="bg-red p-10 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
                  <div className="relative z-10">
                    <p className="font-display font-bold text-white/70 text-xs tracking-widest uppercase mb-4">
                      Přihlašovací systém
                    </p>
                    <h2 className="font-display font-black text-white text-4xl uppercase leading-tight mb-4">
                      MOJE AUTOŠKOLA
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm">
                      Přihlašování žáků autoškol a plánování jízd zajišťuje software MOJE AUTOŠKOLA.
                      Přihlašovací údaje obdržíte e-mailem po přijetí žádosti.
                    </p>
                    <a
                      href="https://www.mojeautoskola.cz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-red font-display font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors"
                    >
                      <ExternalLink size={15} />
                      Přejít na přihlášení
                    </a>
                  </div>
                </div>

                <div className="bg-surface border border-border p-8">
                  <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">
                    Jak to funguje
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "Kontaktujte nás, telefonicky, e-mailem nebo formulářem",
                      "Domluvíme termín a typ kurzu (Flexi / Standard / Premium)",
                      "Po zaplacení zálohy obdržíte e-mailem přihlašovací údaje do MOJE AUTOŠKOLA",
                      "Přes MOJE AUTOŠKOLA sledujete průběh výcviku a plánujete jízdy",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-display font-black text-red text-lg w-5 shrink-0">{i + 1}.</span>
                        <span className="text-muted text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-surface border border-border p-8">
                  <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-3">Přímý kontakt</p>
                  <a href={`tel:${site.phoneRaw}`} className="block font-display font-bold text-cream text-xl hover:text-red transition-colors mb-1">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="block text-muted hover:text-cream transition-colors text-sm">
                    {site.email}
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact form */}
            <FadeIn delay={0.15}>
              <div className="bg-surface border border-border p-8">
                <ContactForm title="Napište nám" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
