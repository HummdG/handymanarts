'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItem & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-surface-gray-border last:border-0">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4 py-5 text-left',
          'font-semibold text-surface-dark transition-colors hover:text-brand-copper',
          'focus-visible:outline-none focus-visible:text-brand-copper'
        )}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={cn(
            'w-5 h-5 flex-shrink-0 text-brand-copper transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-surface-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('divide-y-0', className)}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
