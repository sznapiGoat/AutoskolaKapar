import type { Metadata } from "next"
import { site, courseDates } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { Calendar } from "@/components/Calendar"
import { Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termíny zahájení",
  description: "Termíny zahájení kurzů autoškoly Lukáš Kápar v Trhových Svinech.",
}

export default function TerminyPage() {
  return (
    <>
      <PageHeader
        label="Termíny"
        title="Termíny zahájení kurzů"
        desc="Vyznačené dny v kalendáři jsou termíny zahájení výcviku. Pro přihlášení nás kontaktujte nebo využijte online přihlášku."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-7">
              <FadeIn>
                <Calendar initialYear={2026} initialMonth={5} />
              </FadeIn>
            </div>

            {/* Upcoming + contact */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-surface border border-border p-8">
                  <h3 className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-6">
                    Nadcházející termíny
                  </h3>
                  <ul className="space-y-3">
                    {courseDates.map((d) => {
                      const dateStr = `${String(d.day).padStart(2, "0")}.${String(d.month + 1).padStart(2, "0")}.${d.year}`
                      return (
                        <li key={dateStr} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                          <div className="w-10 h-10 bg-red flex flex-col items-center justify-center shrink-0">
                            <span className="font-display font-black text-white text-sm leading-none">{d.day}</span>
                          </div>
                          <div>
                            <p className="font-display font-bold text-cream text-lg leading-none">{dateStr}</p>
                            <p className="text-muted text-xs mt-0.5">{d.label}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <p className="text-muted text-xs mt-4 leading-relaxed">
                    Termíny jsou průběžně aktualizovány. Pro nejnovější informace nás kontaktujte.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-red p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <div className="relative z-10">
                    <p className="font-display font-bold text-white/70 text-xs tracking-widest uppercase mb-4">
                      Přihlásit se
                    </p>
                    <div className="space-y-3 mb-6">
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="flex items-center gap-2 text-white font-display font-bold text-lg hover:text-white/80 transition-colors"
                      >
                        <Phone size={16} />
                        {site.phone}
                      </a>
                      <a
                        href={`mailto:${site.email}`}
                        className="flex items-center gap-2 text-white font-display font-bold hover:text-white/80 transition-colors"
                      >
                        <Mail size={16} />
                        {site.email}
                      </a>
                    </div>
                    <Link
                      href="/online-prihlaska"
                      className="inline-flex items-center gap-2 bg-white text-red font-display font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-cream transition-colors"
                    >
                      <ExternalLink size={14} />
                      Online přihláška
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Steps */}
          <FadeIn delay={0.2} className="mt-10">
            <div className="bg-surface border border-border p-8">
              <h3 className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-6">
                Průběh přihlášení
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  { n: "01", text: "Kontaktujte nás telefonicky, e-mailem nebo přes online přihlášku" },
                  { n: "02", text: "Domluvíme vhodný termín a typ kurzu (Flexi / Standard / Premium)" },
                  { n: "03", text: "Zaplatíte zálohu a obdržíte přihlašovací údaje do MOJE AUTOŠKOLA" },
                  { n: "04", text: "Výcvik začíná v dohodnutý den" },
                ].map((step) => (
                  <div key={step.n} className="flex flex-col gap-3">
                    <span className="font-display font-black text-red text-3xl leading-none">{step.n}</span>
                    <p className="text-muted text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
