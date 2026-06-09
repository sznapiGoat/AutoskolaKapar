import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { categories, usps, site, stats } from "@/lib/data"
import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { Counter } from "@/components/Counter"
import Image from "next/image"
import { HeroSection } from "@/components/HeroSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export const metadata: Metadata = {
  title: "Autoškola Lukáš Kápar | Bezpečně s námi",
  description:
    "Autoškola v Trhových Svinech, výcvik kategorií AM, A1, A2, A, B, B+E, C, C+E, T. Srozumitelná výuka, transparentní ceny, individuální přístup.",
}

const services = [
  { label: "Kurzy", href: "/kurzy", desc: "B, motocykly, B+E, C, T, vyberte si kategorii" },
  { label: "Ceník", href: "/cenik", desc: "Flexi, Standard, Premium a zvýhodněné balíčky" },
  { label: "Termíny", href: "/terminy", desc: "Nejbližší kurz: " + site.nextCourse },
  { label: "Služby", href: "/sluzby", desc: "Kondiční jízdy, L17, vrácení řidičáku" },
  { label: "Studijní materiály", href: "/studijni-materialy", desc: "Učebnice, testy online a aplikace MOJE AUTOŠKOLA" },
  { label: "Kontakt", href: "/kontakt", desc: site.address },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Category ticker */}
      <div className="bg-red py-3 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) =>
            categories.map((cat) => (
              <span
                key={`${cat.code}-${i}`}
                className="font-display font-bold text-white text-sm tracking-widest uppercase px-8"
              >
                {cat.code}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-graphite p-10 flex flex-col items-center text-center"
              >
                <span className="font-display font-bold text-6xl text-cream leading-none mb-2">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="text-muted text-sm tracking-widest uppercase font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">
                Kategorie
              </p>
              <h2 className="font-display font-bold text-5xl text-cream uppercase leading-tight">
                Získejte řidičský<br />průkaz jakékoli skupiny
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border" staggerDelay={0.06}>
            {categories.map((cat) => (
              <div
                key={cat.code}
                className="bg-surface-2 p-8 group hover:bg-graphite transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display font-black text-5xl leading-none text-red">
                    {cat.code}
                  </span>
                  <span className="font-display font-bold text-xs tracking-widest text-muted uppercase bg-graphite group-hover:bg-surface px-2.5 py-1 transition-colors duration-300">
                    {cat.age}
                  </span>
                </div>
                <p className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-2">
                  {cat.name}
                </p>
                <p className="text-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3} className="mt-10">
            <Link
              href="/kurzy"
              className="inline-flex items-center gap-2 text-cream font-medium hover:text-red transition-colors duration-200 group"
            >
              Zobrazit detaily kurzů
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* USPs */}
      <section className="py-24 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">
                Proč my
              </p>
              <h2 className="font-display font-bold text-5xl text-cream uppercase leading-tight">
                Výcvik, na který<br />se můžete spolehnout
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border" staggerDelay={0.08}>
            {usps.map((usp, i) => (
              <div
                key={i}
                className="bg-graphite p-10 border-l-2 border-transparent hover:border-red transition-all duration-300 group"
              >
                <h3 className="font-display font-bold text-2xl text-cream uppercase tracking-wide mb-3 group-hover:text-red transition-colors duration-300">
                  {usp.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Instructor / About */}
      <section className="py-20 bg-surface border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Training photo */}
              <div className="lg:col-span-4 relative aspect-[3/4] max-w-xs overflow-hidden">
                <Image
                  src="/images/kapar4.jpg"
                  alt="Výcvik jízdy v autoškole Lukáš Kápar, Trhové Sviny"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 300px, 25vw"
                />
              </div>
              {/* Text */}
              <div className="lg:col-span-8">
                <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-4">O nás</p>
                <h2 className="font-display font-black text-cream uppercase leading-tight mb-6" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
                  Lukáš Kápar
                </h2>
                <p className="text-muted text-lg leading-relaxed max-w-xl mb-8">
                  Autoškolu provozuje Lukáš Kápar v Trhových Svinech již více než 10 let.
                  Za tu dobu prošlo výcvikem téměř 1 000 žáků. Srozumitelná výuka, klidné vedení
                  a individuální přístup ke každému žákovi jsou základem jeho přístupu.
                </p>
                <div className="grid grid-cols-3 gap-6 max-w-sm">
                  {[
                    { value: "10+", label: "let praxe" },
                    { value: "~1000", label: "absolventů" },
                    { value: "9", label: "kategorií" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-display font-black text-cream text-3xl leading-none mb-1">{s.value}</p>
                      <p className="text-muted text-xs uppercase tracking-widest font-display font-bold">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestimonialsSection />

      {/* Services grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">
                Vše na jednom místě
              </p>
              <h2 className="font-display font-bold text-5xl text-cream uppercase leading-tight">
                Co u nás najdete
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-surface-2 hover:bg-graphite border border-border hover:border-red/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 p-8 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl text-cream uppercase tracking-wide group-hover:text-red transition-colors duration-300">
                    {s.label}
                  </h3>
                  <ArrowRight size={16} className="text-muted group-hover:text-red group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-muted text-sm">{s.desc}</p>
              </Link>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="font-display font-bold text-white/70 text-sm tracking-widest uppercase mb-4">
                Nejbližší kurz
              </p>
              <h2 className="font-display font-black text-white text-6xl uppercase leading-tight mb-6">
                Zahájení {site.nextCourse}
              </h2>
              <p className="text-white/80 text-lg mb-10">
                Přihlaste se včas a zajistěte si místo v nejbližším termínu.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 bg-white text-red font-display font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors duration-200"
                >
                  <Mail size={16} />
                  Přihlásit se
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 border-2 border-white text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-red transition-all duration-200"
                >
                  <Phone size={16} />
                  {site.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
