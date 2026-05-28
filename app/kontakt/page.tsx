import type { Metadata } from "next"
import { site } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { Phone, Mail, MapPin, CreditCard, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktní informace autoškoly Lukáš Kápar — adresa, telefon, e-mail.",
}

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        label="Kontakt"
        title="Kontaktní informace"
        desc="Máte dotazy nebo se chcete přihlásit? Kontaktujte nás."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: site.phone,
                    href: `tel:${site.phoneRaw}`,
                    sub: site.contactPerson,
                  },
                  {
                    icon: Mail,
                    label: "E-mail",
                    value: site.email,
                    href: `mailto:${site.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Adresa",
                    value: site.address,
                    sub: site.addressNote,
                  },
                  {
                    icon: CreditCard,
                    label: "Číslo účtu",
                    value: site.bankAccount,
                  },
                  {
                    icon: User,
                    label: "Kontaktní osoba",
                    value: site.contactPerson,
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="bg-surface border border-border p-8 flex items-start gap-5">
                      <div className="w-10 h-10 bg-red/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-red" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-display font-bold text-cream text-xl hover:text-red transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-display font-bold text-cream text-xl">{item.value}</p>
                        )}
                        {item.sub && (
                          <p className="text-muted text-sm mt-0.5">{item.sub}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-surface border border-border overflow-hidden">
                {/* Map embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.4!2d14.6338!3d48.8394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773b3e3b1e8e8e5%3A0x0!2sHusova%20548%2C%20374%2001%20Trhov%C3%A9%20Sviny!5e0!3m2!1scs!2scz!4v1"
                  width="100%"
                  height="360"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa autoškoly"
                />
                <div className="p-6 border-t border-border">
                  <p className="text-muted text-sm">
                    <span className="text-cream font-medium">{site.address}</span>
                    <br />
                    {site.addressNote}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-display font-bold text-red tracking-widest uppercase hover:underline"
                  >
                    Otevřít v Google Maps →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface-2 border border-border p-8 max-w-lg">
              <h3 className="font-display font-bold text-cream text-lg uppercase tracking-wide mb-3">
                Poznámka k DPH
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Provozovatel autoškoly není plátce DPH. Vydání registrace autoškoly bylo provedeno Obecním úřadem v Trhových Svinech.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
