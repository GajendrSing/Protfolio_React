import React from 'react'
import Navbar from '../Components/Pages/Navbar'
import Hero from '../Components/Hero';
import AboutImage from "../Asset/night.jpg"
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={AboutImage}
        title="About"

      />
      <AboutUs />
      <Footer />


    </>
  )
}

export default About