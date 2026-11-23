import { Clock, CreditCard, MapPin, Navigation } from 'lucide-react'
import { store } from '../data/store'
import ImageWithFallback from '../components/common/ImageWithFallback'
import SectionHeading from '../components/common/SectionHeading'
import WhatsAppButton from '../components/common/WhatsAppButton'
import ParkingGuide from '../components/sections/ParkingGuide'
import FinalCTA from '../components/sections/FinalCTA'
import { useSeo } from '../utils/seo'
import { useLanguage } from '../context/LanguageContext'

const message = `Hi ${store.storeName}, I'm planning to visit your store today. Are you open, and could you confirm the best route?`

export default function VisitStore() {
  const { t } = useLanguage()
  useSeo(`Visit Our Store in ${store.area}, ${store.city}`, `Find ${store.storeName} in ${store.area}, ${store.city}. Get directions, opening hours, landmark instructions and parking guidance.`)

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            titleAs="h1"
            eyebrow="Visit us"
            title="We'd Love to See You in Store"
            description="Everything you need to find us, park nearby and shop at your own pace."
          />

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">1. Address & directions</p>
              <p className="mt-3 flex gap-3 font-display text-2xl leading-snug text-ink sm:text-3xl">
                <MapPin size={22} className="mt-1 shrink-0 text-maroon" aria-hidden="true" />
                {store.address}, {store.city}, {store.state} {store.pincode}
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream hover:bg-wine-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                >
                  <Navigation size={17} aria-hidden="true" />
                  {t('getDirections')}
                </a>
                <WhatsAppButton message={message} variant="outline" className="min-h-12">
                  Confirm before visiting
                </WhatsAppButton>
              </div>

              <div className="mt-8 border-t border-stone/15 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">4. Landmark instructions</p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{store.landmarkInstructions}</p>
                {store.demoMode && (
                  <p className="mt-2 text-[11px] text-stone/80">Placeholder directions — replace with verified instructions.</p>
                )}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">3. Our storefront</p>
              <ImageWithFallback
                src={store.storefrontImage}
                alt={`${store.storeName} storefront${store.demoMode ? ' — demo photograph' : ''}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                aspect="aspect-[4/5] lg:aspect-[5/6]"
                className="rounded-xl"
              />
              {store.demoMode && (
                <p className="mt-2 text-[11px] text-stone">Demo photograph — replace with a real storefront image.</p>
              )}
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-stone/15 pt-8 lg:grid-cols-[1.1fr_0.9fr_0.7fr] lg:gap-8">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">2. Map</p>
              <div className="overflow-hidden rounded-xl border border-stone/15 bg-sand">
                <iframe
                  title={`Map showing ${store.area}, ${store.city}`}
                  src={store.googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full sm:h-72"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">5. Opening hours & payments</p>
              <div className="space-y-4 rounded-xl border border-stone/15 p-5">
                <div className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone">{t('openingHours')}</p>
                    <p className="mt-1 text-sm text-ink">{store.openingHours}</p>
                    <p className="text-xs text-stone">Weekly off: {store.weeklyOff}</p>
                  </div>
                </div>
                <div className="flex gap-3 border-t border-stone/15 pt-4">
                  <CreditCard size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone">Payments</p>
                    <p className="mt-1 text-sm text-ink">{store.acceptedPayments.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-stone/15 pt-4">
                  <ImageWithFallback src={store.ownerImage} alt={`${store.ownerName}${store.demoMode ? ' — demo portrait' : ''}`} sizes="56px" aspect="aspect-square" className="h-14 w-14 shrink-0 rounded-full" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone">Meet the team</p>
                    <p className="mt-1 text-sm text-ink">{store.ownerName}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">7. Inside the store</p>
              <ImageWithFallback
                src={store.interiorImage}
                alt={`Store interior${store.demoMode ? ' — demo photograph' : ''}`}
                sizes="(max-width: 1024px) 100vw, 30vw"
                aspect="aspect-[4/5]"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <ParkingGuide eyebrow="6. Getting here" />
      <FinalCTA />
    </main>
  )
}
