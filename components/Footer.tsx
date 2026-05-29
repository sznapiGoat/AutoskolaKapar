import Link from "next/link"
import { navLinks, site } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="block mb-5">
              <span className="font-display font-black text-dark-text text-2xl uppercase leading-none tracking-wide">
                Autoškola<br />
                <span className="text-red">Kápar</span>
              </span>
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed max-w-xs">
              {site.slogan} — srozumitelná výuka, klidné vedení a transparentní přístup k výcviku řidičů.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-dark-text text-xs tracking-widest uppercase mb-4">
              Navigace
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-muted text-sm hover:text-dark-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-dark-text text-xs tracking-widest uppercase mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-dark-muted">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="hover:text-dark-text transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-dark-text transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {site.address}
                <br />
                <span className="text-dark-muted/70">{site.addressNote}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-dark-muted">
          <p>© {new Date().getFullYear()} Autoškola Lukáš Kápar. Plátce DPH: ne. · Číslo účtu: {site.bankAccount}</p>
          <div className="flex items-center gap-4">
            <Link href="/podminky" className="hover:text-dark-text transition-colors">Podmínky</Link>
            <Link href="/ochrana-osobnich-udaju" className="hover:text-dark-text transition-colors">Ochrana osobních údajů</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
