import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { store } from '../../data/store'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage } from '../../context/LanguageContext'

const message = `Hi ${store.storeName}, I'd like help finding an outfit. Can you share what's available?`

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-wine py-14 text-cream sm:py-16" aria-labelledby="final-cta-heading">
      <div className="mx-auto flex max-w-content flex-col items-center px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">One message away</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Find Something You'll Love Wearing.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
          Tell us the occasion, your budget and your size. Ask about pieces from the store and plan a visit or video call.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <WhatsAppButton message={message} variant="solid" className="min-h-12 !px-7">
            {t('askWhatsapp')}
          </WhatsAppButton>
          <a
            href={store.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/35 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            <MapPin size={17} aria-hidden="true" />
            {t('getDirections')}
          </a>
          <Link
            to="/shop"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-cream/85 hover:text-cream"
          >
            {t('browseCollection')}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
