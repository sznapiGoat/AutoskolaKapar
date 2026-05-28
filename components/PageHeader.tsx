import Link from "next/link"
import { FadeIn } from "@/components/FadeIn"
import { ChevronRight } from "lucide-react"

interface Crumb { label: string; href: string }

interface PageHeaderProps {
  label: string
  title: string
  desc?: string
  breadcrumb?: Crumb
}

export function PageHeader({ label, title, desc, breadcrumb }: PageHeaderProps) {
  return (
    <section className="pt-28 pb-14 bg-graphite border-b border-border relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#111116 1px, transparent 1px), linear-gradient(90deg, #111116 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          {breadcrumb && (
            <div className="flex items-center gap-1.5 text-xs text-muted mb-4 font-display font-bold tracking-wide uppercase">
              <Link href={breadcrumb.href} className="hover:text-cream transition-colors">
                {breadcrumb.label}
              </Link>
              <ChevronRight size={12} />
              <span className="text-cream">{label}</span>
            </div>
          )}
          <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-3">
            {breadcrumb ? breadcrumb.label : label}
          </p>
          <h1
            className="font-display font-black text-cream uppercase leading-tight mb-5"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            {title}
          </h1>
          {desc && (
            <p className="text-muted text-lg max-w-2xl leading-relaxed">{desc}</p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
