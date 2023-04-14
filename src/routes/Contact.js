import React from 'react'
import Navbar from '../Components/Pages/Navbar'
import Hero from '../Components/Hero';
import ContactImage from "../Asset/2.jpg"
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';

function Contact() {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero-mid"
        heroImage={ContactImage}
        title="Contact"

      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact