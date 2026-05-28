"use server"

export type FormState = {
  success: boolean
  error?: string
} | null

export async function submitContact(prev: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: "Vyplňte prosím všechna pole." }
  }

  if (!email.includes("@") || !email.includes(".")) {
    return { success: false, error: "Zadejte platnou e-mailovou adresu." }
  }

  // TODO: add email provider — e.g. Resend (https://resend.com):
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: "web@autoskolakapar.cz",
  //   to: "info@autoskolakapar.cz",
  //   subject: `Zpráva od ${name}`,
  //   html: `<p><b>Jméno:</b> ${name}</p><p><b>E-mail:</b> ${email}</p><p><b>Zpráva:</b> ${message}</p>`,
  // })

  return { success: true }
}
