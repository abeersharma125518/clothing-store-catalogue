import { Clock, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { store } from '../data/store'
import WhatsAppButton from '../components/common/WhatsAppButton'
import SectionHeading from '../components/common/SectionHeading'
import FinalCTA from '../components/sections/FinalCTA'
import { useSeo } from '../utils/seo'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../utils/whatsapp'

export default function Contact() {
  const { t } = useLanguage()
  useSeo(`Contact Us — ${store.area}, ${store.city}`, `Contact ${store.storeName} in ${store.area}, ${store.city} via WhatsApp, get directions, opening hours and store details.`)

  const quickMessages = [
    { label: 'Check availability', message: `Hi ${store.storeName}, could you check availability for a product I saw on your website?` },
    { label: 'Ask about price', message: `Hi ${store.storeName}, could you share the current price range for the outfit I liked?` },
    { label: 'Book video shopping', message: `Hi ${store.storeName}, I'd like to know more about video shopping. Please share available slots.` },
    { label: 'Ask about delivery', message: `Hi ${store.storeName}, do you offer local delivery in ${store.city}? Please share charges.` },
  ]

  return (
    <main id="main-content">
      <div className="bg-white">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
          <SectionHeading
            titleAs="h1"
            eyebrow="Get in touch"
            title="We're One Message Away"
            description="WhatsApp is a convenient way to reach us. We can also help with directions, store timings and video shopping."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div className="space-y-4">
              <div className="rounded-2xl border border-stone/10 bg-cream/60 p-5 sm:p-6">
                <div className="space-y-5 text-sm leading-relaxed text-ink">
                  <p className="flex gap-3">
                    <MessageCircle size={19} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-stone">WhatsApp</span>
                      <a href={generateWhatsAppLink(`Hi ${store.storeName}, hello!`)} target="_blank" rel="noopener noreferrer" title={store.demoMode ? 'Demo preview — replace the WhatsApp number in store.ts before launch' : undefined} className="font-medium text-maroon hover:underline">
                        Chat with the store
                      </a>
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Phone size={19} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-stone">Phone</span>
                      <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="font-medium">{store.phone}</a>
                      {store.demoMode && <span className="block text-xs text-stone">Placeholder number — replace before launch.</span>}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <MapPin size={19} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-stone">Visit</span>
                      {store.address}, {store.city}, {store.state} {store.pincode}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Clock size={19} className="mt-0.5 shrink-0 text-maroon" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-stone">{t('openingHours')}</span>
                      {store.openingHours} · {store.weeklyOff} off
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <WhatsAppButton message={`Hi ${store.storeName}, hello!`} variant="solid" className="min-h-12 w-full">
                    {t('askWhatsapp')}
                  </WhatsAppButton>
                  <a
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone/20 bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-maroon hover:text-maroon"
                  >
                    <MapPin size={17} aria-hidden="true" />
                    {t('getDirections')}
                  </a>
                  <a
                    href={store.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone/20 bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-maroon hover:text-maroon"
                  >
                    <Instagram size={17} aria-hidden="true" />
                    See us on Instagram
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">Start with a quick question</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Tap any option below — we will open WhatsApp with the message ready to send.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {quickMessages.map((item) => (
                  <WhatsAppButton
                    key={item.label}
                    message={item.message}
                    variant="outline"
                    className="min-h-14 !justify-start !px-5 text-left"
                  >
                    {item.label}
                  </WhatsAppButton>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-wine p-6 text-cream">
                <h3 className="font-display text-2xl">Prefer to see pieces in person?</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">
                  Walk into the store in {store.area} and our team will help you try options at your own pace.
                </p>
                <a
                  href={store.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center rounded-full bg-cream px-6 py-2.5 text-sm font-semibold text-wine"
                >
                  {t('getDirections')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </main>
  )
}
