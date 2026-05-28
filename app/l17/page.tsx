import type { Metadata } from "next"
import { l17 } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { ShieldCheck, Users, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Program L17",
  description: "Program L17 — doprovázené řízení od 17 let pod dohledem zkušeného mentora. Vše co potřebujete vědět.",
}

export default function L17Page() {
  return (
    <>
      <PageHeader
        label="Program L17"
        title="Doprovázené řízení od 17 let"
        desc={l17.intro}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-red/10 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-red" />
                  </div>
                  <h2 className="font-display font-bold text-cream text-2xl uppercase tracking-wide">
                    Požadavky na mentora
                  </h2>
                </div>
                <ul className="space-y-4">
                  {l17.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                      <span className="font-display font-black text-red text-lg leading-none w-5 shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      <span className="text-muted text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-red/10 flex items-center justify-center">
                    <Users size={20} className="text-red" />
                  </div>
                  <h2 className="font-display font-bold text-cream text-2xl uppercase tracking-wide">
                    Pravidla programu
                  </h2>
                </div>
                <ul className="space-y-4">
                  {l17.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span className="text-muted text-sm leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface-2 border border-red/20 p-8 max-w-2xl flex items-start gap-4">
              <AlertCircle size={20} className="text-red shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-2">
                  Odpovědnost mentora
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Mentor nesedí jako pasivní spolujezdec — aktivně dohlíží na jízdu a radí. Nese spoluodpovědnost
                  za případné nehody způsobené nedostatečnou pozorností.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
