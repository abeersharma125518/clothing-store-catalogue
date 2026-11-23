import { CreditCard, MapPin, Scissors, ShoppingBag, Sparkles, Truck, UserRound } from 'lucide-react'
import ImageWithFallback from '../common/ImageWithFallback'
import TrustBadge from '../common/TrustBadge'
import SectionHeading from '../common/SectionHeading'
import { store } from '../../data/store'

export default function TrustSection() {
  const signals = [
    ...(store.establishedYear
      ? [{ icon: Sparkles, title: `Established in ${store.establishedYear}`, description: `Serving families in ${store.city}` }]
      : []),
    { icon: UserRound, title: 'Personal styling assistance', description: 'Help with fit, colour and occasion' },
    { icon: Scissors, title: 'Curated collections', description: 'Chosen with local tastes in mind' },
    { icon: ShoppingBag, title: 'In-store shopping', description: 'See fabric and finish up close' },
    { icon: CreditCard, title: store.demoMode ? 'Payments to confirm' : 'Payments accepted', description: store.acceptedPayments.join(' · ') },
    { icon: Truck, title: 'Local delivery', description: 'Ask on WhatsApp to confirm availability' },
  ]

  return (
    <section className="bg-white py-14 sm:py-16" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our promise"
          title="Why Shop With Us"
          description="A small local store with a simple approach: honest advice, thoughtfully chosen pieces and time to help you decide."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal) => (
            <TrustBadge key={signal.title} icon={signal.icon} title={signal.title} description={signal.description} />
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 rounded-2xl bg-sand/60 p-5 sm:p-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          <ImageWithFallback
            src={store.ownerImage}
            alt={`${store.ownerName}${store.demoMode ? ' — demo portrait, replace with a real photograph' : ''}`}
            sizes="(max-width: 1024px) 100vw, 260px"
            aspect="aspect-[4/5]"
            className="rounded-2xl"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">The people behind the store</p>
            <h3 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">Meet {store.ownerName}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
              {store.establishedYear
                ? `Serving ${store.city} since ${store.establishedYear}, our family has focused on helping customers find clothing they genuinely love — whether it's a wedding, festival or everyday occasion.`
                : "Our family has focused on helping customers find clothing they genuinely love — whether it's a wedding, festival or everyday occasion. We take time to understand what you need and suggest pieces that suit you."}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink">
              <MapPin size={16} className="text-maroon" aria-hidden="true" />
              {store.area}, {store.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
