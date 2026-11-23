import { store } from '../data/store'
import type { Product } from '../data/products'

/** Every WhatsApp call-to-action in the app goes through this helper. */
export function generateWhatsAppLink(message: string): string {
  const number = store.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function productEnquiryMessage(product: Product): string {
  return `Hi, I saw the ${product.name} #${product.id} on your website. Is it available?`
}

export function productEnquiryLink(product: Product): string {
  return generateWhatsAppLink(productEnquiryMessage(product))
}

export function openWhatsApp(message: string): void {
  window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer')
}
