import { useState } from 'react'
import { store } from '../../data/store'
import { assetUrl } from '../../utils/assets'
import ImageWithFallback from '../common/ImageWithFallback'

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0)
  const gallery = images.length > 0 ? images : ['']

  return (
    <div>
      <ImageWithFallback
        src={gallery[active]}
        smallSrc={gallery[active] ? gallery[active].replace(/\.webp$/, '-sm.webp') : undefined}
        alt={`${name} — view ${active + 1} of ${gallery.length}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        aspect="aspect-[4/5]"
        eager
        className="rounded-2xl"
      />

      {store.demoMode && (
        <p className="mt-2 text-[10px] leading-relaxed text-stone">
          Demo gallery images are representative — replace with real product views.
        </p>
      )}

      {gallery.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1" role="group" aria-label="Product images">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1} of ${name}`}
              aria-pressed={active === index}
              className={`h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
                active === index ? 'border-maroon' : 'border-transparent hover:border-stone/30'
              }`}
            >
              {image ? (
                <img src={assetUrl(image)} alt="" loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full bg-sand" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
