import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import { occasions } from '../data/categories'
import { store } from '../data/store'
import ProductGrid from '../components/products/ProductGrid'
import SectionHeading from '../components/common/SectionHeading'
import FinalCTA from '../components/sections/FinalCTA'
import { useLanguage } from '../context/LanguageContext'
import { shopDescription, useSeo } from '../utils/seo'

const categoryOptions = Array.from(new Set(products.map((product) => product.category)))
type SortKey = 'featured' | 'price-low' | 'price-high' | 'name'

export default function Shop() {
  const { t } = useLanguage()
  useSeo(`Shop Ethnic Wear in ${store.area}, ${store.city}`, shopDescription)

  const [params, setParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const category = params.get('category') ?? ''
  const occasion = params.get('occasion') ?? ''
  const query = params.get('q') ?? ''
  const sort = (params.get('sort') ?? 'featured') as SortKey
  const activeFilters = [category, occasion, query].filter(Boolean).length

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const clearFilters = () => setParams(new URLSearchParams(), { replace: true })

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    const result = products.filter((product) => {
      const matchesCategory = !category || product.category === category
      const matchesOccasion = !occasion || product.occasion === occasion
      const matchesQuery =
        !term ||
        [product.name, product.category, product.subcategory, product.occasion, ...product.tags]
          .join(' ')
          .toLowerCase()
          .includes(term)
      return matchesCategory && matchesOccasion && matchesQuery
    })

    switch (sort) {
      case 'price-low':
        return result.sort((a, b) => a.priceMin - b.priceMin)
      case 'price-high':
        return result.sort((a, b) => b.priceMax - a.priceMax)
      case 'name':
        return result.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return result.sort((a, b) => Number(b.featured) - Number(a.featured) || a.id - b.id)
    }
  }, [category, occasion, query, sort])

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12">
          <SectionHeading
            titleAs="h1"
            eyebrow="Catalogue"
            title="Shop the Collection"
            description="Browse by category, occasion or a quick search. Every price is an indicative range — confirm today's piece and price on WhatsApp."
          />

          {store.demoMode && (
            <p className="mb-6 border-l-2 border-maroon/30 pl-3 text-[11px] leading-relaxed text-stone sm:text-xs">
              {t('demoCatalogue')} These are not claims about real stock.
            </p>
          )}

          <div className="mb-6">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">{t('search')}</span>
                <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => updateParam('q', event.target.value)}
                  placeholder={t('search')}
                  className="min-h-12 w-full rounded-full border border-stone/20 bg-cream/50 pl-11 pr-4 text-sm text-ink placeholder:text-stone/70 focus:border-maroon focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon/10"
                />
              </label>

              <button
                type="button"
                onClick={() => setFiltersOpen((open) => !open)}
                aria-expanded={filtersOpen}
                aria-controls="shop-filters"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone/20 bg-white px-5 text-sm font-semibold text-ink lg:hidden"
              >
                <SlidersHorizontal size={17} aria-hidden="true" />
                Filters
                {activeFilters > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1.5 text-[10px] text-cream">
                    {activeFilters}
                  </span>
                )}
              </button>

              <label className="hidden items-center gap-2 sm:flex lg:w-56">
                <span className="sr-only">{t('sort')}</span>
                <select
                  value={sort}
                  onChange={(event) => updateParam('sort', event.target.value)}
                  className="min-h-12 w-full rounded-full border border-stone/20 bg-white px-4 text-sm font-medium text-ink focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/10"
                >
                  <option value="featured">Featured first</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </label>
            </div>

            <div id="shop-filters" className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="mt-4 space-y-4 rounded-xl border border-stone/15 bg-cream/50 p-4 lg:mt-5 lg:p-5">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone">Category</p>
                  <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                    <button type="button" onClick={() => updateParam('category', '')} className={`${chipClass(!category)} shrink-0`}>
                      {t('all')}
                    </button>
                    {categoryOptions.map((item) => (
                      <button key={item} type="button" onClick={() => updateParam('category', item)} className={`${chipClass(category === item)} shrink-0`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone">Occasion</p>
                  <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                    <button type="button" onClick={() => updateParam('occasion', '')} className={`${chipClass(!occasion)} shrink-0`}>
                      {t('all')}
                    </button>
                    {occasions.map((item) => (
                      <button key={item} type="button" onClick={() => updateParam('occasion', item)} className={`${chipClass(occasion === item)} shrink-0`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-2 sm:hidden">
                  <span className="sr-only">{t('sort')}</span>
                  <select
                    value={sort}
                    onChange={(event) => updateParam('sort', event.target.value)}
                    className="min-h-11 w-full rounded-full border border-stone/20 bg-white px-4 text-sm font-medium text-ink"
                  >
                    <option value="featured">Featured first</option>
                    <option value="price-low">Price: low to high</option>
                    <option value="price-high">Price: high to low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-between gap-4 border-t border-stone/10 pt-4">
            <p className="text-sm text-stone" role="status">
              <span className="font-semibold text-ink">{filtered.length}</span> {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            {(category || occasion || query) && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-maroon hover:bg-maroon/5"
              >
                <X size={14} aria-hidden="true" />
                {t('clearFilters')}
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <ProductGrid products={filtered} />
          ) : (
            <div className="rounded-xl border border-dashed border-stone/25 bg-cream/50 px-5 py-14 text-center">
              <p className="font-display text-2xl text-ink">Nothing here yet</p>
              <p className="mt-2 text-sm text-stone">{t('noResults')} Try another category or ask us on WhatsApp.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-wine px-6 py-2.5 text-sm font-semibold text-cream"
              >
                {t('clearFilters')}
              </button>
            </div>
          )}

          <p className="mt-7 text-center text-xs leading-relaxed text-stone">{store.priceDisclaimer}</p>
        </div>
      </div>
      <FinalCTA />
    </main>
  )
}

function chipClass(active: boolean) {
  return `min-h-9 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
    active
      ? 'border-wine bg-wine text-cream'
      : 'border-stone/20 bg-white text-stone hover:border-maroon hover:text-maroon'
  }`
}
