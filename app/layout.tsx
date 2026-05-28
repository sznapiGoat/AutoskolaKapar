import type { Metadata } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Autoškola Lukáš Kápar | Bezpečně s námi",
    template: "%s | Autoškola Lukáš Kápar",
  },
  description:
    "Autoškola v Trhových Svinech — výcvik kategorií AM, A1, A2, A, B, B+E, C, C+E, T. Srozumitelná výuka, transparentní ceny, individuální přístup.",
  keywords: ["autoškola", "Trhové Sviny", "řidičský průkaz", "výcvik", "motocykl", "kategorie B"],
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "Autoškola Lukáš Kápar",
  description:
    "Autoškola v Trhových Svinech — výcvik kategorií AM, A1, A2, A, B, B+E, C, C+E, T. Srozumitelná výuka, transparentní ceny, individuální přístup.",
  slogan: "Bezpečně s námi",
  telephone: "+420721574907",
  email: "info@autoskolakapar.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Husova 548",
    addressLocality: "Trhové Sviny",
    postalCode: "37401",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8394,
    longitude: 14.6338,
  },
  areaServed: {
    "@type": "City",
    name: "Trhové Sviny",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kurzy řidičského průkazu",
    itemListElement: ["AM", "A1", "A2", "A", "B", "B+E", "C", "C+E", "T"].map((cat) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: `Řidičský průkaz skupiny ${cat}`,
      },
    })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="cs"
      className={`${barlow.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-graphite text-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
