import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { generateWhatsAppLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'
import { store } from '../../data/store'

type Props = {
  message: string
  children?: ReactNode
  variant?: 'solid' | 'outline' | 'floating'
  className?: string
  ariaLabel?: string
}

const styles = {
  solid: 'bg-[#25D366] text-[#062b18] hover:bg-[#22bf5b] shadow-sm',
  outline: 'border border-[#25D366]/70 text-[#0f7a3d] hover:bg-[#25D366]/10 bg-white',
  floating:
    'bg-[#25D366] text-[#062b18] shadow-[0_8px_28px_rgba(16,101,52,0.42)] hover:bg-[#22bf5b] h-14 w-14 rounded-full',
}

export default function WhatsAppButton({
  message,
  children,
  variant = 'solid',
  className = '',
  ariaLabel,
}: Props) {
  const { t } = useLanguage()
  const isFloating = variant === 'floating'
  const base = isFloating
    ? styles.floating
    : `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${styles[variant]}`

  return (
    <a
      href={generateWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (isFloating ? t('askWhatsapp') : undefined)}
      title={store.demoMode ? 'Demo preview — replace the WhatsApp number in store.ts before launch' : undefined}
      className={`transition-colors duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${base} ${className}`}
    >
      <MessageCircle size={isFloating ? 26 : 18} strokeWidth={2.1} aria-hidden="true" />
      {isFloating ? <span className="sr-only">{t('askWhatsapp')}</span> : <span>{children ?? t('askWhatsapp')}</span>}
    </a>
  )
}
