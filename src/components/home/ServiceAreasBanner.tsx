import Link from 'next/link'
import { SERVICE_AREAS } from '@/data/serviceAreas'

export default function ServiceAreasBanner() {
  return (
    <section className="section-padding bg-brand-deep text-white" aria-labelledby="areas-heading">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

          <div className="max-w-md lg:max-w-sm flex-shrink-0">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-copper mb-3">
              Where We Work
            </p>
            <h2
              id="areas-heading"
              className="font-display font-semibold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Notting Hill &amp;{' '}
              <em className="italic">West London</em>
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-7">
              Based in Notting Hill W11, we cover the surrounding areas of West London. Not sure if we cover you? Get in touch — we&apos;re usually able to help.
            </p>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase text-brand-copper hover:text-brand-copper-warm transition-colors"
            >
              See All Areas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-3 flex-1 lg:max-w-md">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="flex items-baseline gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-brand-copper flex-shrink-0 mt-1.5" aria-hidden="true" />
                <div>
                  <p className="text-white/70 text-sm font-medium leading-tight">{area.name}</p>
                  {area.postcode && (
                    <p className="text-white/25 text-xs">{area.postcode}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
