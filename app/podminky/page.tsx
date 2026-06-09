import type { Metadata } from "next"
import { FadeIn } from "@/components/FadeIn"
import { PageHeader } from "@/components/PageHeader"
import { site } from "@/lib/data"

export const metadata: Metadata = {
  title: "Podmínky",
  description: "Obchodní podmínky autoškoly Lukáš Kápar, přihlášení, platby, zrušení kurzu.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-border last:border-0">
      <h2 className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-4">{title}</h2>
      <div className="text-muted text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function PodminkyPage() {
  return (
    <>
      <PageHeader
        label="Podmínky"
        title="Obchodní podmínky"
        desc={`Platné podmínky pro výcvik v autoškole ${site.name}, ${site.address}.`}
      />

      <section className="py-16 bg-graphite">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="bg-surface border border-border p-10">

              <Section title="1. Přihlášení do kurzu">
                <p>Přihlášení do kurzu probíhá osobně nebo prostřednictvím kontaktního formuláře na webových stránkách autoškoly. Přihlášení je platné po úhradě zálohy dohodnuté při zápisu.</p>
                <p>Před zahájením výcviku je žák povinen doložit platný lékařský posudek o zdravotní způsobilosti k řízení motorových vozidel (§ 84 zákona č. 361/2000 Sb.).</p>
              </Section>

              <Section title="2. Platební podmínky">
                <p>Cena kurzu je splatná dle dohody při zápisu. Autoškola není plátce DPH, ceny jsou konečné.</p>
                <p>Platbu lze provést hotovostí v sídle autoškoly nebo převodem na účet č. {site.bankAccount}.</p>
                <p>V případě platby převodem je za datum úhrady považováno datum připsání platby na účet.</p>
              </Section>

              <Section title="3. Omlouvání a absence">
                <p>Žák je povinen omluvit svou nepřítomnost na plánované jízdě nebo výuce <strong className="text-cream">nejméně 24 hodin předem</strong>.</p>
                <p>Za neomluvené zrušení ve lhůtě kratší než 24 hodin nebo za nedostavení se bez omluvy je účtován poplatek <strong className="text-cream">500 Kč</strong>.</p>
                <p>Poplatek je splatný při nejbližší příležitosti a jeho neuhrazení může být důvodem k přerušení výcviku.</p>
              </Section>

              <Section title="4. Přestup z jiné autoškoly">
                <p>Při přestupu žáka z jiné autoškoly je účtován administrativní poplatek <strong className="text-cream">3 000 Kč</strong> za zpracování přestupní dokumentace.</p>
                <p>Uznání dříve absolvovaného výcviku závisí na předložených dokladech a posouzení autoškoly.</p>
              </Section>

              <Section title="5. Ukončení kurzu a odstoupení">
                <p>Žák může od smlouvy odstoupit písemným oznámením. V takovém případě má autoškola nárok na úhradu již provedených výkonů (absolvované jízdy a hodiny teorie).</p>
                <p>Autoškola může ukončit výcvik žáka při opakovaném porušení podmínek, neomluvených absencích nebo jiném jednání neslučitelném s bezpečným průběhem výcviku.</p>
              </Section>

              <Section title="6. Průběh zkoušek">
                <p>Závěrečné zkoušky jsou organizovány u příslušného obecního úřadu. Poplatky za první zkušební termín jsou součástí ceny kurzu.</p>
                <p>Opakování zkoušky po neúspěšném pokusu je zpoplatněno dle platného ceníku (opakování teorie 100 Kč, opakování jízdy 400 Kč).</p>
                <p>Po třetím neúspěšném pokusu musí žák před dalším přezkoušením absolvovat nový výcvik dle ceníku.</p>
              </Section>

              <Section title="7. Ochrana osobních údajů">
                <p>
                  Zpracování osobních údajů probíhá v souladu s nařízením GDPR. Podrobnosti jsou uvedeny v{" "}
                  <a href="/ochrana-osobnich-udaju" className="text-cream underline underline-offset-4 hover:text-red transition-colors">
                    zásadách ochrany osobních údajů
                  </a>.
                </p>
              </Section>

              <Section title="8. Kontakt">
                <p>
                  {site.name}, {site.address} ({site.addressNote})<br />
                  Tel.: <a href={`tel:${site.phoneRaw}`} className="text-cream hover:text-red transition-colors">{site.phone}</a><br />
                  E-mail: <a href={`mailto:${site.email}`} className="text-cream hover:text-red transition-colors">{site.email}</a>
                </p>
              </Section>

              <p className="text-muted text-xs mt-8 pt-6 border-t border-border">
                Tyto podmínky jsou platné od 1. 1. 2024. Autoškola si vyhrazuje právo podmínky aktualizovat.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
