export const SITE_CONFIG = {
  name: 'Handyman Arts',
  tagline: 'Reliable Handyman Services in Notting Hill W11 & West London',
  url: 'https://www.handymanarts.co.uk',
  phone: '07900336643',
  phoneDisplay: '079 00 33 66 43',
  phoneTel: '+447900336643',
  whatsapp: '447900336643',
  whatsappDefaultMessage: "Hi Handyman Arts, I'd like to get a quote. Please get back to me when you can.",
  email: 'chathandymanarts@gmail.com',
  address: {
    street: '166 Great Western Road',
    city: 'London',
    postcode: 'W11 1BD',
    area: 'Notting Hill',
    region: 'West London',
  },
  hours: {
    weekdays: 'Mon–Fri: 9am–6pm',
    saturday: 'Sat: 9am–5pm',
    sunday: 'Sun: 9am–5pm',
    display: 'Mon–Sun: 9am–6pm',
  },
  geo: {
    latitude: 51.5141,
    longitude: -0.2037,
  },
  analytics: {
    gtmId: 'GTM-MNWVDR5T',
    gaId: 'G-PB74J1C3N7',
    fbPixelId: '562882040853219',
  },
  social: {
    // Add social links when available
  },
} as const

export type SiteConfig = typeof SITE_CONFIG
