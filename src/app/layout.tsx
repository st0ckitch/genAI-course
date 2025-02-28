import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LLM მოდელების საფუძვლები',
  description: 'მოდული 1: LLM მოდელების საფუძვლები - თანამედროვე პრეზენტაცია',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
