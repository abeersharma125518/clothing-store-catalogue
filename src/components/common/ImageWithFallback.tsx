import { useEffect, useState } from 'react'
import { ImageOff } from 'lucide-react'
import { assetUrl } from '../../utils/assets'

type Props = {
  src: string
  alt: string
  smallSrc?: string
  sizes?: string
  className?: string
  imgClassName?: string
  aspect?: string
  eager?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  smallSrc,
  sizes = '(max-width: 640px) 100vw, 33vw',
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/5]',
  eager = false,
}: Props) {
  const [failed, setFailed] = useState(false)
  const imageSrc = assetUrl(src)
  const imageSmallSrc = smallSrc ? assetUrl(smallSrc) : undefined

  useEffect(() => setFailed(false), [imageSrc])

  return (
    <div className={`relative overflow-hidden bg-sand ${aspect} ${className}`}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-stone">
          <ImageOff size={26} strokeWidth={1.5} aria-hidden="true" />
          <span className="text-xs font-medium leading-snug">Image unavailable</span>
        </div>
      ) : (
        <img
          src={imageSrc}
          srcSet={imageSmallSrc ? `${imageSmallSrc} 360w, ${imageSrc} 720w` : undefined}
          sizes={imageSmallSrc ? sizes : undefined}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none ${imgClassName}`}
        />
      )}
    </div>
  )
}
