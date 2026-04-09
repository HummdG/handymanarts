import type { Metadata } from 'next'
import Link from 'next/link'
import { PRICING } from '@/data/pricingTiers'
import { SITE_CONFIG } from '@/data/siteConfig'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Handyman Rates & Pricing Notting Hill W11',
  description:
    'Fair, transparent handyman rates in Notting Hill W11 & West London. Hourly rate from £80. Free call-out and free written estimate before any work begins.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pricing`,
  },
}

const pricingFaqs = [
  {
    question: 'Do you charge for the initial call-out?',
    answer: 'No — call-outs are completely free. We visit, assess the job and provide a written estimate at no charge and with no obligation.',
  },
  {
    question: 'Can I get a fixed price rather than an hourly rate?',
    answer: "For many jobs, especially once we've seen photos or visited, we can provide a fixed-price quote. This is often more suitable for larger or more complex work.",
  },
  {
    question: 'Are materials included in the price?',
    answer: 'Materials are charged separately at cost, and we always provide receipts. We keep you informed of material costs before purchasing anything.',
  },
  {
    question: 'Do you add VAT?',
    answer: 'No — all our prices are inclusive. There is no VAT added on top. What we quote is what you pay for labour.',
  },
  {
    question: 'How does payment work?',
    answer: 'We ask for a 50% deposit on booking confirmation, with the balance due on completion when you are satisfied with the work. We accept bank transfer and cash.',
  },
  {
    question: 'Is there a minimum charge?',
    answer: 'Yes — our minimum charge is one hour (£80). Most small jobs comfortably fit within this, and many customers use a single visit to work through a list of several small tasks.',
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '/pricing' },
      ])} />
      <JsonLd data={buildFAQSchema(pricingFaqs)} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            Pricing & Rates
          </span>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            Transparent, Fair Pricing — No Hidden Costs
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            We charge honest rates and always provide a written estimate before starting. Free call-out, free estimate, no obligation.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section-padding bg-surface-gray-light">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

            {/* Hourly */}
            <div className="bg-white rounded-card p-8 shadow-card text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-surface-gray mb-3">First Hour</p>
              <div className="text-5xl font-display font-bold text-surface-dark mb-1">
                {PRICING.currencySymbol}{PRICING.firstHour}
              </div>
              <p className="text-surface-gray text-sm mb-6">Per hour (minimum 1 hr)</p>
              <ul className="text-left space-y-2 text-sm text-surface-gray">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  All tools & standard fixings
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Tidy-up on completion
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  No VAT added
                </li>
              </ul>
            </div>

            {/* Additional hours */}
            <div className="bg-brand-copper rounded-card p-8 shadow-card-hover text-center text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">Additional Hours</p>
              <div className="text-5xl font-display font-bold text-white mb-1">
                {PRICING.currencySymbol}{PRICING.additionalHour}
              </div>
              <p className="text-white/60 text-sm mb-6">Per additional hour</p>
              <ul className="text-left space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  After first hour
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Same great service
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Ideal for job lists
                </li>
              </ul>
            </div>

            {/* Full day */}
            <div className="bg-white rounded-card p-8 shadow-card text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-surface-gray mb-3">Full Day</p>
              <div className="text-5xl font-display font-bold text-surface-dark mb-1">
                {PRICING.currencySymbol}{PRICING.fullDay}
              </div>
              <p className="text-surface-gray text-sm mb-6">{PRICING.fullDayHours} hours labour</p>
              <ul className="text-left space-y-2 text-sm text-surface-gray">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Best value for larger jobs
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Multiple rooms or tasks
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Fixed price, no surprises
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display font-bold text-display-sm text-surface-dark mb-5">
                Always Included
              </h2>
              <ul className="space-y-3">
                {PRICING.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-copper-light text-brand-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                    <span className="text-surface-dark text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-display-sm text-surface-dark mb-5">
                Notes
              </h2>
              <ul className="space-y-3">
                {PRICING.notes.map((note) => (
                  <li key={note} className="flex items-start gap-3 text-surface-gray text-sm">
                    <span className="text-surface-gray-border mt-1">—</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-gray-light">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-display text-surface-dark mb-8 text-center">
            Pricing Questions
          </h2>
          <div className="bg-white rounded-card px-6 shadow-card">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="py-5 border-b border-surface-gray-border last:border-0">
                <p className="font-semibold text-surface-dark mb-2">{faq.question}</p>
                <p className="text-surface-gray text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-display text-surface-dark mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-surface-gray text-lg mb-8 max-w-md mx-auto">
            Share details of your job and we&apos;ll get back to you with a clear, written quote — usually within a few hours.
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
              Send Job Details
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
