"use client"

import { useActionState } from "react"
import { submitContact, type FormState } from "@/app/actions"
import { CheckCircle, Send } from "lucide-react"

interface ContactFormProps {
  title?: string
}

const inputClass =
  "w-full bg-graphite border border-border focus:border-red outline-none px-4 py-3 text-sm text-cream placeholder:text-muted transition-colors duration-200"

export function ContactForm({ title = "Napište nám" }: ContactFormProps) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitContact, null)

  if (state?.success) {
    return (
      <div className="flex items-start gap-4 p-8 bg-surface border border-border">
        <CheckCircle size={22} className="text-red shrink-0 mt-0.5" />
        <div>
          <p className="font-display font-bold text-cream text-xl uppercase tracking-wide mb-1">
            Zpráva odeslána
          </p>
          <p className="text-muted text-sm">Budeme vás kontaktovat co nejdříve.</p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-4">
      <h3 className="font-display font-bold text-cream text-2xl uppercase tracking-wide mb-6">
        {title}
      </h3>

      <div>
        <label className="block font-display font-bold text-muted text-xs tracking-widest uppercase mb-2">
          Jméno a příjmení
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Jan Novák"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-display font-bold text-muted text-xs tracking-widest uppercase mb-2">
          E-mail
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="jan.novak@email.cz"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block font-display font-bold text-muted text-xs tracking-widest uppercase mb-2">
          Zpráva
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Váš dotaz nebo zájem o kurz..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.error && (
        <p className="text-red text-sm">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2.5 bg-red hover:bg-red-dark disabled:opacity-60 text-white font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-colors duration-200"
      >
        <Send size={15} />
        {pending ? "Odesílám…" : "Odeslat zprávu"}
      </button>
    </form>
  )
}
