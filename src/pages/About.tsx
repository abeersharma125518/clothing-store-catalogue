import { Link } from 'react-router-dom'
import { HeartHandshake, MapPin, Scissors, ShoppingBag } from 'lucide-react'
import { store } from '../data/store'
import ImageWithFallback from '../components/common/ImageWithFallback'
import SectionHeading from '../components/common/SectionHeading'
import WhatsAppButton from '../components/common/WhatsAppButton'
import FinalCTA from '../components/sections/FinalCTA'
import { useSeo } from '../utils/seo'

const message = `Hi ${store.storeName}, I'd like to know more about your store and collection.`

export default function About() {
  useSeo(`About Us — Ethnic Wear in ${store.area}, ${store.city}`, store.description)

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            titleAs="h1"
            eyebrow="Our story"
            title="A Neighbourhood Store With a Personal Touch"
            description={store.description}
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <ImageWithFallback
                src={store.storefrontImage}
                alt={`${store.storeName} storefront${store.demoMode ? ' — demo photograph' : ''}`}
                sizes="(max-width: 1024px) 50vw, 25vw"
                aspect="aspect-[4/5]"
                className="rounded-2xl"
              />
              <ImageWithFallback
                src={store.ownerImage}
                alt={`${store.ownerName}${store.demoMode ? ' — demo portrait' : ''}`}
                sizes="(max-width: 1024px) 50vw, 25vw"
                aspect="aspect-[4/5]"
                className="mt-6 rounded-2xl"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                Shopping here should feel easy.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                {store.establishedYear
                  ? `Serving ${store.city} since ${store.establishedYear}, our family has focused on helping customers find clothing they genuinely love — whether it's a wedding, festival or everyday occasion.`
                  : "We focus on helping customers find clothing they genuinely love — whether it's a wedding, festival or everyday occasion. Our team takes time to understand what you need, suggests options that suit your budget and helps you try them in store."}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
                We keep our collection curated rather than overwhelming, and we focus on clear, honest advice. If something is not available, we will let you know.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: HeartHandshake, title: 'Personal attention', text: 'One-to-one help with fit, colour and occasion' },
                  { icon: Scissors, title: 'Thoughtful curation', text: 'Styles chosen with local celebrations in mind' },
                  { icon: ShoppingBag, title: 'Try before you decide', text: 'See fabric, fall and finish in person' },
                  { icon: MapPin, title: 'Easy to reach', text: `${store.area}, ${store.city}` },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-stone/10 bg-cream/60 p-4">
                    <item.icon size={19} className="text-maroon" aria-hidden="true" />
                    <p className="mt-2 text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppButton message={message} variant="solid" className="min-h-12">
                  Ask us anything
                </WhatsAppButton>
                <Link
                  to="/visit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone/20 px-6 py-3 text-sm font-semibold text-ink hover:border-maroon hover:text-maroon"
                >
                  Plan a visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </main>
  )
}
