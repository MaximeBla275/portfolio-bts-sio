import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  if (!name || !email || !message) {
    return { error: 'Missing fields' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'maxime.blanco275@gmail.com',
    reply_to: email,
    subject: `Nouveau message de ${name}`,
    html: `
      <h2>Nouveau message</h2>
      <p><b>Nom:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br>${message}</p>
    `
  })

  return { success: true }
})
