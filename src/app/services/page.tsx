import type { Metadata } from 'next'
import { SERVICES } from '@/data/services'
import ServiceCard from '@/components/services/ServiceCard'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/jsonld'
import { SITE_CONFIG } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Handyman Services Notting Hill W11',
  description:
    'Explore all 11 handyman services offered by Handyman Arts in Notting Hill W11 & West London. Painting, tiling, plumbing, CCTV, smart home & more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
      ])} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            What We Do
          </span>
          <h1 className="font-display font-bold text-white text-balance mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            Professional Handyman Services in Notting Hill
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            From quick repairs to full installations — 11 services delivered by one trusted, local team.
            Free call-out and free estimate on every job.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 md:gap-x-16">
            <div className="border-t border-surface-border-light">
              {SERVICES.slice(0, Math.ceil(SERVICES.length / 2)).map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
            <div className="border-t border-surface-border-light">
              {SERVICES.slice(Math.ceil(SERVICES.length / 2)).map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i + Math.ceil(SERVICES.length / 2)} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
