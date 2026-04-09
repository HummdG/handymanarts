'use client'

import { useState } from 'react'
import { TESTIMONIALS } from '@/data/testimonials'
import { cn } from '@/lib/utils'

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))

  return (
    <section className="section-padding bg-brand-charcoal" aria-labelledby="testimonials-heading">
      <div className="container-site">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-copper mb-2">
              What Customers Say
            </p>
            <h2
              id="testimonials-heading"
              className="font-display font-semibold text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Trusted by West London{' '}
              <em className="italic">Homeowners</em>
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-0.5" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-sm">5.0 · {TESTIMONIALS.length} Reviews</span>
          </div>
        </div>

        {/* Desktop: 3 across */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-0.5">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/15 hover:border-brand-copper hover:text-brand-copper text-white/40 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Review navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Review ${i + 1}`}
                  className={cn(
                    'h-px transition-all duration-300',
                    i === activeIndex ? 'w-8 bg-brand-copper' : 'w-4 bg-white/20'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/15 hover:border-brand-copper hover:text-brand-copper text-white/40 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <article className="flex flex-col border-t border-white/10 pt-8 h-full">
      {/* Opening quote mark */}
      <span
        className="font-display text-brand-copper/25 leading-none select-none block -mb-1"
        style={{ fontSize: '2.75rem', lineHeight: 1, fontStyle: 'italic' }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote
        className="font-display italic text-white/65 leading-relaxed flex-1 mb-8"
        style={{ fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)' }}
      >
        {testimonial.text}
      </blockquote>
      <footer className="flex items-center gap-3">
        <div className="w-6 h-px bg-brand-copper/40 flex-shrink-0" aria-hidden="true" />
        <div>
          <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase leading-tight">{testimonial.name}</p>
          <p className="text-white/25 text-[10px] mt-0.5">{testimonial.location}</p>
        </div>
      </footer>
    </article>
  )
}
