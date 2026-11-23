import { useEffect } from 'react'
import { store } from '../data/store'

const SITE_TITLE = store.storeName

export function pageTitle(title: string): string {
  return `${title} | ${SITE_TITLE}`
}

/** Lightweight per-page SEO: no router integration or heavy dependency needed. */
export function useSeo(title: string, description: string): void {
  useEffect(() => {
    document.title = pageTitle(title)

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${window.location.pathname}`
  }, [title, description])
}

export const homeDescription =
  `Shop curated ethnic wear in ${store.area}, ${store.city}. Browse sarees, kurtas, suits, lehengas and festive collections. WhatsApp us to check availability.`

export const shopDescription =
  `Browse indicative price ranges for sarees, kurtis, suits, lehengas and men's ethnic wear at ${store.storeName} in ${store.area}, ${store.city}. WhatsApp us to check real availability and exact prices.`

/**
 * LocalBusiness JSON-LD. Disabled by default while store details are placeholders.
 * Set `structuredDataEnabled: true` in store.ts only after verifying the details.
 */
export function getLocalBusinessJsonLd(): string | null {
  if (!store.structuredDataEnabled || store.demoMode) return null

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: store.storeName,
    description: store.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: store.state,
      postalCode: store.pincode,
      addressCountry: 'IN',
    },
    url: window.location.origin,
  }

  if (!store.demoMode && store.phone) data.telephone = store.phone
  if (store.googleBusinessUrl) data.sameAs = [store.googleBusinessUrl, store.instagramUrl]

  return JSON.stringify(data)
}
