import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { store } from '../data/store'

export type Language = 'en' | 'hi'

const translations = {
  en: {
    home: 'Home',
    shop: 'Shop',
    categories: 'Categories',
    visitStore: 'Visit Store',
    contact: 'Contact',
    about: 'About',
    lookbook: 'Lookbook',
    askWhatsapp: 'Ask on WhatsApp',
    checkAvailability: 'Check Availability',
    getDirections: 'Get Directions',
    openingHours: 'Opening Hours',
    bookVideoShopping: 'Book Video Shopping',
    holdItForMe: 'Hold It For Me',
    browseCollection: 'Browse Collection',
    heroSubtitle: `Curated ethnic wear in the heart of ${store.area}, ${store.city}.`,
    featuredCategories: 'Shop by category',
    bestSellers: 'Featured styles',
    whyUs: 'Why shop with us',
    viewDetails: 'View Details',
    askPriceStock: 'Ask Price / Check Stock',
    pricesIndicative: 'Prices shown are indicative. Please WhatsApp us for current availability and exact pricing.',
    search: 'Search outfits, categories...',
    all: 'All',
    sort: 'Sort',
    noResults: 'No pieces matched your search.',
    clearFilters: 'Clear filters',
    directions: 'Directions',
    demoCatalogue: 'Demo catalogue — sample products and photographs for preview only.',
  },
  hi: {
    home: 'होम',
    shop: 'शॉप',
    categories: 'श्रेणियाँ',
    visitStore: 'दुकान देखें',
    contact: 'संपर्क',
    about: 'हमारे बारे में',
    lookbook: 'लुकबुक',
    askWhatsapp: 'WhatsApp पर पूछें',
    checkAvailability: 'उपलब्धता जांचें',
    getDirections: 'रास्ता देखें',
    openingHours: 'खुलने का समय',
    bookVideoShopping: 'वीडियो शॉपिंग बुक करें',
    holdItForMe: 'मेरे लिए रखें',
    browseCollection: 'कलेक्शन देखें',
    heroSubtitle: `${store.area}, ${store.city} में चुना हुआ पारंपरिक परिधान।`,
    featuredCategories: 'श्रेणी अनुसार देखें',
    bestSellers: 'चुनी हुई शैलियाँ',
    whyUs: 'हमसे क्यों खरीदें',
    viewDetails: 'विवरण देखें',
    askPriceStock: 'कीमत / स्टॉक जानें',
    pricesIndicative: 'दिखाई गई कीमतें संकेतात्मक हैं। मौजूदा उपलब्धता और सही कीमत के लिए WhatsApp करें।',
    search: 'कपड़े, श्रेणियाँ खोजें...',
    all: 'सभी',
    sort: 'क्रम',
    noResults: 'आपकी खोज से कोई परिणाम नहीं मिला।',
    clearFilters: 'फ़िल्टर हटाएँ',
    directions: 'रास्ता',
    demoCatalogue: 'डेमो कैटलॉग — केवल पूर्वावलोकन के लिए नमूना उत्पाद और फ़ोटो।',
  },
} as const

export type TranslationKey = keyof typeof translations.en

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('storefront-language')
    return saved === 'hi' ? 'hi' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('storefront-language', language)
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'hi' : 'en')),
      t: (key) => translations[language][key] ?? translations.en[key] ?? key,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
