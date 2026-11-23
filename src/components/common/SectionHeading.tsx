import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  action?: ReactNode
  light?: boolean
  titleAs?: 'h1' | 'h2'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  light = false,
  titleAs = 'h2',
}: Props) {
  const Heading = titleAs
  const titleSize =
    titleAs === 'h1'
      ? 'text-[2.1rem] sm:text-4xl lg:text-[3rem]'
      : 'text-3xl sm:text-4xl lg:text-[2.6rem]'

  return (
    <div
      className={`mb-8 flex flex-col gap-4 sm:mb-10 ${
        align === 'center' ? 'items-center text-center' : 'items-start sm:flex-row sm:items-end sm:justify-between'
      }`}
    >
      <div className={align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${light ? 'text-gold' : 'text-maroon'}`}>
            {eyebrow}
          </p>
        )}
        <Heading className={`font-display leading-tight ${titleSize} ${light ? 'text-cream' : 'text-ink'}`}>
          {title}
        </Heading>
        {description && (
          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${light ? 'text-cream/75' : 'text-stone'}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
