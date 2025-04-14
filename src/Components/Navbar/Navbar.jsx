import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom"
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const[sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[])



  return (
  <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div  className='name'>
          <img src={logo} alt="" className='logo' />
          <h3>Elegance</h3>
        </div>
        <ul>
            <li><button className='navbtn'><NavLink to="/">HOME</NavLink></button></li>

            <li><button className='navbtn'><NavLink to="/About">ABOUT</NavLink></button></li>
            
            <li><button className='navbtn'><NavLink to="/Projects">PROJECTS</NavLink></button></li>
            <li><button className='navbtn'><NavLink to="/Services">SERVICES</NavLink></button></li>
            <li><button className='navbtn'><NavLink to="/Contact">CONTACT US</NavLink></button></li>
        </ul>
    </nav>
  )
}

export default Navbar