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
      <head>
        {/* Force reload of styles with key timestamp */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* Add this to ensure styles are loaded */}
        <style dangerouslySetInnerHTML={{ 
          __html: `
            body { 
              color: #FCFCFC !important; 
              background: #0F0F0F !important;
              visibility: visible !important;
              opacity: 1 !important;
              font-family: 'Inter', sans-serif;
            }
          ` 
        }} />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* Add a wrapper to ensure visibility */}
        <div className="presentation-wrapper" style={{ visibility: 'visible', opacity: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
