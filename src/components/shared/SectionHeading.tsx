import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
  id?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <span
          className={cn(
            'inline-block text-xs font-bold tracking-[0.18em] uppercase mb-3',
            light ? 'text-white/50' : 'text-brand-copper'
          )}
        >
          {label}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          'font-display text-display font-bold leading-tight',
          light ? 'text-white' : 'text-surface-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/70' : 'text-surface-gray'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
