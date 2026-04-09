import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description:
      'Call, WhatsApp or message us. Send photos of the job — the more detail, the more accurate your quote.',
  },
  {
    number: '02',
    title: 'Get a Clear Quote',
    description:
      'We provide a written estimate with no hidden costs. Free call-out if we need to visit first — no obligation.',
  },
  {
    number: '03',
    title: 'Job Done. Property Clean.',
    description:
      "We arrive on time, complete the work to a high standard, and leave your home as tidy as we found it.",
  },
]

export default function HowItWorks() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi, I'd like to send some photos and get a quote."
  )

  return (
    <section className="section-padding bg-brand-warm-white" aria-labelledby="how-it-works-heading">
      <div className="container-site">

        <div className="mb-14">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-copper mb-2">
            How It Works
          </p>
          <h2
            id="how-it-works-heading"
            className="font-display font-semibold text-surface-dark leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Simple. Straightforward.{' '}
            <em className="italic">No Surprises.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col relative overflow-hidden pt-2">
              {/* Atmospheric ghost number */}
              <span
                className="absolute top-0 right-0 font-display font-bold text-brand-copper leading-none select-none pointer-events-none"
                style={{ fontSize: 'clamp(6rem, 10vw, 9rem)', lineHeight: 0.9, opacity: 0.055, fontStyle: 'italic' }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              {/* Step indicator */}
              <span
                className="font-display italic text-brand-copper text-sm leading-none mb-6 select-none block"
                style={{ fontStyle: 'italic' }}
              >
                — {step.number}
              </span>
              <h3 className="font-display font-semibold text-surface-dark text-xl mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-surface-stone text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-surface-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-surface-stone text-sm max-w-md">
            Most enquiries are responded to within the hour. Send us photos for the fastest quote.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-deep text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-brand-charcoal transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            Send Photos &amp; Get a Quote
          </a>
        </div>

      </div>
    </section>
  )
}
