import Link from "next/link"
import { navLinks, site } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red flex items-center justify-center">
                <span className="font-display font-bold text-sm text-white tracking-wider">AK</span>
              </div>
              <span className="font-display font-bold text-cream text-sm tracking-widest uppercase">
                Autoškola Kápar
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {site.slogan} — srozumitelná výuka, klidné vedení a transparentní přístup k výcviku řidičů.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-cream text-xs tracking-widest uppercase mb-4">
              Navigace
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-cream text-xs tracking-widest uppercase mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="hover:text-cream transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cream transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.address}
                <br />
                <span className="text-muted/70">{site.addressNote}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Autoškola Lukáš Kápar. Plátce DPH: ne.</p>
          <p>Číslo účtu: {site.bankAccount}</p>
        </div>
      </div>
    </footer>
  )
}
