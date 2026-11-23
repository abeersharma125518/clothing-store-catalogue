type Props = {
  min: number
  max: number
  className?: string
}

const format = (value: number) => new Intl.NumberFormat('en-IN').format(value)

export default function PriceRange({ min, max, className = '' }: Props) {
  return (
    <span className={`font-medium tabular-nums ${className}`} aria-label={`Price range ₹${format(min)} to ₹${format(max)}`}>
      ₹{format(min)} – ₹{format(max)}
    </span>
  )
}
