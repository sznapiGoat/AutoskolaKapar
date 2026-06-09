import type { Metadata } from "next"
import { site } from "@/lib/data"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { Phone, Mail, MapPin, CreditCard } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt na autoškolu Lukáš Kápar, telefon, e-mail, adresa a kontaktní formulář.",
}

const contactItems = [
  { icon: Phone, label: "Telefon", value: site.phone, href: `tel:${site.phoneRaw}`, sub: site.contactPerson },
  { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Adresa", value: site.address, sub: site.addressNote },
  { icon: CreditCard, label: "Číslo účtu", value: site.bankAccount },
]

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        label="Kontakt"
        title="Spojte se s námi"
        desc="Máte dotazy nebo se chcete přihlásit? Použijte formulář nebo nás kontaktujte přímo."
      />

      <section className="py-20 bg-graphite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact details + map */}
            <FadeIn>
              <div className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="bg-surface border border-border p-6 flex items-start gap-4">
                      <div className="w-10 h-10 bg-red/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-red" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-muted text-xs tracking-widest uppercase mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="font-display font-bold text-cream text-lg hover:text-red transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-display font-bold text-cream text-lg">{item.value}</p>
                        )}
                        {item.sub && <p className="text-muted text-sm mt-0.5">{item.sub}</p>}
                      </div>
                    </div>
                  )
                })}

                {/* Map */}
                <div className="bg-surface border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.4!2d14.6338!3d48.8394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773b3e3b1e8e8e5%3A0x0!2sHusova%20548%2C%20374%2001%20Trhov%C3%A9%20Sviny!5e0!3m2!1scs!2scz!4v1"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa autoškoly"
                  />
                  <div className="px-6 py-4 border-t border-border flex items-center justify-between">
                    <p className="text-muted text-sm">{site.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display font-bold text-red tracking-widest uppercase hover:underline shrink-0 ml-4"
                    >
                      Otevřít v Maps →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.15}>
              <div className="bg-surface border border-border p-8">
                <ContactForm title="Napište nám" />
                <p className="mt-6 text-muted text-xs leading-relaxed border-t border-border pt-6">
                  Provozovatel není plátce DPH. Registrace vydána Obecním úřadem v Trhových Svinech.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
