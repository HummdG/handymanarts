import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/data/siteConfig'
import { SERVICES } from '@/data/services'
import { SERVICE_AREAS } from '@/data/serviceAreas'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.whatsapp, SITE_CONFIG.whatsappDefaultMessage)

  return (
    <footer className="bg-brand-deep text-white">

      {/* Top copper rule */}
      <div className="h-px bg-brand-copper/25" aria-hidden="true" />

      {/* Main footer grid */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5 group" aria-label="Handyman Arts — Home">
              <div className="relative h-10 w-36">
                <Image
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/m2WBv6L0aru9oZlb/handyman_logo-dOqyoLrL0QiRekeX.png"
                  alt="Handyman Arts logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="144px"
                />
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-copper flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-5">Areas Covered</h3>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.slice(0, 10).map((area) => (
                <li key={area.name} className="text-sm text-white/50">
                  {area.name}
                  {area.postcode && (
                    <span className="text-white/25 ml-1.5 text-xs">{area.postcode}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links + trust column */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/portfolio', label: 'Our Portfolio' },
                { href: '/pricing', label: 'Pricing & Rates' },
                { href: '/service-areas', label: 'Service Areas' },
                { href: '/reviews', label: 'Customer Reviews' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-white/8 space-y-2">
              <p className="text-[10px] text-white/20 tracking-widest uppercase">Guarantees</p>
              {['Fully insured', 'Free call-out & estimate', SITE_CONFIG.hours.display].map((item) => (
                <p key={item} className="text-xs text-white/35 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-copper flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/25">
          <p>© {year} Handyman Arts. All rights reserved.</p>
          <p>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} {SITE_CONFIG.address.postcode}</p>
        </div>
      </div>
    </footer>
  )
}
