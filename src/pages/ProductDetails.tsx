import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookmarkCheck, MapPin, PackageCheck, Truck } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { store } from '../data/store'
import ProductGallery from '../components/products/ProductGallery'
import ProductGrid from '../components/products/ProductGrid'
import PriceRange from '../components/common/PriceRange'
import WhatsAppButton from '../components/common/WhatsAppButton'
import FinalCTA from '../components/sections/FinalCTA'
import { useSeo } from '../utils/seo'
import { productEnquiryMessage } from '../utils/whatsapp'

export default function ProductDetails() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product) : []

  useSeo(
    product ? `${product.name} — ${product.category}` : 'Product not found',
    product
      ? `${product.description} Indicative price ₹${product.priceMin}–₹${product.priceMax}. WhatsApp ${store.storeName} in ${store.area}, ${store.city} to check availability.`
      : 'This product could not be found.',
  )

  if (!product) {
    return (
      <main id="main-content" className="mx-auto max-w-content px-4 py-20 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maroon">404</p>
        <h1 className="mt-3 font-display text-4xl text-ink">We couldn't find that piece</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone">
          The product link may have changed. Browse the full collection instead — or message us and we'll help you find it.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="inline-flex min-h-12 items-center rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream">
            Browse collection
          </Link>
          <WhatsAppButton message={`Hi ${store.storeName}, I followed a product link that no longer works. Can you help me find it?`} variant="outline">
            Ask on WhatsApp
          </WhatsAppButton>
        </div>
      </main>
    )
  }

  const reserveMessage = `Hi ${store.storeName}, I'd like to enquire about ${product.name} (#${product.id}). Please let me know if it is available.`
  const images = [product.image, ...product.secondaryImages]

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs text-stone">
            <Link to="/" className="hover:text-maroon">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/shop" className="hover:text-maroon">Shop</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-maroon">{product.category}</Link>
            <span aria-hidden="true">/</span>
            <span className="truncate font-medium text-ink">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductGallery images={images} name={product.name} />
            </div>

            <div className="lg:py-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">
                {product.category} <span className="mx-1.5 text-stone/40">/</span> {product.subcategory}
              </p>
              <h1 className="mt-2 font-display text-[2.1rem] leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">{product.name}</h1>

              <PriceRange min={product.priceMin} max={product.priceMax} className="mt-3 block text-xl text-ink sm:text-2xl" />
              <p className="mt-1.5 text-[11px] leading-relaxed text-stone">{store.priceDisclaimer}</p>

              <div className="mt-6 flex flex-col gap-2.5 border-y border-stone/15 py-5">
                <WhatsAppButton
                  message={productEnquiryMessage(product)}
                  variant="solid"
                  className="min-h-14 !text-sm sm:!text-base"
                  ariaLabel={`Check availability of ${product.name} on WhatsApp`}
                >
                  Check Availability on WhatsApp
                </WhatsAppButton>
                <WhatsAppButton message={reserveMessage} variant="outline" className="min-h-11">
                  <BookmarkCheck size={17} aria-hidden="true" />
                  Hold It For Me
                </WhatsAppButton>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-stone sm:text-base">{product.description}</p>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-stone">Occasion</dt>
                  <dd className="font-medium text-ink">{product.occasion}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-stone">Product code</dt>
                  <dd className="font-medium text-ink">#{product.id}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-stone">Details</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-ink">{tag}</span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 space-y-4">
                <div className="flex gap-3 border-t border-stone/15 pt-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-stone">
                    <strong className="block text-ink">Availability</strong>
                    Availability, colours and sizes are confirmed by the store on WhatsApp before you visit.
                  </p>
                </div>
                <div className="flex gap-3 border-t border-stone/15 pt-4">
                  <Truck size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-stone">
                    <strong className="block text-ink">Delivery in {store.city}</strong>
                    {store.deliveryInformation}
                  </p>
                </div>
                <div className="flex gap-3 border-t border-stone/15 pt-4">
                  <PackageCheck size={18} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-stone">
                    <strong className="block text-ink">Reservations</strong>
                    {store.reservationInformation}
                  </p>
                </div>
              </div>

              <Link
                to="/shop"
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-maroon hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-stone/10 bg-cream py-12 sm:py-14" aria-labelledby="related-heading">
          <div className="mx-auto max-w-content px-4 sm:px-6">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon">More to explore</p>
                <h2 className="mt-1 font-display text-3xl text-ink sm:text-4xl">You may also like</h2>
              </div>
              <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hidden text-sm font-semibold text-maroon hover:underline sm:block">
                View all {product.category}
              </Link>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  )
}
