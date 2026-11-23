import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Instagram, Menu, MapPin, X } from 'lucide-react'
import { store } from '../../data/store'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage, type Language } from '../../context/LanguageContext'

const generalMessage = `Hi ${store.storeName}, I'd like to know more about your collection.`

const navLinks = [
  { to: '/shop', key: 'shop' as const },
  { to: '/shop?occasion=Festive', key: 'categories' as const },
  { to: '/visit', key: 'visitStore' as const },
  { to: '/about', key: 'about' as const },
]

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage()
  const languages: Language[] = ['en', 'hi']

  return (
    <div
      className={`inline-flex rounded-full border border-stone/20 bg-white p-0.5 ${compact ? 'text-[11px]' : 'text-xs'}`}
      role="group"
      aria-label="Choose language"
    >
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          aria-pressed={language === item}
          className={`rounded-full px-2.5 py-1 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-maroon ${
            language === item ? 'bg-wine text-cream' : 'text-stone hover:text-ink'
          }`}
        >
          {item === 'en' ? 'English' : 'हिन्दी'}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => setOpen(false), [location.pathname, location.search])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <div className="bg-wine px-4 py-2 text-center text-[10px] font-medium tracking-wide text-cream/90 sm:text-[11px]">
        {store.demoMode && <span className="mr-2 rounded-full border border-cream/30 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em]">Demo preview</span>}
        {store.announcement}
      </div>

      <header className="sticky top-0 z-40 border-b border-stone/10 bg-cream/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-content items-center justify-between gap-3 px-4 sm:px-6" aria-label="Main navigation">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-maroon/30 bg-white font-display text-lg font-semibold text-maroon">
              {store.storeName.charAt(0).toUpperCase()}
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold tracking-wide text-ink">{store.storeName}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-stone sm:block">{store.area}, {store.city}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon ${
                    isActive && !link.to.includes('?') ? 'text-maroon' : 'text-ink/80'
                  }`
                }
              >
                {t(link.key)}
              </NavLink>
            ))}
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink/80 transition-colors hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maroon"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <LanguageToggle />
            <WhatsAppButton message={generalMessage} className="!px-4 !py-2 !text-xs">
              {t('askWhatsapp')}
            </WhatsAppButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppButton message={generalMessage} className="!min-h-10 !px-3 !py-2 !text-[11px] sm:!text-xs">
              {t('askWhatsapp')}
            </WhatsAppButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/20 bg-white text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-cream p-5 shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal={open ? 'true' : undefined}
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-ink">{store.storeName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone/20 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-maroon"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flex flex-col">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-stone/10 py-3 font-display text-xl text-ink"
            >
              {t('home')}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-stone/10 py-3 font-display text-xl text-ink"
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              to="/lookbook"
              onClick={() => setOpen(false)}
              className="border-b border-stone/10 py-3 font-display text-xl text-ink"
            >
              {t('lookbook')}
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="border-b border-stone/10 py-3 font-display text-xl text-ink"
            >
              {t('contact')}
            </Link>
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-6">
            <LanguageToggle compact />
            <div className="flex gap-2">
              <WhatsAppButton message={generalMessage} className="flex-1 !text-xs">
                {t('askWhatsapp')}
              </WhatsAppButton>
              <a
                href={store.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-stone/20 bg-white px-4 text-xs font-semibold text-ink"
              >
                <MapPin size={16} aria-hidden="true" />
                {t('directions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
