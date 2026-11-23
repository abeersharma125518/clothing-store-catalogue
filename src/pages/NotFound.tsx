import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import WhatsAppButton from '../components/common/WhatsAppButton'
import { store } from '../data/store'
import { useSeo } from '../utils/seo'

export default function NotFound() {
  useSeo('Page Not Found', `The page you are looking for does not exist on ${store.storeName}'s website.`)

  return (
    <main id="main-content" className="mx-auto flex max-w-content flex-col items-center px-4 py-20 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-maroon">
        <Compass size={28} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-maroon">404 · Page not found</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">This page took a different route.</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
        The link may have moved or never existed. Head back to the homepage or browse the collection.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link to="/" className="inline-flex min-h-12 items-center rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream">
          Back to home
        </Link>
        <Link to="/shop" className="inline-flex min-h-12 items-center rounded-full border border-stone/20 px-6 py-3 text-sm font-semibold text-ink">
          Browse collection
        </Link>
        <WhatsAppButton message={`Hi ${store.storeName}, I got lost on your website. Can you help?`} variant="outline">
          Ask on WhatsApp
        </WhatsAppButton>
      </div>
    </main>
  )
}
