import type { Metadata } from "next"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { site } from "@/lib/data"
import { AlertCircle, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Zdravotní průkazy",
  description: "Informace o zdravotní způsobilosti k řízení motorových vozidel, co potřebujete před zápisem do autoškoly.",
}

const steps = [
  "Navštivte svého praktického lékaře (obvodního doktora)",
  "Požádejte o vystavení Lékařského posudku o zdravotní způsobilosti k řízení motorových vozidel",
  "Lékař provede základní vyšetření a posudek vystaví, obvykle při stejné návštěvě",
  "Posudek přinesete při zápisu do autoškoly",
]

const notes = [
  "Posudek je nutný pro všechny kategorie řidičského průkazu",
  "Při určitých zdravotních stavech může být vyžadováno odborné vyšetření (oční, kardiologické apod.)",
  "Kategorie C a C+E mají přísnější zdravotní požadavky, opakované přezkoušení každé 5 let",
  "Posudek je vydán na formuláři předepsaném vyhláškou, lékař ho má k dispozici",
]

export default function ZdravotniPrukazyPage() {
  return (
    <>
      <PageHeader
        label="Zdravotní průkazy"
        title="Zdravotní způsobilost k řízení"
        desc="Před zápisem do kurzu je nutné doložit lékařský posudek o zdravotní způsobilosti. Zajišťujete si jej sami u svého praktického lékaře."
        breadcrumb={{ label: "Služby", href: "/sluzby" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <FadeIn className="mb-8">
                <p className="text-red font-display font-bold text-sm tracking-widests uppercase mb-3">Postup</p>
                <h2 className="font-display font-bold text-cream text-3xl uppercase">Jak posudek získat</h2>
              </FadeIn>
              <FadeInStagger className="space-y-0" staggerDelay={0.07}>
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                    <div className="w-9 h-9 bg-red flex items-center justify-center shrink-0">
                      <span className="font-display font-black text-white text-sm">{i + 1}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pt-1.5">{step}</p>
                  </div>
                ))}
              </FadeInStagger>
            </div>

            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div className="bg-surface border border-border p-8">
                  <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-5">Důležité informace</p>
                  <ul className="space-y-4">
                    {notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={15} className="text-red shrink-0 mt-0.5" />
                        <span className="text-muted text-sm leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface border border-red/20 p-8 flex items-start gap-4">
                  <AlertCircle size={18} className="text-red shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-cream text-base uppercase tracking-wide mb-2">
                      Přineste posudek při zápisu
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      Bez platného lékařského posudku nelze zahájit výcvik. Zajistěte si jej před kontaktováním autoškoly.
                    </p>
                  </div>
                </div>

                <div className="bg-surface border border-border p-8 flex items-start gap-4">
                  <Phone size={18} className="text-red shrink-0 mt-1" />
                  <div>
                    <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-2">Dotazy</p>
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="font-display font-bold text-cream text-xl hover:text-red transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
