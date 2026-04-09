export const PRICING = {
  firstHour: 80,
  additionalHour: 70,
  halfDay: 220,
  halfDayHours: 4,
  fullDay: 400,
  fullDayHours: 8,
  currency: 'GBP',
  currencySymbol: '£',
  deposit: '50% on booking confirmation',
  balanceDue: 'on completion',
  notes: [
    'Materials charged separately at cost, with receipts provided',
    'Parking charges added if applicable to the job location',
    'Congestion charge added for Zone 1 jobs',
    'Fixed-price quotes available for most jobs after reviewing photos',
    'No VAT — prices shown are all-inclusive labour rates',
  ],
  includes: [
    'Free call-out — no charge to visit and quote',
    'Free written estimate before any work begins',
    'All tools and standard fixings supplied',
    'Tidy-up and removal of packaging and debris on completion',
  ],
} as const

export type PricingConfig = typeof PRICING
