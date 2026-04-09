import type { Metadata } from 'next'
import Link from 'next/link'
import { TESTIMONIALS } from '@/data/testimonials'
import { SITE_CONFIG } from '@/data/siteConfig'
import StarRating from '@/components/shared/StarRating'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema, buildReviewSchema } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Customer Reviews — Handyman Arts Notting Hill',
  description:
    'Read genuine customer reviews for Handyman Arts in Notting Hill W11 & West London. Rated 5 stars by local homeowners and landlords.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/reviews`,
  },
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
      ])} />
      <JsonLd data={buildReviewSchema(TESTIMONIALS)} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            Customer Reviews
          </span>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            What Our Customers Say
          </h1>
          <div className="flex items-center gap-3">
            <StarRating rating={5} />
            <p className="text-white/70 text-lg">
              5.0 · {TESTIMONIALS.length} verified reviews
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-surface-gray-border">
        <div className="container-site">
          <div className="grid grid-cols-3 divide-x divide-surface-gray-border py-8 max-w-lg">
            {[
              { value: '5.0', label: 'Average rating' },
              { value: `${TESTIMONIALS.length}+`, label: 'Happy customers' },
              { value: '100%', label: 'Recommend us' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <p className="font-display font-bold text-3xl text-brand-copper">{stat.value}</p>
                <p className="text-surface-gray text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-padding bg-brand-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="bg-white rounded-card p-6 shadow-card flex flex-col gap-4"
              >
                <StarRating rating={t.rating} size="sm" />
                <blockquote className="text-surface-dark text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-surface-gray-border">
                  <div className="w-10 h-10 rounded-full bg-brand-copper-light text-brand-copper flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-surface-dark text-sm">{t.name}</p>
                    <p className="text-surface-gray text-xs">{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-display text-surface-dark mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-surface-gray text-lg mb-8 max-w-md mx-auto">
            Free call-out, free estimate. Let&apos;s get your job done properly.
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
