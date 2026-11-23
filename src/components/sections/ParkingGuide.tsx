import { AlertCircle, Clock3, Footprints, MapPin, Navigation } from 'lucide-react'
import { store } from '../../data/store'
import SectionHeading from '../common/SectionHeading'
import WhatsAppButton from '../common/WhatsAppButton'

const message = `Hi ${store.storeName}, I'm visiting ${store.area}. Could you suggest the easiest parking and walking route to the store?`

export default function ParkingGuide({ eyebrow = 'Getting here' }: { eyebrow?: string }) {
  const { parkingInformation: parking } = store

  const rows = [
    { icon: Navigation, label: 'Nearest parking', value: parking.nearestParking },
    { icon: Footprints, label: 'Walk to store', value: parking.walkingTime },
    { icon: Clock3, label: 'Best visiting hours', value: parking.bestVisitingHours },
    { icon: AlertCircle, label: 'Traffic note', value: parking.trafficWarning },
    { icon: MapPin, label: 'Landmark', value: parking.landmarkInstructions },
  ]

  const visibleRows = store.demoMode
    ? rows
    : rows.filter((row) => row.value && !row.value.includes('[') && !row.value.toLowerCase().includes('to be confirmed'))

  return (
    <section className="bg-cream py-14 sm:py-16" aria-labelledby="parking-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={`Coming to ${store.area}?`}
          description="Parking, walking time and landmarks — the short version, so you can shop comfortably."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="overflow-hidden rounded-2xl border border-stone/10 bg-white">
            {visibleRows.length > 0 ? (
              visibleRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex gap-4 px-5 py-3 sm:px-6 ${index !== visibleRows.length - 1 ? 'border-b border-stone/10' : ''}`}
                >
                  <row.icon size={19} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone">{row.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{row.value}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="px-5 py-5 text-sm leading-relaxed text-stone sm:px-6">
                Parking details will be confirmed by the store. Ask us for the easiest route before your visit.
              </p>
            )}
            {parking.verifiedDate ? (
              <p className="border-t border-stone/10 bg-sand/40 px-5 py-3 text-xs text-stone sm:px-6">
                Parking information last verified: {parking.verifiedDate}
              </p>
            ) : (
              <p className="border-t border-stone/10 bg-sand/40 px-5 py-3 text-xs leading-relaxed text-stone sm:px-6">
                Parking information has not been verified yet. Please confirm with the store before your visit.
              </p>
            )}
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-wine p-6 text-cream sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Reaching us</p>
              <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">Follow the landmark, then ask us if you need help.</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/80">
                {store.landmarkInstructions}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <WhatsAppButton message={message} variant="solid" className="min-h-12">
                Ask for the best route
              </WhatsAppButton>
              <p className="text-xs text-cream/65">Need help finding us? Send us a quick WhatsApp message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
