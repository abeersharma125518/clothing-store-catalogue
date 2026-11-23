import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { lookbookItems } from '../../data/lookbook'
import { store } from '../../data/store'
import ImageWithFallback from '../common/ImageWithFallback'
import SectionHeading from '../common/SectionHeading'

export default function Lookbook() {
  return (
    <section className="bg-cream py-14 sm:py-16" aria-labelledby="lookbook-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Lookbook"
          title="A Little Inspiration"
          description={store.demoMode
            ? 'Swipe through occasion-led edits. Tap a card to see a similar piece in the demo catalogue.'
            : 'Swipe through occasion-led edits. Tap a card to see a similar piece in the collection.'}
          action={
            <a
              href={store.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-maroon/30 px-5 py-2.5 text-sm font-semibold text-maroon hover:bg-maroon/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              <Instagram size={17} aria-hidden="true" />
              See us on Instagram
            </a>
          }
        />

        <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0" role="group" aria-label="Lookbook collection">
          {lookbookItems.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.productSlug}`}
              className="group w-[72%] shrink-0 snap-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:w-[44%] lg:w-[31%]"
            >
              <ImageWithFallback
                src={item.image}
                alt={`${item.title} lookbook image${store.demoMode ? ' — demo photograph' : ''}`}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 31vw"
                aspect="aspect-[3/4]"
                imgClassName="group-hover:scale-105 motion-reduce:group-hover:scale-100"
                className="rounded-2xl"
              />
              <div className="pt-3">
                <p className="font-display text-xl text-ink">{item.title}</p>
                <p className="text-xs text-stone">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
