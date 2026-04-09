import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/data/services'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl, buildServiceWhatsAppMessage } from '@/lib/utils'
import FAQAccordion from '@/components/shared/FAQAccordion'
import JsonLd from '@/components/shared/JsonLd'
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/jsonld'

interface ServicePageTemplateProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    buildServiceWhatsAppMessage(service.name)
  )

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFAQSchema(service.faq)} />
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: service.name, href: `/services/${service.slug}` },
      ])} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src={service.heroImage}
          alt={`${service.name} in Notting Hill W11 by Handyman Arts`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/60 to-transparent" />
        <div className="relative z-10 container-site py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true"><span>/</span></li>
              <li className="text-white/80" aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper">
            Notting Hill W11 & West London
          </span>
          <h1 className="font-display font-bold text-white text-balance mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1' }}>
            {service.name} in Notting Hill
          </h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Content column */}
          <div className="lg:col-span-2 space-y-12">

            {/* What We Offer */}
            <section>
              <h2 className="font-display font-bold text-display-sm text-surface-dark mb-6">
                What We Offer
              </h2>
              <ul className="space-y-3" role="list">
                {service.whatWeOffer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-copper-light text-brand-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-surface-dark leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Who It's For */}
            <section>
              <h2 className="font-display font-bold text-display-sm text-surface-dark mb-6">
                Who It&apos;s For
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whoItsFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-card bg-surface-gray-light border border-surface-gray-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-copper-light text-brand-copper flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <span className="text-surface-dark text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="font-display font-bold text-display-sm text-surface-dark mb-6">
                Why Choose Handyman Arts
              </h2>
              <div className="space-y-4">
                {service.whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-surface-dark leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {service.faq.length > 0 && (
              <section>
                <h2 className="font-display font-bold text-display-sm text-surface-dark mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="bg-white border border-surface-gray-border rounded-card px-6">
                  <FAQAccordion items={service.faq} />
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">

              {/* Contact card */}
              <div className="bg-brand-deep text-white rounded-card p-6">
                <h3 className="font-display font-bold text-xl mb-1">Get a Free Quote</h3>
                <p className="text-white/60 text-sm mb-6">
                  Free call-out, free estimate. No obligation.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${SITE_CONFIG.phoneTel}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-btn bg-white text-surface-dark font-bold hover:bg-white/90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-btn bg-[#25D366] text-white font-bold hover:bg-[#1ebe5d] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-btn border-2 border-white/20 text-white/80 font-semibold hover:bg-white/10 transition-colors text-sm"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="bg-brand-gold-light border border-brand-gold/20 rounded-card p-5">
                <p className="font-semibold text-surface-dark text-sm mb-3">Our Guarantee</p>
                <ul className="space-y-2">
                  {[
                    'Free call-out, no obligation',
                    'Written estimate before work starts',
                    'Fully insured & professional',
                    'Clean, tidy work guaranteed',
                    'Pay only when satisfied',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-surface-dark">
                      <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
