import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'phone' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface CTAButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-copper text-white hover:bg-brand-copper-dark focus-visible:ring-brand-copper/40',
  secondary:
    'border border-brand-copper text-brand-copper bg-transparent hover:bg-brand-copper-light focus-visible:ring-brand-copper/40',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1ebe5d] focus-visible:ring-[#25D366]/40',
  phone:
    'bg-surface-dark text-white hover:bg-black focus-visible:ring-surface-dark/40',
  ghost:
    'text-brand-copper bg-transparent hover:bg-brand-copper-light focus-visible:ring-brand-copper/40',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  target,
  rel,
  type = 'button',
  disabled,
}: CTAButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-btn',
    'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'active:scale-[0.98]',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <a href={href} className={baseStyles} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
