import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  // Format: 079 00 33 66 43
  return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

export function buildWhatsAppUrl(whatsapp: string, message: string): string {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
}

export function buildServiceWhatsAppMessage(serviceName: string): string {
  return `Hi Handyman Arts, I'd like to get a quote for ${serviceName}. Please let me know your availability.`
}
