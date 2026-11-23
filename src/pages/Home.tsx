import Hero from '../components/sections/Hero'
import FeaturedCategories from '../components/sections/FeaturedCategories'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import TrustSection from '../components/sections/TrustSection'
import StoreVisit from '../components/sections/StoreVisit'
import ParkingGuide from '../components/sections/ParkingGuide'
import DeliveryBanner from '../components/sections/DeliveryBanner'
import VideoShopping from '../components/sections/VideoShopping'
import ReservationSection from '../components/sections/ReservationSection'
import Lookbook from '../components/sections/Lookbook'
import Reviews from '../components/sections/Reviews'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'
import { homeDescription, useSeo } from '../utils/seo'
import { store } from '../data/store'

export default function Home() {
  useSeo(`Ethnic Wear Shop in ${store.area}, ${store.city}`, homeDescription)

  return (
    <main id="main-content">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <TrustSection />
      <StoreVisit />
      <ParkingGuide />
      <DeliveryBanner />
      <VideoShopping />
      <ReservationSection />
      <Lookbook />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
