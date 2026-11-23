import { Link } from 'react-router-dom'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { store } from '../../data/store'
import ImageWithFallback from '../common/ImageWithFallback'
import SectionHeading from '../common/SectionHeading'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage } from '../../context/LanguageContext'

const visitMessage = `Hi ${store.storeName}, I'm planning a visit to your ${store.area} store. Could you confirm the address and timings?`

export default function StoreVisit() {
  const { t } = useLanguage()

  return (
    <section className="bg-sand/50 py-14 sm:py-16" aria-labelledby="store-visit-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Come say hello"
          title={`Your Local Store in ${store.area}`}
          description="See the fabric, feel the finish and try it on at your own pace."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ImageWithFallback
              src={store.storefrontImage}
              alt={`Storefront${store.demoMode ? ' — demo photograph, replace with real shop photo' : ''}`}
              sizes="(max-width: 1024px) 50vw, 28vw"
              aspect="aspect-[4/5]"
              className="rounded-2xl"
            />
            <ImageWithFallback
              src={store.interiorImage}
              alt={`Store interior${store.demoMode ? ' — demo photograph, replace with real shop photo' : ''}`}
              sizes="(max-width: 1024px) 50vw, 28vw"
              aspect="aspect-[4/5]"
              className="mt-6 rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-stone/10 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">Find us</p>
              <p className="mt-3 flex gap-3 text-sm leading-relaxed text-ink">
                <MapPin size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                {store.address}, {store.city}, {store.state} {store.pincode}
              </p>
              <p className="mt-3 flex gap-3 text-sm leading-relaxed text-ink">
                <Clock size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                {t('openingHours')}: {store.openingHours} <br />
                Weekly off: {store.weeklyOff}
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream hover:bg-wine-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                >
                  <MapPin size={17} aria-hidden="true" />
                  {t('getDirections')}
                </a>
                <WhatsAppButton message={visitMessage} variant="outline" className="min-h-12">
                  Ask before you visit
                </WhatsAppButton>
              </div>
            </div>

            <Link
              to="/visit"
              className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-maroon hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              Full store visit guide
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
