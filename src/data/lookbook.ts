export type LookbookItem = {
  id: number
  title: string
  subtitle: string
  image: string
  productSlug: string
}

/** Replace demo images with real in-store or styled photographs when available. */
export const lookbookItems: LookbookItem[] = [
  {
    id: 1,
    title: 'Shaadi Picks',
    subtitle: 'Wedding edits',
    image: '/images/lookbook-1.webp',
    productSlug: 'banarasi-silk-saree',
  },
  {
    id: 2,
    title: 'Festive Picks',
    subtitle: 'Celebration-ready',
    image: '/images/lookbook-2.webp',
    productSlug: 'bridal-lehenga',
  },
  {
    id: 3,
    title: 'Diwali Picks',
    subtitle: 'Light-filled evenings',
    image: '/images/lookbook-3.webp',
    productSlug: 'festive-embroidered-suit',
  },
  {
    id: 4,
    title: 'Rangpanchami Picks',
    subtitle: 'Colourful days',
    image: '/images/lookbook-4.webp',
    productSlug: 'bandhani-saree',
  },
  {
    id: 5,
    title: 'Everyday Elegance',
    subtitle: 'Comfortable staples',
    image: '/images/lookbook-5.webp',
    productSlug: 'mens-festive-kurta-pyjama',
  },
  {
    id: 6,
    title: 'Gifting Picks',
    subtitle: 'Thoughtful little things',
    image: '/images/lookbook-6.webp',
    productSlug: 'embroidered-dupatta',
  },
]
