'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/service-areas', label: 'Areas Covered' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappDefaultMessage
  )

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-surface-dark hover:text-brand-copper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper rounded"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen && 'rotate-45 translate-y-[7.5px]')} />
          <span className={cn('block h-px bg-current transition-all duration-300', isOpen && 'opacity-0')} />
          <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen && '-rotate-45 -translate-y-[7.5px]')} />
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 shadow-2xl',
          'flex flex-col lg:hidden',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-surface-border-light">
          <span className="font-display font-semibold text-lg text-surface-dark tracking-tight">
            Handyman Arts
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-surface-stone hover:text-surface-dark transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="border-b border-surface-border-light">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-surface-border-light last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-6 py-4 text-sm font-medium text-surface-dark hover:text-brand-copper hover:bg-brand-parchment transition-colors"
                >
                  {link.label}
                  <svg className="w-4 h-4 text-surface-stone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 py-6 space-y-3">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-btn bg-brand-copper text-white text-[13px] font-semibold tracking-wide uppercase hover:bg-brand-copper-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-btn bg-[#25D366] text-white text-[13px] font-semibold tracking-wide uppercase hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  )
}
