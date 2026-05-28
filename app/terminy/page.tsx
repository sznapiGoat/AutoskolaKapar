import type { Metadata } from "next"
import { site } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { CalendarDays, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Termíny zahájení",
  description: "Nejbližší termíny zahájení kurzů autoškoly Lukáš Kápar v Trhových Svinech.",
}

export default function TerminyPage() {
  return (
    <>
      <PageHeader
        label="Termíny"
        title="Termíny zahájení kurzů"
        desc="Nejbližší termíny jsou uvedeny níže. Pro aktuální informace nás neváhejte kontaktovat."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Next course highlight */}
              <div className="bg-red p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <CalendarDays size={32} className="text-white/70 mb-6" />
                  <p className="font-display font-bold text-white/70 text-sm tracking-widest uppercase mb-3">
                    Nejbližší kurz
                  </p>
                  <p className="font-display font-black text-white leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 80px)" }}>
                    {site.nextCourse}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                    Zajistěte si místo v předstihu. Po přihlášení vás budeme kontaktovat s podrobnými informacemi o průběhu kurzu.
                  </p>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-surface border border-border p-12 flex flex-col justify-center">
                <h3 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-8">
                  Přihlásit se
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-red" />
                    </div>
                    <div>
                      <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">Telefon</p>
                      <a href={`tel:${site.phoneRaw}`} className="font-display font-bold text-cream text-xl hover:text-red transition-colors">
                        {site.phone}
                      </a>
                      <p className="text-muted text-sm mt-0.5">{site.contactPerson}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-red" />
                    </div>
                    <div>
                      <p className="text-muted text-xs tracking-widest uppercase font-display font-bold mb-1">E-mail</p>
                      <a href={`mailto:${site.email}`} className="font-display font-bold text-cream text-xl hover:text-red transition-colors">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <div className="bg-surface border border-border p-8">
              <h3 className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-4">
                Průběh přihlášení
              </h3>
              <ol className="space-y-3">
                {[
                  "Kontaktujte nás telefonicky nebo e-mailem",
                  "Domluvíme vhodný termín a typ kurzu (Flexi / Standard / Premium)",
                  "Zaplatíte zálohu a obdržíte pokyny k zahájení",
                  "Výcvik začíná v dohodnutý den",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-display font-black text-red text-lg leading-none w-6 shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-muted text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
