import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/data/siteConfig'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/96 backdrop-blur-md border-b border-surface-border-light">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo — actual brand image */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Handyman Arts — Home">
            <div className="relative h-9 w-32">
              <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/m2WBv6L0aru9oZlb/handyman_logo-dOqyoLrL0QiRekeX.png"
                alt="Handyman Arts logo"
                fill
                className="object-contain object-left"
                sizes="128px"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium tracking-wide text-surface-stone hover:text-surface-dark transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="text-sm font-semibold text-surface-dark hover:text-brand-copper transition-colors tabular-nums"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-copper text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-brand-copper-dark transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
