import React from 'react'
import { NavLink } from "react-router-dom"
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'

const Hero = () => {
  return (
    <>
    <Navbar />
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Design The Home of  Your Dreams</h1>
            <p>The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized, meaningful environment, not about fashion or what's in or what's out.</p>
            <button className='btn'><NavLink to="/Explore">Explore More</NavLink></button>
        </div>
    </div>
    <Home />
    <Footer />
    </>
  )
}

export default Hero