import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  description?: string
}

export default function TrustBadge({ icon: Icon, title, description }: Props) {
  return (
    <div className="border-t border-stone/20 pt-4">
      <Icon size={20} strokeWidth={1.6} className="text-maroon" aria-hidden="true" />
      <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
      {description && <p className="mt-1 text-xs leading-relaxed text-stone">{description}</p>}
    </div>
  )
}
