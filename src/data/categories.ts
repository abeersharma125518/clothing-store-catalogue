export type Category = {
  id: number
  name: string
  slug: string
  image: string
  shortDescription: string
  featured: boolean
}

/**
 * Edit this list to change the categories shown across the site.
 * Product `category` values in products.ts should match these names exactly.
 */
export const categories: Category[] = [
  {
    id: 1,
    name: 'Sarees',
    slug: 'sarees',
    image: '/products/banarasi-silk-saree.webp',
    shortDescription: 'Banarasi, bandhani, chanderi and everyday cotton',
    featured: true,
  },
  {
    id: 2,
    name: 'Kurtis',
    slug: 'kurtis',
    image: '/products/embroidered-kurti.webp',
    shortDescription: 'Easy-to-wear pieces for every day and every festival',
    featured: true,
  },
  {
    id: 3,
    name: 'Suits',
    slug: 'suits',
    image: '/products/sharara-suit.webp',
    shortDescription: 'Palazzo, sharara and contemporary silhouettes',
    featured: true,
  },
  {
    id: 4,
    name: 'Lehengas',
    slug: 'lehengas',
    image: '/products/bridal-lehenga.webp',
    shortDescription: 'Wedding, reception and mehendi edits',
    featured: true,
  },
  {
    id: 5,
    name: "Men's Ethnic Wear",
    slug: 'mens-ethnic-wear',
    image: '/products/men-kurta-pyjama.webp',
    shortDescription: 'Kurta sets, jackets and festive essentials',
    featured: true,
  },
  {
    id: 6,
    name: 'Dupattas',
    slug: 'dupattas',
    image: '/products/embroidered-dupatta.webp',
    shortDescription: 'The finishing touch for any outfit',
    featured: true,
  },
  {
    id: 7,
    name: 'Kurtas',
    slug: 'kurtas',
    image: '/products/straight-kurta-set.webp',
    shortDescription: 'Comfortable staples with thoughtful detailing',
    featured: true,
  },
  {
    id: 8,
    name: 'Kids Wear',
    slug: 'kids-wear',
    image: '/products/kids-lehenga.webp',
    shortDescription: 'Small outfits for big celebrations',
    featured: true,
  },
  {
    id: 9,
    name: 'Wedding Collection',
    slug: 'wedding-collection',
    image: '/products/reception-lehenga.webp',
    shortDescription: 'An edited selection for the big days',
    featured: false,
  },
  {
    id: 10,
    name: 'Festive Collection',
    slug: 'festive-collection',
    image: '/products/festive-kurta.webp',
    shortDescription: 'Diwali, Rangpanchami and every celebration in between',
    featured: false,
  },
]

export const categoryNames = categories.map((category) => category.name)

export const occasions = [
  'Wedding',
  'Festive',
  'Everyday',
  'Casual',
  'Party',
] as const

export type Occasion = (typeof occasions)[number]
