import type { Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Zásady ochrany osobních údajů autoškoly Lukáš Kápar, GDPR, zpracování dat, práva subjektů.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-border last:border-0">
      <h2 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">{title}</h2>
      <div className="text-muted text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function OchranaPage() {
  return (
    <>
      <PageHeader
        label="GDPR"
        title="Ochrana osobních údajů"
        desc="Zásady zpracování osobních údajů v souladu s nařízením GDPR (EU) 2016/679."
      />

      <section className="py-16 bg-graphite">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface border border-border p-10">

              <Section title="1. Správce osobních údajů">
                <p>
                  Správcem osobních údajů je <strong className="text-cream">{site.name}</strong>, se sídlem {site.address}.<br />
                  Kontaktní e-mail: <a href={`mailto:${site.email}`} className="text-cream hover:text-red transition-colors">{site.email}</a><br />
                  Telefon: <a href={`tel:${site.phoneRaw}`} className="text-cream hover:text-red transition-colors">{site.phone}</a>
                </p>
              </Section>

              <Section title="2. Jaké osobní údaje zpracováváme">
                <p>V rámci provozu webových stránek a poskytování služeb zpracováváme následující osobní údaje:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Jméno a příjmení, při zápisu do kurzu a prostřednictvím kontaktního formuláře",
                    "E-mailová adresa, pro komunikaci a zasílání informací o kurzu",
                    "Telefonní číslo, pro přímou komunikaci (je-li poskytnuto)",
                    "Zpráva / dotaz, obsah komunikace přes kontaktní formulář",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="3. Účel a právní základ zpracování">
                <p>Osobní údaje zpracováváme pro tyto účely:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Plnění smlouvy o výcviku, zpracování je nezbytné pro vedení kurzu (čl. 6 odst. 1 písm. b) GDPR)",
                    "Odpovídání na dotazy, oprávněný zájem správce na komunikaci s potenciálními žáky (čl. 6 odst. 1 písm. f) GDPR)",
                    "Plnění zákonných povinností, vedení záznamu o výcviku dle zákona č. 247/2000 Sb.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="4. Doba uchovávání údajů">
                <p>Osobní údaje uchováváme po dobu nezbytnou pro splnění účelu zpracování:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Údaje žáků z výcviku, po dobu 10 let od ukončení kurzu (zákonná povinnost)",
                    "Dotazy přes kontaktní formulář, po dobu 1 roku od přijetí dotazu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="5. Vaše práva">
                <p>V souladu s GDPR máte tato práva:</p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Právo na přístup k osobním údajům",
                    "Právo na opravu nepřesných údajů",
                    "Právo na výmaz údajů (\"právo být zapomenut\"), pokud není zpracování vyžadováno zákonem",
                    "Právo na omezení zpracování",
                    "Právo vznést námitku proti zpracování",
                    "Právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  Svá práva uplatněte na e-mailu{" "}
                  <a href={`mailto:${site.email}`} className="text-cream hover:text-red transition-colors underline underline-offset-4">
                    {site.email}
                  </a>.
                </p>
              </Section>

              <Section title="6. Cookies a analytika">
                <p>
                  Webové stránky mohou při použití analytických nástrojů ukládat soubory cookie. Při první návštěvě stránek máte možnost udělit nebo odmítnout souhlas se zpracováním cookies.
                </p>
                <p>
                  Základní funkční cookies nezbytné pro provoz webu jsou zpracovávány na základě oprávněného zájmu a nevyžadují souhlas.
                </p>
              </Section>

              <Section title="7. Příjemci osobních údajů">
                <p>
                  Osobní údaje nepředáváme třetím stranám za účelem marketingu. Jsou sdíleny pouze s poskytovateli technických služeb nezbytných pro provoz webu (hosting, e-mailový server) a orgány veřejné moci na základě zákonné povinnosti.
                </p>
              </Section>

              <p className="text-muted text-xs mt-8 pt-6 border-t border-border">
                Tyto zásady jsou platné od 1. 1. 2024 a mohou být aktualizovány. O podstatných změnách vás budeme informovat.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
