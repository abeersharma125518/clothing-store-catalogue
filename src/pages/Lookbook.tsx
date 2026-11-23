import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { lookbookItems } from '../data/lookbook'
import { store } from '../data/store'
import ImageWithFallback from '../components/common/ImageWithFallback'
import SectionHeading from '../components/common/SectionHeading'
import WhatsAppButton from '../components/common/WhatsAppButton'
import FinalCTA from '../components/sections/FinalCTA'
import { useSeo } from '../utils/seo'

const message = `Hi ${store.storeName}, I saw your lookbook. Could you tell me more about these styles?`

export default function Lookbook() {
  useSeo(`Lookbook — Ethnic Wear Inspiration in ${store.area}`, `Occasion-led ethnic wear inspiration from ${store.storeName} in ${store.area}, ${store.city}.`)

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            titleAs="h1"
            eyebrow="Lookbook"
            title="Occasion-Led Inspiration"
            description={store.demoMode
              ? 'A visual edit of wedding, festive and everyday picks. These are demo photographs — real in-store images can be added later.'
              : 'A visual edit of wedding, festive and everyday picks.'}
            action={
              <a
                href={store.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-maroon/30 px-5 py-2.5 text-sm font-semibold text-maroon hover:bg-maroon/5"
              >
                <Instagram size={17} aria-hidden="true" />
                See us on Instagram
              </a>
            }
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {lookbookItems.map((item) => (
              <Link key={item.id} to={`/product/${item.productSlug}`} className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon">
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.title}${store.demoMode ? ' — demo lookbook photograph' : ''}`}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  aspect="aspect-[3/4]"
                  imgClassName="group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  className="rounded-2xl"
                />
                <p className="mt-3 font-display text-xl text-ink sm:text-2xl">{item.title}</p>
                <p className="text-xs text-stone">{item.subtitle}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-sand/50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-ink">See something you like?</h2>
              <p className="mt-1 text-sm text-stone">Send us the look and ask us about similar pieces.</p>
            </div>
            <WhatsAppButton message={message} variant="solid" className="min-h-12 w-full sm:w-auto">
              Ask about these looks
            </WhatsAppButton>
          </div>
        </div>
      </div>
      <FinalCTA />
    </main>
  )
}
