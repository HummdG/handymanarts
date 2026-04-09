import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi Handyman Arts, I'd like to get a free quote. Please let me know your availability."
  )

  return (
    <section className="grid lg:grid-cols-[58fr_42fr] overflow-hidden lg:min-h-screen" aria-label="Hero">

      {/* ── Left panel — dark editorial content ── */}
      <div className="flex flex-col justify-center bg-brand-deep px-8 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-32 relative">

        {/* Status dot + availability */}
        <div className="flex items-center gap-2.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-soft flex-shrink-0" aria-hidden="true" />
          <span className="text-white/40 text-xs tracking-[0.15em] uppercase font-medium">
            Available Today · Notting Hill W11
          </span>
        </div>

        {/* Copper rule */}
        <div className="w-10 h-px bg-brand-copper mb-7" aria-hidden="true" />

        {/* Headline */}
        <h1
          className="font-display font-semibold text-white leading-[0.95] mb-8 text-balance"
          style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)' }}
        >
          The Handyman{' '}
          <em className="italic text-brand-copper not-italic" style={{ fontStyle: 'italic' }}>
            Notting Hill
          </em>{' '}
          Trusts.
        </h1>

        {/* Subheading */}
        <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
          Professional repairs & installations across W11 & West London.
          Free call-out. Free estimate.
        </p>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-10" aria-label="Key guarantees">
          {['Fully insured', 'Same-day available', 'Trusted by 200+ locals'].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="w-px h-3 bg-white/15" aria-hidden="true" />}
              <span className="text-white/35 text-xs tracking-wide">{item}</span>
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-copper text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-brand-copper-dark transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/20 bg-white/5 text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-white/10 hover:border-white/30 transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        <Link
          href="/contact"
          className="self-start text-sm text-white/30 hover:text-brand-copper transition-colors underline underline-offset-4 decoration-white/15 hover:decoration-brand-copper"
        >
          Or send a message →
        </Link>

        {/* Bottom breadcrumb on desktop */}
        <div className="hidden lg:flex items-center gap-3 absolute bottom-8 left-16 xl:left-20">
          <div className="w-px h-6 bg-white/15" aria-hidden="true" />
          <span className="text-white/25 text-xs tracking-widest uppercase">11 services available</span>
        </div>
      </div>

      {/* ── Right/bottom panel — photo ── */}
      <div className="relative h-72 sm:h-96 lg:h-auto">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m2WBv6L0aru9oZlb/handyman-arts-ready-for-works-with-tools-ZWFlhZMV4opiUFxe.png"
          alt="Handyman Arts professional ready for work"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        {/* Left edge blend on desktop */}
        <div
          className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-deep to-transparent z-10 hidden lg:block"
          aria-hidden="true"
        />

        {/* Rating badge */}
        <div className="absolute bottom-6 left-6 z-20 hidden lg:block bg-white/95 backdrop-blur-sm rounded-card px-4 py-3 shadow-elevated">
          <div className="flex items-center gap-1 mb-1" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ))}
          </div>
          <p className="text-surface-dark text-xs font-semibold leading-tight">5.0 · Trusted by 200+ locals</p>
        </div>
      </div>
    </section>
  )
}
