import { useEffect, useState } from 'react'
import { ImageOff } from 'lucide-react'

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

  useEffect(() => setFailed(false), [src])

  return (
    <div className={`relative overflow-hidden bg-sand ${aspect} ${className}`}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-stone">
          <ImageOff size={26} strokeWidth={1.5} aria-hidden="true" />
          <span className="text-xs font-medium leading-snug">Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          srcSet={smallSrc ? `${smallSrc} 360w, ${src} 720w` : undefined}
          sizes={smallSrc ? sizes : undefined}
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
