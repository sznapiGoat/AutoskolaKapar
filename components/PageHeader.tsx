import { FadeIn } from "@/components/FadeIn"

interface PageHeaderProps {
  label: string
  title: string
  desc?: string
}

export function PageHeader({ label, title, desc }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-graphite border-b border-border relative overflow-hidden">
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
          <p className="text-red font-display font-bold text-sm tracking-widest uppercase mb-4">
            {label}
          </p>
          <h1 className="font-display font-black text-cream uppercase leading-tight mb-6" style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
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
