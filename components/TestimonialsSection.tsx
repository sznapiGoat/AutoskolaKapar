import { FadeIn, FadeInStagger } from "@/components/FadeIn"
import { Star } from "lucide-react"

// TODO: Replace placeholder reviews with real Google reviews from the client
const testimonials = [
  {
    text: "Profesionální přístup, výborný instruktor. Klidné vedení bez zbytečného stresu. Zkoušku jsem zvládla napoprvé.",
    name: "Jana K.",
    source: "Google",
  },
  {
    text: "Transparentní ceny, vše přesně jak bylo domluveno. Žádné skryté poplatky. Doporučuji každému.",
    name: "Tomáš M.",
    source: "Google",
  },
  {
    text: "Individuální přístup, přizpůsobili se mému tempu. Nevyvíjeli tlak na zbytečné jízdy navíc.",
    name: "Petra S.",
    source: "Google",
  },
  {
    text: "Skvělá příprava na zkoušky. Studijní materiály a online testy mi velmi pomohly. Výborná zkušenost.",
    name: "Martin V.",
    source: "Google",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-red text-red" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">Recenze</p>
            <h2 className="font-display font-bold text-cream text-5xl uppercase leading-tight">
              Co říkají<br />naši absolventi
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
          {testimonials.map((t, i) => (
            <div key={i} className="bg-graphite border border-border p-8 flex flex-col gap-6">
              <Stars />
              <p className="text-muted text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="font-display font-bold text-cream text-sm">{t.name}</span>
                <span className="text-muted text-xs">{t.source}</span>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
