import { Truck } from 'lucide-react'
import { store } from '../../data/store'
import WhatsAppButton from '../common/WhatsAppButton'

const message = `Hi ${store.storeName}, do you offer local delivery in ${store.city}? Please share availability and charges.`

export default function DeliveryBanner() {
  return (
    <section className="border-y border-stone/15 bg-sand/30 py-10 sm:py-12" aria-labelledby="delivery-heading">
      <div className="mx-auto grid max-w-content items-center gap-5 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <Truck size={26} strokeWidth={1.5} className="text-maroon" aria-hidden="true" />
        <div>
          <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">Love Something? Ask About Delivery.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
            {store.deliveryInformation}
          </p>
        </div>
        <WhatsAppButton message={message} variant="solid" className="min-h-12 w-full sm:w-auto">
          Ask About Delivery
        </WhatsAppButton>
      </div>
    </section>
  )
}
