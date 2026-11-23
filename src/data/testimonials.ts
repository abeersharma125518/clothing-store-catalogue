export type Testimonial = {
  id: number
  name: string
  quote: string
  isPlaceholder: boolean
}

/**
 * PLACEHOLDER REVIEWS ONLY.
 * Do not replace these with invented customer quotes. Insert genuine reviews
 * from the shop's Google Business Profile or real, permissioned feedback.
 */
export const testimonials: Testimonial[] = [
  { id: 1, name: 'Customer review pending', quote: 'Customer review will appear here.', isPlaceholder: true },
  { id: 2, name: 'Customer review pending', quote: 'Customer review will appear here.', isPlaceholder: true },
  { id: 3, name: 'Customer review pending', quote: 'Customer review will appear here.', isPlaceholder: true },
  { id: 4, name: 'Customer review pending', quote: 'Customer review will appear here.', isPlaceholder: true },
]
