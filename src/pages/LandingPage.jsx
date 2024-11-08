import React from 'react'
import HeroComp from '../components/HeroComp'
import WeTakeCareComp from '../components/WeTakeCareComp'
import ServicesOfferComp from '../components/ServicesOfferComp'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import PricingComp from '../components/PricingComp'

const LandingPage = () => {
  return (
    <>
    <HeroComp />
    <ServicesOfferComp />
    <WeTakeCareComp />
    {/* <PricingComp /> */}
    <AboutUs />
    <ContactUs />
    </>
  )
}

export default LandingPage