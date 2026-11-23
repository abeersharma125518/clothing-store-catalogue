/**
 * CENTRAL STORE CONFIGURATION
 * ---------------------------
 * Replace every PLACEHOLDER value with real business details before launch.
 * Components must never hardcode phone numbers, address, hours or social links.
 *
 * `demoMode` controls the visible "demo content" notices on the catalogue.
 */

export type StoreConfig = {
  storeName: string
  tagline: string
  description: string
  phone: string
  whatsapp: string
  address: string
  city: string
  area: string
  state: string
  pincode: string
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  googleBusinessUrl?: string
  instagramUrl: string
  establishedYear: number | null
  openingHours: string
  weeklyOff: string
  landmarkInstructions: string
  parkingInformation: {
    nearestParking: string
    walkingTime: string
    bestVisitingHours: string
    trafficWarning: string
    landmarkInstructions: string
    verifiedDate: string | null
  }
  deliveryInformation: string
  videoShoppingInformation: string
  videoShoppingLocations: string[]
  reservationInformation: string
  acceptedPayments: string[]
  ownerName: string
  ownerImage: string
  storefrontImage: string
  interiorImage: string
  announcement: string
  priceDisclaimer: string
  /** Set false once real phone, address and hours have been confirmed. */
  demoMode: boolean
  /** Enable only when the business information above is factual and verified. */
  structuredDataEnabled: boolean
}

export const store: StoreConfig = {
  storeName: 'Rajwada Rang',
  tagline: 'Traditional Style. Personal Service.',
  description:
    'A neighbourhood clothing store in the heart of Rajwada, Indore, bringing together curated ethnic wear, personal styling help and a relaxed in-store shopping experience for families across the city.',
  phone: '+91 90000 00000', // PLACEHOLDER — replace with real phone number
  whatsapp: '919000000000', // PLACEHOLDER — digits only, with country code
  address: 'Shop [Number], Near [Landmark], Rajwada', // PLACEHOLDER
  city: 'Indore',
  area: 'Rajwada',
  state: 'Madhya Pradesh',
  pincode: '452001',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rajwada%2C+Indore', // PLACEHOLDER — replace with store pin
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Rajwada%2C+Indore&output=embed', // PLACEHOLDER
  googleBusinessUrl: undefined, // Add real Google Business Profile URL when available
  instagramUrl: 'https://www.instagram.com/', // PLACEHOLDER — replace with real profile
  establishedYear: null, // PLACEHOLDER — set only when confirmed
  openingHours: '11:00 AM – 8:30 PM', // PLACEHOLDER — confirm with shop owner
  weeklyOff: 'Monday', // PLACEHOLDER — confirm with shop owner
  landmarkInstructions:
    'Enter the lane opposite Gopal Mandir and walk approximately 20 metres. The store is next to [LANDMARK].', // PLACEHOLDER
  parkingInformation: {
    nearestParking: '[Nearest parking name — to be confirmed]',
    walkingTime: '[Walking time — to be confirmed]',
    bestVisitingHours: '[Best visiting hours — to be confirmed]',
    trafficWarning: '[Traffic note — to be confirmed]',
    landmarkInstructions: 'Look for [LANDMARK] near the entrance.', // PLACEHOLDER
    verifiedDate: null, // Set to e.g. "2026-11-23" only after on-ground verification
  },
  deliveryInformation:
    'Same-day local delivery may be available. WhatsApp us to confirm delivery availability and charges. Delivery partners and charges are arranged with the customer; actual courier or parcel charges apply.',
  videoShoppingInformation:
    "Customers from nearby cities can request a short video call to browse pieces with a member of our team.",
  videoShoppingLocations: ['Dewas', 'Ujjain', 'Mhow', 'Nearby cities'], // PLACEHOLDER — replace with real service area
  reservationInformation:
    "Send us a WhatsApp message with the product name and we'll confirm whether we can hold it for you. Reservations are subject to confirmation by the store.",
  acceptedPayments: ['UPI', 'Cards', 'Cash'], // PLACEHOLDER — confirm before launch
  ownerName: '[Owner name — to be added]',
  ownerImage: '/images/owner.webp',
  storefrontImage: '/images/storefront.webp',
  interiorImage: '/images/interior.webp',
  announcement: 'Personal styling help in-store  •  WhatsApp us before you visit',
  priceDisclaimer:
    'Prices shown are indicative. Please WhatsApp us for current availability and exact pricing.',
  demoMode: true,
  structuredDataEnabled: false,
}
