import { MessageSquareQuote } from 'lucide-react'
import { store } from '../../data/store'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../common/SectionHeading'

export default function Reviews() {
  return (
    <section className="bg-white py-14 sm:py-16" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title={store.demoMode ? 'Reviews Coming Soon' : 'What Customers Say'}
          description={store.demoMode
            ? 'Real customer reviews will appear here once available. No invented ratings or testimonials.'
            : 'Feedback from customers who have shopped with us.'}
          action={
            <div className="flex flex-wrap items-center gap-3">
              {store.demoMode && (
                <span className="rounded-full border border-dashed border-stone/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone">
                  Demo placeholders
                </span>
              )}
              {store.googleBusinessUrl && (
                <a
                  href={store.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-maroon/30 px-5 py-2.5 text-sm font-semibold text-maroon"
                >
                  See all Google Reviews
                </a>
              )}
            </div>
          }
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-2xl border border-dashed border-stone/25 bg-cream/60 p-5">
              <MessageSquareQuote size={20} className="text-maroon/60" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-ink">{testimonial.quote}</p>
              <p className="mt-4 text-xs font-medium text-stone">{testimonial.name}</p>
              {store.demoMode && testimonial.isPlaceholder && (
                <span className="mt-3 inline-block rounded-full bg-sand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-stone">
                  Demo placeholder
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
