export interface Testimonial {
  id: string
  name: string
  location: string
  rating: 5 | 4 | 3
  text: string
  service?: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Emma W.',
    location: 'Notting Hill W11',
    rating: 5,
    text: "Handyman Arts mounted our TV and hid all the cables beautifully. The whole thing was done in under two hours — punctual, professional and the finish is impeccable. Highly recommend.",
    service: 'tv-wall-mounting',
    initials: 'EW',
  },
  {
    id: '2',
    name: 'Charlotte R.',
    location: 'Holland Park W11',
    rating: 5,
    text: "We had a full bathroom tiling job done. The attention to detail was brilliant — every line is straight, the grout is perfect. The team was clean, respectful of our home and finished ahead of schedule.",
    service: 'tiling',
    initials: 'CR',
  },
  {
    id: '3',
    name: 'James M.',
    location: 'Kensington W8',
    rating: 5,
    text: "Three rooms painted to an excellent standard. They were careful with our furniture, left no mess and the finish is exactly what we wanted. Will absolutely use Handyman Arts again.",
    service: 'painting-and-decorating',
    initials: 'JM',
  },
  {
    id: '4',
    name: 'Fatima K.',
    location: 'Ladbroke Grove W10',
    rating: 5,
    text: "Had a leaking tap and a running toilet sorted in one visit. Arrived exactly on time, diagnosed the problem quickly and fixed everything without making any mess. Great value too.",
    service: 'plumbing-repairs',
    initials: 'FK',
  },
  {
    id: '5',
    name: 'Ben S.',
    location: 'Bayswater W2',
    rating: 5,
    text: "CCTV cameras installed at our rental property — four cameras, all perfectly positioned, cables neatly routed and the app all set up and working before they left. Couldn't have been smoother.",
    service: 'cctv-installation',
    initials: 'BS',
  },
  {
    id: '6',
    name: 'Sophie L.',
    location: 'Shepherd\'s Bush W12',
    rating: 5,
    text: "I gave them a list of about eight small jobs — shelves, a stiff door, some picture hanging, a dripping tap. Every single thing was sorted in one afternoon. This is exactly the service I needed.",
    service: 'odd-jobs-and-repairs',
    initials: 'SL',
  },
  {
    id: '7',
    name: 'Olivia T.',
    location: 'Notting Hill W11',
    rating: 5,
    text: "Had our Ring doorbell and Hive thermostat installed. Everything was set up and connected to our phones before the engineer left. Professional service with a really helpful explanation of how it all works.",
    service: 'smart-home-installation',
    initials: 'OT',
  },
  {
    id: '8',
    name: 'Ivan L.',
    location: 'Maida Vale W9',
    rating: 5,
    text: "The patio was covered in moss and algae — Handyman Arts transformed it in a morning. It looks brand new. They were thorough, tidy and very fairly priced. Booking them again for the driveway.",
    service: 'jet-washing',
    initials: 'IL',
  },
]
