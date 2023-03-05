import { ReactNode } from 'react'

import {
  Inter,
  Roboto_Mono,
  Poppins,
  Montserrat,
  Barlow,
  Josefin_Sans,
} from 'next/font/google'

import '../styles/globals.css'
import Navbar from '../components/layout/Navbar'

export const metadata = {
  title: 'Boone UAS',
  description: 'Boone UAS Drone Services',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  weight: '400',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  display: 'swap',
  weight: '400',
})

const barlow = Barlow({
  variable: '--font-barlow',
  display: 'swap',
  weight: '400',
})

const josefin_sans = Josefin_Sans({
  variable: '--font-josefin-sans',
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable} ${montserrat.variable} ${barlow.variable} ${josefin_sans.variable}`}
    >
      <body>
        <Navbar />
        <main className='mt-16 min-h-screen dark:bg-gray-800'>
          <div>{children}</div>
        </main>
      </body>
    </html>
  )
}
