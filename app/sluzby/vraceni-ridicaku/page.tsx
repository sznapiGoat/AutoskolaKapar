import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, AlertCircle } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Vrácení řidičáku",
  description: "Pomoc s vrácením řidičského průkazu po odebrání. Příprava na přezkoušení z odborné způsobilosti v autoškole Lukáš Kápar.",
}

const retraining = [
  { label: "Nová teorie", price: "5 000 Kč" },
  { label: "Výcvik motocykl", price: "10 500 Kč" },
  { label: "Výcvik B+E / T", price: "8 500 Kč" },
  { label: "Výcvik skupina B / T", price: "17 900 Kč" },
  { label: "Výcvik skupina C", price: "35 000 Kč" },
  { label: "Výcvik skupina C+E", price: "25 000 Kč" },
]

const steps = [
  "Uplynutí zákonné doby zákazu řízení",
  "Absolvování dopravně psychologického vyšetření (zajišťuje zákazník samostatně)",
  "Příprava na teoretickou zkoušku v autoškole",
  "Praktický výcvik v zákonem stanoveném rozsahu",
  "Přezkoušení u příslušného obecního úřadu",
  "Vydání nového řidičského průkazu",
]

export default function VraceniRedicakuPage() {
  return (
    <>
      <PageHeader
        label="Vrácení řidičáku"
        title="Vrácení řidičského průkazu"
        desc="Přišli jste o řidičský průkaz kvůli bodovému záznamu nebo zákazu řízení? Pomůžeme vám s přípravou na přezkoušení a opětovným získáním oprávnění k řízení."
        breadcrumb={{ label: "Služby", href: "/sluzby" }}
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Steps */}
            <div className="lg:col-span-7">
              <FadeIn className="mb-8">
                <p className="text-red font-display font-bold text-sm tracking-widests uppercase mb-3">Postup</p>
                <h2 className="font-display font-bold text-cream text-3xl uppercase">Jak probíhá vrácení průkazu</h2>
              </FadeIn>
              <FadeInStagger className="space-y-0" staggerDelay={0.07}>
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                    <div className="w-10 h-10 bg-red flex items-center justify-center shrink-0">
                      <span className="font-display font-black text-white text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed pt-2">{step}</p>
                  </div>
                ))}
              </FadeInStagger>

              <FadeIn delay={0.3} className="mt-8">
                <div className="bg-surface border border-red/20 p-6 flex items-start gap-4">
                  <AlertCircle size={18} className="text-red shrink-0 mt-0.5" />
                  <p className="text-muted text-sm leading-relaxed">
                    Podmínky vrácení průkazu se liší podle důvodu odebrání (body vs. soudní zákaz) a skupiny vozidel.
                    Kontaktujte nás pro posouzení vaší konkrétní situace.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Pricing */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.1}>
                <div className="bg-surface border border-border p-8 sticky top-24">
                  <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-6">Ceník přezkoušení</p>
                  <div className="space-y-0">
                    {retraining.map((r) => (
                      <div key={r.label} className="flex justify-between py-3 border-b border-border last:border-0">
                        <span className="text-muted text-sm">{r.label}</span>
                        <span className="font-display font-bold text-cream text-sm">{r.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted text-xs leading-relaxed mt-6">
                    Ceny jsou za přezkoušení po 3 neúspěšných zkouškách nebo po odebrání průkazu. Poplatky u obecního úřadu nejsou zahrnuty.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 mt-6 font-display font-bold text-red text-sm tracking-widests uppercase hover:underline group"
                  >
                    Kontaktovat nás <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
