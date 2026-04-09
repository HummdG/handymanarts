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
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen && 'rotate-45 translate-y-[7.5px]')} />
          <span className={cn('block h-px bg-current transition-all duration-300', isOpen && 'opacity-0')} />
          <span className={cn('block h-px bg-current transition-all duration-300 origin-center', isOpen && '-rotate-45 -translate-y-[7.5px]')} />
        </div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-screen w-80 max-w-[88vw] z-50 shadow-2xl',
          'flex flex-col lg:hidden',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ backgroundColor: '#f7f4ef' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-surface-border-light">
          <span
            className="font-display font-semibold text-surface-dark tracking-tight leading-none"
            style={{ fontSize: '1.2rem' }}
          >
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
        <nav className="flex-1 overflow-y-auto py-2">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-surface-border-light/60 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-6 py-4 font-display font-medium text-surface-dark hover:text-brand-copper transition-colors"
                  style={{ fontSize: '1.0625rem' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom — dark contact strip */}
        <div className="bg-brand-deep px-6 py-7">
          <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-3 font-medium">
            Call Us
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="group flex items-baseline gap-2 mb-6"
            aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
          >
            <span
              className="font-display font-light text-white group-hover:text-brand-copper transition-colors tabular-nums"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
            >
              {SITE_CONFIG.phoneDisplay}
            </span>
          </a>
          <div className="flex items-center gap-5 pt-5 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              WhatsApp
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
