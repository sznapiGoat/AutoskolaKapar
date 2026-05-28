import type { Metadata } from "next"
import { categories, site } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Služby",
  description: "Přehled služeb autoškoly Lukáš Kápar — skupiny AM-A, vrácení řidičáku, kondiční jízdy, L17 a další.",
}

export default function SluzbyPage() {
  return (
    <>
      <PageHeader
        label="Služby"
        title="Co vše nabízíme"
        desc="Kromě standardního výcviku poskytujeme řadu navazujících služeb pro řidiče všech skupin."
      />

      {/* AM–A skupiny */}
      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">Motocyklové skupiny</p>
              <h2 className="font-display font-bold text-cream text-4xl uppercase leading-tight">AM · A1 · A2 · A skupiny</h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border" staggerDelay={0.07}>
            {categories.filter(c => ["AM","A1","A2","A"].includes(c.code)).map((cat) => (
              <div key={cat.code} className="bg-graphite p-8 group hover:bg-surface transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-black text-red text-5xl leading-none">{cat.code}</span>
                  <span className="font-display font-bold text-xs text-muted tracking-widest uppercase bg-surface group-hover:bg-graphite px-2.5 py-1 transition-colors">
                    {cat.age}
                  </span>
                </div>
                <p className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-2">{cat.name}</p>
                <p className="text-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3} className="mt-8">
            <div className="bg-surface border border-border p-8">
              <p className="text-muted text-sm leading-relaxed max-w-2xl">
                Kurzy motocyklových skupin probíhají v pravidelných skupinových termínech. Pokud již máte skupinu A1 nebo A2,
                nabízíme zvýhodněné rozšíření — podrobnosti v{" "}
                <Link href="/cenik" className="text-cream underline underline-offset-4 hover:text-red transition-colors">ceníku</Link>.
                Pro aktuální rozvrh skupin nás kontaktujte.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vrácení řidičáku */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">Doplňková služba</p>
              <h2 className="font-display font-bold text-cream text-4xl uppercase leading-tight">Vrácení řidičského průkazu</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="space-y-4">
                <p className="text-muted leading-relaxed">
                  Pokud vám byl odebrán řidičský průkaz z důvodu dosažení 12 bodů nebo uloženého zákazu řízení,
                  pomůžeme vám s opětovným získáním oprávnění k řízení.
                </p>
                <p className="text-muted leading-relaxed">
                  Po uplynutí doby zákazu je nutné úspěšně složit přezkoušení z odborné způsobilosti
                  (teoretická zkouška a zkouška z jízdy). Nabízíme přípravu na toto přezkoušení
                  a potřebný výcvik v rozsahu stanoveném zákonem.
                </p>
                <div className="bg-graphite border border-border p-6 mt-4">
                  <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-3">
                    Příprava zahrnuje
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Přípravu na teoretickou zkoušku",
                      "Praktický výcvik v potřebném rozsahu",
                      "Přezkoušení u příslušného obecního úřadu",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                        <span className="text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-graphite border border-red/20 p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="font-display font-bold text-muted text-xs tracking-widests uppercase mb-6">
                    Ceník přezkoušení
                  </p>
                  {[
                    { label: "Nová teorie", price: "5 000 Kč" },
                    { label: "Výcvik motocykl", price: "10 500 Kč" },
                    { label: "Výcvik B+E / T", price: "8 500 Kč" },
                    { label: "Výcvik skupina B / T", price: "17 900 Kč" },
                    { label: "Výcvik skupina C", price: "35 000 Kč" },
                    { label: "Výcvik skupina C+E", price: "25 000 Kč" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between py-2.5 border-b border-border last:border-0">
                      <span className="text-muted text-sm">{r.label}</span>
                      <span className="font-display font-bold text-cream text-sm">{r.price}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 mt-8 text-red font-display font-bold text-sm tracking-widest uppercase hover:underline group"
                >
                  Kontaktujte nás
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other services grid */}
      <section className="py-16 bg-graphite border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-muted text-xs font-display font-bold tracking-widest uppercase mb-8">Další služby</p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={0.07}>
            {[
              { label: "Kondiční jízdy", href: "/kondicni-jizdy", desc: "A2, A, B a B+E — oživení dovedností s instruktorem" },
              { label: "Program L17", href: "/l17", desc: "Doprovázené řízení od 17 let pod dohledem mentora" },
              { label: "Studijní materiály", href: "/studijni-materialy", desc: "Učebnice, online testy, aplikace MOJE AUTOŠKOLA" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface border border-border hover:border-red/40 p-8 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-cream text-xl uppercase tracking-wide group-hover:text-red transition-colors">
                    {s.label}
                  </h3>
                  <ArrowRight size={16} className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-muted text-sm">{s.desc}</p>
              </Link>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  )
}
