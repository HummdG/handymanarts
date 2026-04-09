import type { Metadata } from 'next'
import { Cormorant_Garamond, Figtree } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppBubble from '@/components/layout/WhatsAppBubble'
import { GTMHead, GTMBody } from '@/components/analytics/GTMScript'
import JsonLd from '@/components/shared/JsonLd'
import { buildLocalBusinessSchema, buildWebsiteSchema } from '@/lib/jsonld'
import { SITE_CONFIG } from '@/data/siteConfig'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Handyman Arts Notting Hill',
    default: 'Reliable Handyman Notting Hill W11 | Handyman Arts',
  },
  description:
    'Professional handyman services in Notting Hill W11 & West London. Painting, tiling, plumbing, CCTV, smart home & more. Free call-out & estimate. Call 079 00 33 66 43.',
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    'handyman notting hill',
    'handyman w11',
    'handyman west london',
    'repairs notting hill',
    'painting decorating notting hill',
    'plumber notting hill',
    'tiling notting hill',
  ],
  openGraph: {
    locale: 'en_GB',
    type: 'website',
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Handyman Arts — Reliable Handyman in Notting Hill W11',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${figtree.variable}`}>
      <head>
        <GTMHead />
        <JsonLd data={buildWebsiteSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-surface-dark bg-white antialiased">
        <GTMBody />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  )
}
