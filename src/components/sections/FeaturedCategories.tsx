import { categories } from '../../data/categories'
import ProductCategory from '../products/ProductCategory'
import SectionHeading from '../common/SectionHeading'
import { useLanguage } from '../../context/LanguageContext'

export default function FeaturedCategories() {
  const { t } = useLanguage()
  const featured = categories.filter((category) => category.featured)

  return (
    <section className="bg-white py-14 sm:py-16" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Collections"
          title={t('featuredCategories')}
          description="From everyday comfort to your biggest celebration — start somewhere familiar."
        />
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4">
          {featured.map((category) => (
            <ProductCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
