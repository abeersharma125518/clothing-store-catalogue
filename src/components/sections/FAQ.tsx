import { store } from '../../data/store'
import SectionHeading from '../common/SectionHeading'
import WhatsAppButton from '../common/WhatsAppButton'
import { useLanguage } from '../../context/LanguageContext'

const faqMessage = `Hi ${store.storeName}, I have a question about your collection.`

const faqs = [
  {
    question: 'Are the prices on the website final?',
    answer: `${store.priceDisclaimer} We do not show live stock pricing online.`,
  },
  {
    question: 'How do I check if a product is available?',
    answer: `Tap "Ask Price / Check Stock" on any product. It opens WhatsApp with the product name and number filled in, so the store can check availability. ${store.reservationInformation}`,
  },
  {
    question: `Can you deliver within ${store.city}?`,
    answer: store.deliveryInformation,
  },
  {
    question: 'Can I book a video call before visiting?',
    answer: `${store.videoShoppingInformation} To request one, use the Book Video Shopping button and share your preferred time.`,
  },
  {
    question: 'What are the store timings?',
    answer: `Open ${store.openingHours}, ${store.weeklyOff} off. Please confirm on WhatsApp before travelling, especially around festivals.`,
  },
  {
    question: `Where should I park near ${store.area}?`,
    answer: store.parkingInformation.verifiedDate
      ? `${store.parkingInformation.nearestParking} — about ${store.parkingInformation.walkingTime} away. Parking information last verified: ${store.parkingInformation.verifiedDate}.`
      : 'Parking information has not been verified yet. WhatsApp us and we will suggest the easiest route for your visit.',
  },
]

export default function FAQ() {
  const { t } = useLanguage()

  return (
    <section className="bg-cream py-14 sm:py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently Asked Questions"
          description="Still unsure about something? We are one WhatsApp message away."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div className="divide-y divide-stone/15 overflow-hidden rounded-2xl border border-stone/10 bg-white px-5 sm:px-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-xl font-light text-maroon transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-stone">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="h-fit rounded-2xl bg-wine p-6 text-cream">
            <h3 className="font-display text-2xl leading-tight">Have a different question?</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">
              Our team can help with sizing, colours, availability, delivery and directions.
            </p>
            <WhatsAppButton message={faqMessage} variant="solid" className="mt-5 min-h-12 w-full">
              {t('askWhatsapp')}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
