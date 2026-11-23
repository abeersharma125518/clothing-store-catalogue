import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../data/products'
import { store } from '../../data/store'
import ProductGrid from '../products/ProductGrid'
import SectionHeading from '../common/SectionHeading'
import { useLanguage } from '../../context/LanguageContext'

export default function FeaturedProducts() {
  const { t } = useLanguage()
  const featured = products.filter((product) => product.featured).slice(0, 8)

  return (
    <section className="bg-cream py-14 sm:py-16" aria-labelledby="best-sellers-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="The edit"
          title={t('bestSellers')}
          description={store.demoMode
            ? 'A small selection of styles from the demo catalogue. Ask us what is actually in store today.'
            : 'A small selection of styles we think you will like. Ask us what is available today.'}
          action={
            <Link
              to="/shop"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-maroon/30 px-5 py-2.5 text-sm font-semibold text-maroon hover:bg-maroon/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              View all pieces
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <ProductGrid products={featured} />
        <p className="mt-6 text-center text-[11px] leading-relaxed text-stone sm:text-xs">
          {store.demoMode && 'Demo catalogue — sample products and photographs. '}
          {store.priceDisclaimer}
        </p>
      </div>
    </section>
  )
}
