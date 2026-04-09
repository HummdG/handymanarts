import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_AREAS } from '@/data/serviceAreas'
import { SITE_CONFIG } from '@/data/siteConfig'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Handyman Service Areas — Notting Hill W11 & West London',
  description:
    'Handyman Arts serves Notting Hill W11 and all surrounding areas of West London. See if we cover your area and get a free quote today.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/service-areas`,
  },
}

export default function ServiceAreasPage() {
  const primaryAreas = SERVICE_AREAS.filter((a) => a.primary)
  const otherAreas = SERVICE_AREAS.filter((a) => !a.primary)

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Service Areas', href: '/service-areas' },
      ])} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            Where We Work
          </span>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            Handyman Services Across West London
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Based in Notting Hill W11, we cover the surrounding neighbourhoods across West London. If you&apos;re unsure whether we cover your area, just give us a call — we&apos;re usually able to help.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-surface-gray-light">
        <div className="container-site">
          <div className="mb-10">
            <h2 className="font-display font-bold text-display text-surface-dark mb-2">Our Home Base</h2>
            <p className="text-surface-gray">Our primary area of operation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {primaryAreas.map((area) => (
              <div
                key={area.name}
                className="bg-brand-copper text-white rounded-card p-6 shadow-card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-xl">{area.name}</p>
                    <p className="text-white/60 text-sm">{area.postcode}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">Our home base — fastest response times</p>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <h2 className="font-display font-bold text-display text-surface-dark mb-2">Also Covered</h2>
            <p className="text-surface-gray">We regularly work across these West London areas</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {otherAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-card p-4 shadow-card text-center border border-surface-gray-border hover:border-brand-copper/30 hover:shadow-card-hover transition-all"
              >
                <svg className="w-5 h-5 text-brand-copper mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="font-semibold text-surface-dark text-sm">{area.name}</p>
                {area.postcode && (
                  <p className="text-surface-gray text-xs mt-0.5">{area.postcode}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-display text-surface-dark mb-4">
            Not Sure if We Cover You?
          </h2>
          <p className="text-surface-gray text-lg mb-8">
            Just give us a call or send a WhatsApp. We cover a wide area and are usually happy to travel to nearby neighbourhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-btn-lg bg-brand-copper text-white font-bold hover:bg-brand-copper-dark transition-colors"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-btn-lg border-2 border-brand-copper text-brand-copper font-bold hover:bg-brand-copper hover:text-white transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
