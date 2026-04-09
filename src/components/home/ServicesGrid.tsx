import Link from 'next/link'
import { SERVICES } from '@/data/services'
import ServiceCard from '@/components/services/ServiceCard'

const half = Math.ceil(SERVICES.length / 2)

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-site">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-copper mb-2">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="font-display font-semibold text-surface-dark leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              11 Services,{' '}
              <em className="italic">One Reliable Team</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 self-start sm:self-auto inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase text-brand-copper hover:text-brand-copper-dark transition-colors"
            aria-label="View all services"
          >
            All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Two-column editorial list */}
        <div className="grid md:grid-cols-2 md:gap-x-16">
          <div className="border-t border-surface-border-light">
            {SERVICES.slice(0, half).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="border-t border-surface-border-light mt-0">
            {SERVICES.slice(half).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i + half} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
