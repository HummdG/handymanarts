import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function HomeCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi Handyman Arts, I'd like to get a free estimate. Please let me know your availability."
  )

  return (
    <section
      className="relative overflow-hidden bg-brand-charcoal section-padding"
      aria-labelledby="cta-heading"
    >
      {/* Copper accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-copper/30" aria-hidden="true" />

      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-copper mb-4">
            Get Started Today
          </p>
          <h2
            id="cta-heading"
            className="font-display font-semibold text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Ready to Get Your{' '}
            <em className="italic">Job Done?</em>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg">
            Free call-out. Free estimate. No obligation.
            Get in touch today and we&apos;ll sort everything quickly and professionally.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-copper text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-brand-copper-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/15 text-white/70 text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:border-white/30 hover:text-white transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
