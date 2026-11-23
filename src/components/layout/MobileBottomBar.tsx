import { Home, MapPin, MessageCircle, ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { store } from '../../data/store'
import { generateWhatsAppLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'

const generalMessage = `Hi ${store.storeName}, I'd like to ask about an outfit.`

const itemClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
    isActive ? 'text-maroon' : 'text-stone'
  }`

export default function MobileBottomBar() {
  const { t } = useLanguage()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-stone/15 bg-white/98 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_18px_rgba(40,25,25,0.06)] lg:hidden"
      aria-label="Mobile quick navigation"
    >
      <NavLink to="/" end className={itemClass}>
        <Home size={19} strokeWidth={1.9} aria-hidden="true" />
        {t('home')}
      </NavLink>
      <NavLink to="/shop" className={itemClass}>
        <ShoppingBag size={19} strokeWidth={1.9} aria-hidden="true" />
        {t('shop')}
      </NavLink>
      <a
        href={generateWhatsAppLink(generalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        title={store.demoMode ? 'Demo preview — replace the WhatsApp number in store.ts before launch' : undefined}
        className="flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 bg-[#25D366] text-[10px] font-semibold text-[#062b18]"
        aria-label={t('askWhatsapp')}
      >
        <MessageCircle size={19} strokeWidth={2} aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={store.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-medium text-stone"
      >
        <MapPin size={19} strokeWidth={1.9} aria-hidden="true" />
        {t('directions')}
      </a>
    </nav>
  )
}

export function BottomBarSpacer() {
  return <div className="h-16 lg:hidden" aria-hidden="true" />
}
