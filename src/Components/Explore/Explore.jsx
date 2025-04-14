import React from 'react'
import './Explore.css'
import { NavLink } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Explore = () => {
  return (
    <>
    <Navbar />
    <div className='explorepage'>
        
        <div className='explore-btns'>
        <div><h1><br />Explore About</h1><br /></div>
        <div className='exp-buttons'>
        <button className='btn'><NavLink to="/Team"><p>The team</p></NavLink></button>
        <button className='btn'><NavLink to="/reviews"><p>Reviews</p></NavLink></button>
        <button className='btn'><NavLink to="/faq"><p>FAQ</p></NavLink></button>
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Explore
