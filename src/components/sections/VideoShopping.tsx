import { Video } from 'lucide-react'
import { store } from '../../data/store'
import WhatsAppButton from '../common/WhatsAppButton'
import ImageWithFallback from '../common/ImageWithFallback'

const message = `Hi ${store.storeName}, I'd like to know more about video shopping. Please share available slots.`

export default function VideoShopping() {
  return (
    <section className="bg-cream py-14 sm:py-16" aria-labelledby="video-heading">
      <div className="mx-auto grid max-w-content items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative">
          <ImageWithFallback
            src="/images/lookbook-3.webp"
            alt={`Styled ethnic outfit for video shopping${store.demoMode ? ' — demo photograph' : ''}`}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspect="aspect-[4/3]"
            className="rounded-2xl"
          />
          <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full bg-wine px-4 py-2.5 text-xs font-semibold text-cream shadow-soft">
            <Video size={16} aria-hidden="true" />
            Video shopping
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">From nearby cities</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">Can't Make It to {store.area}?</h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            Request a short video shopping session and browse pieces from wherever you are.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone">{store.videoShoppingInformation}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-ink">
            {store.videoShoppingLocations.map((city) => (
              <span key={city} className="rounded-full border border-stone/20 bg-white px-3 py-1.5">{city}</span>
            ))}
          </div>

          <WhatsAppButton message={message} variant="solid" className="mt-7 min-h-12">
            Book Video Shopping
          </WhatsAppButton>
          <p className="mt-3 text-xs text-stone">Slots are confirmed personally on WhatsApp.</p>
        </div>
      </div>
    </section>
  )
}
