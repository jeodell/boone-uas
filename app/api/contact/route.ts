import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

import EmailTemplate from '../../../components/EmailTemplate'

export async function POST(request: Request) {
  console.log('in POST /api/contact')
  console.log('request', request)

  const ReactDOMServer = (await import('react-dom/server')).default
  const data = await request.json()

  console.log('data', data)

  const { name, email, typeOfService, message } = data

  if (!name || !email || !typeOfService || !message) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 },
    )
  }

  const user = process.env.EMAIL
  const pass = process.env.PASS

  if (!user || !pass) {
    return NextResponse.json(
      { message: 'Missing email credentials' },
      { status: 500 },
    )
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  })

  const emailTemplate = ReactDOMServer.renderToStaticMarkup(
    EmailTemplate({ name, email, typeOfService, message }),
  )

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New message from ${name} - ${typeOfService}`,
    text: message,
    html: emailTemplate,
  }

  try {
    transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent' }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 },
    )
  }
}
