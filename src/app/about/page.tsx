import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/jsonld'
import { SITE_CONFIG } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'About Handyman Arts — Trusted Local Handyman in Notting Hill W11',
  description:
    'Meet Handyman Arts, your trusted local handyman in Notting Hill W11 & West London. Professional, reliable and fully insured home repair and installation services.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
}

const values = [
  {
    title: 'Professional Standards',
    description:
      'Every job is completed to a high standard. We use quality materials and take the time to do things properly — never cutting corners.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Respect for Your Home',
    description:
      'We arrive on time, keep our work area tidy and leave your property exactly as we found it — clean and undisturbed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description:
      'You receive a clear written estimate before any work begins. No hidden charges, no surprises on the invoice.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    description:
      'We carry full public liability insurance, so you can have complete peace of mind when we work in your property.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
      ])} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            About Us
          </span>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            Your Trusted Local Handyman in Notting Hill
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Handyman Arts is a professional handyman service based in Notting Hill W11. We serve homeowners, landlords, tenants and property managers across West London — delivering reliable, high-quality work on every job, large or small.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper">
                Our Story
              </span>
              <h2 className="font-display font-bold text-display text-surface-dark mb-6">
                Every Job Treated With Care & Precision
              </h2>
              <div className="space-y-4 text-surface-gray leading-relaxed">
                <p>
                  Handyman Arts was founded with a simple mission: to provide the kind of reliable, skilled handyman service that West London homeowners and landlords deserve.
                </p>
                <p>
                  We know how important your home is. Whether you need a single room painted, a bathroom retiled, a CCTV system installed or a long list of small repairs sorted in one visit — we approach every job with the same care and attention to detail.
                </p>
                <p>
                  We work across Notting Hill, Holland Park, Kensington, Shepherd&apos;s Bush and all surrounding areas of West London. Our clients include homeowners, professional landlords, letting agents and property management companies who rely on us to keep their properties in excellent condition.
                </p>
              </div>
            </div>
            <div className="relative rounded-card overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                alt="Handyman Arts craftsman at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-gray-light">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper">
              How We Work
            </span>
            <h2 className="font-display font-bold text-display text-surface-dark">
              Our Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-card p-6 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-brand-copper-light text-brand-copper flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-surface-dark text-lg mb-2">{value.title}</h3>
                <p className="text-surface-gray text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-display text-surface-dark mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-surface-gray text-lg mb-8 max-w-md mx-auto">
            Free call-out, free estimate. Get in touch today and let&apos;s get your job done.
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
