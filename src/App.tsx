import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileBottomBar, { BottomBarSpacer } from './components/layout/MobileBottomBar'
import WhatsAppButton from './components/common/WhatsAppButton'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import VisitStore from './pages/VisitStore'
import Contact from './pages/Contact'
import Lookbook from './pages/Lookbook'
import NotFound from './pages/NotFound'
import { getLocalBusinessJsonLd } from './utils/seo'
import { store } from './data/store'

const floatingMessage = `Hi ${store.storeName}, I have a question about your collection.`

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])
  return null
}

function LocalBusinessJsonLd() {
  const json = typeof window !== 'undefined' ? getLocalBusinessJsonLd() : null
  if (!json) return null
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <LocalBusinessJsonLd />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-wine focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/visit" element={<VisitStore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomBarSpacer />
      <Footer />
      <MobileBottomBar />
      <div className="fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-6">
        <WhatsAppButton message={floatingMessage} variant="floating" />
      </div>
    </div>
  )
}
