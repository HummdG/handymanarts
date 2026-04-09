export interface ServiceArea {
  name: string
  postcode: string
  primary?: boolean
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Notting Hill', postcode: 'W11', primary: true },
  { name: 'Holland Park', postcode: 'W11' },
  { name: 'Ladbroke Grove', postcode: 'W10' },
  { name: 'Kensington', postcode: 'W8' },
  { name: 'Shepherd\'s Bush', postcode: 'W12' },
  { name: 'Bayswater', postcode: 'W2' },
  { name: 'Maida Vale', postcode: 'W9' },
  { name: 'Paddington', postcode: 'W2' },
  { name: 'Hammersmith', postcode: 'W6' },
  { name: 'Chiswick', postcode: 'W4' },
  { name: 'Chelsea', postcode: 'SW3' },
  { name: 'Fulham', postcode: 'SW6' },
  { name: 'Earls Court', postcode: 'SW5' },
  { name: 'Westbourne Grove', postcode: 'W2' },
  { name: 'Kensal Rise', postcode: 'NW10' },
]
