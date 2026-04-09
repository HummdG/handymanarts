'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SERVICES } from '@/data/services'
import { SITE_CONFIG } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please describe your job (minimum 10 characters)'),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(
      `New enquiry: ${data.service} — ${data.name}`
    )
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone/WhatsApp: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message}`
    )
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-copper-light text-brand-copper flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-surface-dark text-xl mb-2">Your email app should open</h3>
        <p className="text-surface-gray mb-6">
          If it didn&apos;t, you can also reach us directly:
        </p>
        <div className="space-y-3">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-copper text-white font-semibold rounded-btn hover:bg-brand-copper-dark transition-colors"
          >
            Call {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-btn hover:bg-[#1ebe5d] transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-surface-dark mb-1.5">
          Your name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Jane Smith"
          {...register('name')}
          className={cn(
            'w-full px-4 py-3 rounded-btn border bg-white text-surface-dark placeholder:text-surface-gray/60',
            'focus:outline-none focus:ring-2 focus:ring-brand-copper focus:border-transparent transition-colors',
            errors.name ? 'border-red-400' : 'border-surface-gray-border'
          )}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-surface-dark mb-1.5">
          Phone / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. 07900 123456"
          {...register('phone')}
          className={cn(
            'w-full px-4 py-3 rounded-btn border bg-white text-surface-dark placeholder:text-surface-gray/60',
            'focus:outline-none focus:ring-2 focus:ring-brand-copper focus:border-transparent transition-colors',
            errors.phone ? 'border-red-400' : 'border-surface-gray-border'
          )}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-surface-dark mb-1.5">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 rounded-btn border bg-white text-surface-dark placeholder:text-surface-gray/60',
            'focus:outline-none focus:ring-2 focus:ring-brand-copper focus:border-transparent transition-colors',
            errors.email ? 'border-red-400' : 'border-surface-gray-border'
          )}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-surface-dark mb-1.5">
          Service required <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          {...register('service')}
          className={cn(
            'w-full px-4 py-3 rounded-btn border bg-white text-surface-dark',
            'focus:outline-none focus:ring-2 focus:ring-brand-copper focus:border-transparent transition-colors',
            errors.service ? 'border-red-400' : 'border-surface-gray-border'
          )}
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Multiple services">Multiple services</option>
          <option value="Not sure">Not sure — please advise</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-surface-dark mb-1.5">
          Job description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Please describe the job. Include as much detail as possible — size, location, any specific requirements. Photos can be sent via WhatsApp."
          {...register('message')}
          className={cn(
            'w-full px-4 py-3 rounded-btn border bg-white text-surface-dark placeholder:text-surface-gray/60 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-brand-copper focus:border-transparent transition-colors',
            errors.message ? 'border-red-400' : 'border-surface-gray-border'
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-brand-copper text-white font-bold rounded-btn-lg hover:bg-brand-copper-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2"
      >
        Send Enquiry
      </button>

      <p className="text-center text-surface-gray text-xs">
        This will open your email app with your message pre-filled.
      </p>
    </form>
  )
}
