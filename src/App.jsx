import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import About from "./pages/about";
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
// import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Team from './Components/Team/Team'
import ScrollToTop from './Components/scroll/ScrollToTop'
import FAQ from './Components/FAQ/FAQ'
import Reviews from './Components/Reviews/Reviews'
import Explore from './Components/Explore/Explore'


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        
        <Route path="/" element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Team" element={<Team />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="Reviews" element={<Reviews />}/>
        <Route path="Explore" element={<Explore />}/>
        
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App