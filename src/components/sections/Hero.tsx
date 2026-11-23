import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { store } from '../../data/store'
import ImageWithFallback from '../common/ImageWithFallback'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage } from '../../context/LanguageContext'

const generalMessage = `Hi ${store.storeName}, I'd like to see your latest collection. What do you have available?`

export default function Hero() {
  const { t } = useLanguage()
  const taglineParts = store.tagline.split('. ').map((part) => part.replace(/\.$/, ''))
  const [firstLine, secondLine] = taglineParts

  return (
    <section className="relative overflow-hidden border-b border-stone/10 bg-cream" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-content items-center gap-8 px-4 py-9 sm:px-6 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-maroon">
            <MapPin size={14} strokeWidth={2} aria-hidden="true" />
            <span>{store.area} <span className="text-stone/50">•</span> {store.city}</span>
          </div>

          <h1 id="hero-title" className="font-display text-[2.4rem] leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
            {firstLine}
            {secondLine && <span className="block text-maroon">{secondLine}</span>}
          </h1>

          <div className="mt-5 h-px w-14 bg-gold/70" aria-hidden="true" />

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-stone sm:text-base">
            {t('heroSubtitle')} Thoughtful pieces, honest guidance and a shopping experience that feels like family.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-wine px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-wine-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
            >
              {t('browseCollection')}
            </Link>
            <WhatsAppButton message={generalMessage} variant="outline" className="min-h-12 !px-6">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-xs text-stone">
            In-store styling <span className="mx-2 text-stone/40">·</span> WhatsApp-first service
          </p>
        </div>

        <div className="relative">
          <div className="absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-tl-[3rem] border-b border-l border-gold/50 sm:block" aria-hidden="true" />
          <ImageWithFallback
            src="/images/hero.webp"
            alt={`Ethnic wear styled in a warm boutique setting${store.demoMode ? ' — demo photograph' : ''}`}
            sizes="(max-width: 1024px) 100vw, 55vw"
            aspect="aspect-[4/3] lg:aspect-[5/6]"
            eager
            className="rounded-xl shadow-soft"
          />
          <div className="absolute bottom-3 left-3 rounded-lg bg-cream/95 px-3.5 py-2.5 shadow-sm backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-4 sm:py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-maroon">{store.area}, {store.city}</p>
            <p className="mt-0.5 text-xs leading-snug text-ink sm:text-sm">See the fabric. Feel the fit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
