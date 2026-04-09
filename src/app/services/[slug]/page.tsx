import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICES, getServiceBySlug } from '@/data/services'
import ServicePageTemplate from '@/components/services/ServicePageTemplate'
import { SITE_CONFIG } from '@/data/siteConfig'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
      images: [
        {
          url: service.heroImage,
          width: 1400,
          alt: `${service.name} in Notting Hill by Handyman Arts`,
        },
      ],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return <ServicePageTemplate service={service} />
}
