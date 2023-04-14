import React from 'react'
import Navbar from '../Components/Pages/Navbar'
import Hero from '../Components/Hero';
import ServiceImage from "../Asset/night.jpg"
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={ServiceImage}
        title="Service"

      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service