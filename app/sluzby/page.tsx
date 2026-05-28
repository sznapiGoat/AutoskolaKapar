import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Služby",
  description: "Doplňkové služby autoškoly Lukáš Kápar — kondiční jízdy, program L17, vrácení řidičáku.",
}

const services = [
  {
    label: "Kondiční jízdy",
    href: "/sluzby/kondicni-jizdy",
    desc: "Skupiny A2, A, B a B+E. Oživení nebo vylepšení řidičských dovedností — parkování, dálnice, město, automatická převodovka.",
    from: "od 600 Kč / 60 min",
  },
  {
    label: "Program L17",
    href: "/sluzby/l17",
    desc: "Doprovázené řízení od 17 let pod dohledem mentora. Platí od 1. ledna 2024 dle zákona 361/2000 Sb.",
    from: null,
  },
  {
    label: "Vrácení řidičáku",
    href: "/sluzby/vraceni-ridicaku",
    desc: "Pomoc s opětovným získáním průkazu po odebrání. Příprava na přezkoušení z odborné způsobilosti.",
    from: "od 5 000 Kč",
  },
  {
    label: "Zdravotní průkazy",
    href: "/sluzby/zdravotni-prukazy",
    desc: "Informace o lékařském posudku zdravotní způsobilosti — co potřebujete před zápisem do kurzu.",
    from: null,
  },
]

export default function SluzbyPage() {
  return (
    <>
      <PageHeader
        label="Služby"
        title="Doplňkové služby"
        desc="Kromě standardních kurzů nabízíme řadu navazujících služeb. Vyberte tu, která odpovídá vaší situaci."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface border border-border hover:border-red/50 p-10 flex flex-col gap-6 transition-all duration-300"
              >
                <div className="w-10 h-0.5 bg-red" />
                <div className="flex-1">
                  <h2 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-4 group-hover:text-red transition-colors duration-300">
                    {s.label}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  {s.from ? (
                    <span className="text-cream font-display font-bold text-sm">{s.from}</span>
                  ) : (
                    <span className="text-muted text-sm">více informací</span>
                  )}
                  <ArrowRight size={16} className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  )
}
