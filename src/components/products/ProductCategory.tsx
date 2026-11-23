import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Category } from '../../data/categories'
import ImageWithFallback from '../common/ImageWithFallback'

export default function ProductCategory({ category }: { category: Category }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
    >
      <ImageWithFallback
        src={category.image}
        smallSrc={category.image.replace(/\.webp$/, '-sm.webp')}
        alt={`${category.name} collection`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        aspect="aspect-[4/5]"
        imgClassName="group-hover:scale-105 motion-reduce:group-hover:scale-100"
        className="rounded-xl"
      />
      <div className="pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg text-ink sm:text-xl">{category.name}</h3>
          <ArrowRight
            size={16}
            className="text-maroon transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </div>
        <p className="mt-0.5 text-xs leading-snug text-stone">{category.shortDescription}</p>
      </div>
    </Link>
  )
}
