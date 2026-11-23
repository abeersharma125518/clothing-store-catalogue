import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../data/products'
import ImageWithFallback from '../common/ImageWithFallback'
import PriceRange from '../common/PriceRange'
import WhatsAppButton from '../common/WhatsAppButton'
import { productEnquiryMessage } from '../../utils/whatsapp'
import { store } from '../../data/store'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage()
  const smallSrc = product.image.replace(/\.webp$/, '-sm.webp')

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone/15 bg-white transition-colors duration-300 hover:border-maroon/30 motion-reduce:transition-none">
      <Link
        to={`/product/${product.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
        aria-label={`View details for ${product.name}`}
      >
        <ImageWithFallback
          src={product.image}
          smallSrc={smallSrc}
          alt={`${product.name} — ${product.subcategory}${store.demoMode ? ' from the demo catalogue' : ''}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          aspect="aspect-[4/5]"
          imgClassName="group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </Link>

      <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-3 sm:px-4 sm:pb-4">
        <div className="mb-1 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.12em]">
          <span className="font-semibold text-maroon">{product.category}</span>
          <span className="truncate text-stone">{product.subcategory}</span>
        </div>

        <h3 className="font-display text-[1.15rem] leading-snug text-ink sm:text-xl">
          <Link to={`/product/${product.slug}`} className="hover:text-maroon focus-visible:outline-none">
            {product.name}
          </Link>
        </h3>

        <PriceRange min={product.priceMin} max={product.priceMax} className="mt-1.5 text-[15px] text-ink sm:text-base" />

        <div className="mt-auto pt-3">
          <WhatsAppButton
            message={productEnquiryMessage(product)}
            variant="solid"
            className="w-full !min-h-10 !px-2 !py-2 !text-[11px] sm:!text-xs"
            ariaLabel={`Ask price and check stock for ${product.name}`}
          >
            {t('askPriceStock')}
          </WhatsAppButton>
          <Link
            to={`/product/${product.slug}`}
            className="mt-2 inline-flex min-h-9 w-full items-center justify-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-stone transition-colors hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon sm:text-xs"
          >
            {t('viewDetails')}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
