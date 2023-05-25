import './globals.css'
import { Poppins, Ubuntu } from 'next/font/google'
import React from 'react'

const poppins300 = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300'],
})
const ubunto = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubunto',
  weight: '500',
})

export const metadata = {
  title: 'Sertão de Deus',
  description: 'Instituto Sertão de Deus é um projeto missionário',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins300.variable} ${ubunto.variable} bg-gray-50 font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
