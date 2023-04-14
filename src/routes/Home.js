import React from 'react'
import Navbar from '../Components/Pages/Navbar';
import Hero from '../Components/Hero';
import CarImage from "../Asset/12.jpg"
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';

function Home() {
  return (
   <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImage={CarImage}
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
   
    </>
  )
}

export default Home;