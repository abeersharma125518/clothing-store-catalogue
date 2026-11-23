import { Link } from 'react-router-dom'
import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { store } from '../../data/store'
import { generateWhatsAppLink } from '../../utils/whatsapp'
import { useLanguage } from '../../context/LanguageContext'

const generalMessage = `Hi ${store.storeName}, I'd like to ask about your collection.`

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-stone/15 bg-white pb-24 lg:pb-0">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">{store.storeName}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-maroon">{store.area}, {store.city}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">{store.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={generateWhatsAppLink(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                title={store.demoMode ? 'Demo preview — replace the WhatsApp number in store.ts before launch' : undefined}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-[#062b18] hover:bg-[#22bf5b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                <MessageCircle size={17} aria-hidden="true" />
                {t('askWhatsapp')}
              </a>
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-maroon hover:text-maroon"
              >
                <Instagram size={17} aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-stone">
              <li><Link className="hover:text-maroon" to="/">{t('home')}</Link></li>
              <li><Link className="hover:text-maroon" to="/shop">{t('shop')}</Link></li>
              <li><Link className="hover:text-maroon" to="/lookbook">{t('lookbook')}</Link></li>
              <li><Link className="hover:text-maroon" to="/visit">{t('visitStore')}</Link></li>
              <li><Link className="hover:text-maroon" to="/about">{t('about')}</Link></li>
              <li><Link className="hover:text-maroon" to="/contact">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">Find us</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone">
              <li className="flex gap-2.5">
                <MapPin size={17} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                <a href={store.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
                  {store.address}, {store.city} {store.pincode}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={17} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                <span>{store.openingHours} · {store.weeklyOff} off</span>
              </li>
            </ul>
            {store.demoMode && (
              <p className="mt-4 text-[10px] leading-relaxed text-stone/80">
                Demo preview — replace business details from <code className="font-mono">src/data/store.ts</code> before launch.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone/15 pt-6 text-[11px] text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {store.storeName}. All rights reserved.</p>
          <p>
            {store.demoMode
              ? 'Payments: confirm with the store'
              : `Accepted payments: ${store.acceptedPayments.join(' · ')}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
