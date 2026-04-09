import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import HowItWorks from '@/components/home/HowItWorks'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import ServiceAreasBanner from '@/components/home/ServiceAreasBanner'
import HomeCTA from '@/components/home/HomeCTA'
import { SITE_CONFIG } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Reliable Handyman Notting Hill W11 | Handyman Arts',
  description:
    'Professional handyman services in Notting Hill W11 & West London. Painting, tiling, plumbing, CCTV, smart home & more. Free call-out & estimate. Call 079 00 33 66 43.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'Reliable Handyman Notting Hill W11 | Handyman Arts',
    description:
      'Professional handyman services in Notting Hill W11 & West London. Free call-out. Free estimate. Fully insured.',
    url: SITE_CONFIG.url,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <TestimonialsCarousel />
      <ServiceAreasBanner />
      <HomeCTA />
    </>
  )
}
