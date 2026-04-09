import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import JsonLd from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Handyman Portfolio — Work in Notting Hill W11',
  description:
    'View recent handyman projects by Handyman Arts in Notting Hill W11 & West London. TV mounting, decorating, plumbing, CCTV installation and more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
}

const portfolioItems = [
  {
    title: 'TV Wall Mounting & Cable Management',
    location: 'Notting Hill W11',
    description: 'Full-motion bracket installation on a plasterboard wall with cables concealed inside the wall cavity.',
    category: 'TV Wall Mounting',
    image: 'https://images.unsplash.com/photo-1593359677879-a4021787c22f?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Full Bathroom Tiling',
    location: 'Holland Park W11',
    description: 'Complete bathroom renovation — wall and floor tiling in large-format porcelain, with new grouting and silicone.',
    category: 'Tiling',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Interior Painting & Decorating',
    location: 'Kensington W8',
    description: 'Three-room repaint including ceilings, walls and woodwork, using Farrow & Ball Elephant\'s Breath.',
    category: 'Painting & Decorating',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'CCTV Installation — Rental Property',
    location: 'Ladbroke Grove W10',
    description: '4-camera external CCTV system for a landlord\'s property, with mobile app remote viewing.',
    category: 'CCTV Installation',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605f43d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Smart Doorbell & Thermostat',
    location: 'Bayswater W2',
    description: 'Ring video doorbell and Hive smart thermostat installation, integrated with Google Home.',
    category: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1558002697-10a92e5b5d56?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Gallery Wall Installation',
    location: 'Shepherd\'s Bush W12',
    description: '14-piece gallery wall layout and installation — mix of canvas prints and framed artwork.',
    category: 'Picture Hanging',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&auto=format&fit=crop',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
      ])} />

      {/* Hero */}
      <section className="bg-brand-deep text-white section-padding">
        <div className="container-site max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3 text-brand-copper-light">
            Our Work
          </span>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: '1.1' }}>
            Portfolio — Recent Projects in Notting Hill & West London
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            A selection of recent work across our core services. Every project is completed to the same high standard.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-surface-gray-light">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-brand-copper text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-surface-gray text-xs mb-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {item.location}
                  </div>
                  <h2 className="font-display font-bold text-surface-dark text-lg mb-2">{item.title}</h2>
                  <p className="text-surface-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Note about real photos */}
          <p className="text-center text-surface-gray text-sm mt-10">
            More project photos coming soon. In the meantime,{' '}
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="text-brand-copper hover:underline font-medium"
            >
              call us
            </a>{' '}
            to discuss your specific requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-display text-surface-dark mb-4">
            Like What You See?
          </h2>
          <p className="text-surface-gray text-lg mb-8 max-w-md mx-auto">
            Get in touch for a free quote on your project. Free call-out, no obligation.
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
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
