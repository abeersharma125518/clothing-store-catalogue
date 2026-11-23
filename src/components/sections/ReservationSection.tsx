import { Link } from 'react-router-dom'
import { BookmarkCheck } from 'lucide-react'
import { store } from '../../data/store'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage } from '../../context/LanguageContext'

const message = `Hi ${store.storeName}, I'd like to enquire about [PRODUCT NAME]. Please let me know if it is available.`

export default function ReservationSection() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-stone/15 bg-white py-10 sm:py-12" aria-labelledby="reservation-heading">
      <div className="mx-auto grid max-w-content items-center gap-5 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <BookmarkCheck size={26} strokeWidth={1.5} className="text-maroon" aria-hidden="true" />
        <div>
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{t('holdItForMe')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
            Found something you love? Send us the product name and we'll check if we can keep it aside for you.{' '}
            <Link to="/shop" className="font-semibold text-maroon hover:underline">Browse the collection</Link>.
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-stone">{store.reservationInformation}</p>
        </div>
        <WhatsAppButton message={message} variant="outline" className="min-h-12 w-full sm:w-auto">
          Request a Hold
        </WhatsAppButton>
      </div>
    </section>
  )
}
