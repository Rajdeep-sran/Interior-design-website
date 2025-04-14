import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import about_img1 from '../../assets/about1.png'
import about_img2 from '../../assets/about2.png'


const About = () => {
  return (
    <>
    <Navbar />
    <div className='aboutpage'>
        <h1><br />About Us</h1>
    </div>

      <div className='about'>

        <div className="about-left1">
          <img src={about_img1} alt="" className='about-img'/>
        </div>
        
        <div className="about-right1">
          <h1>Designing Dreams—<br />
          Revamping Spaces</h1><br />
          <p>Welcome to Elegance Interiors, where each design we create has a unique narrative. At Elegance Interiors Pvt Ltd – EIPL , we believe that beauty should be a luxury available to all as life’s basic necessity. We elevate ordinary spaces into exceptional, functional works of art. Grace & elegance are not just sentiments to strive for, rather they need to be embodied in all the things around us. Knowing this, we simply answer the inner calling of those who want to live artistically & in beautiful spaces that enhance the sense of being.</p><br />
          <p>EIPL embodies global refinement & an indigenous design sense reflective of contemporary & classic designs from the world where end user preferences still remain at the forefront. We are premier design & build company. EIPL is the most innovative serving everything from interior architectural services to manufacturing of bespoke pieces.</p><br />
          <p>Our approach blends high-end construction techniques with meticulous attention to detail, yielding sophisticated yet practical results. At Jasmine Interiors, you’re not merely a client—you’re a vital part of our creative process. We want to hear your story, your aspirations, and your unique sense of style. After all, it’s your home, and we’re here to make it truly yours!</p>
        </div>

      </div>
       

      <div className='about'>

<div className="about-right1">
  <p>We came into being in 2012 with the object of carrying out the business of design, turnkey build solution, manufacturing and supplying furniture, wardrobes, millwork along with decor accessories to their discerning clients.</p><br />
  <p>For almost than a decade  now the company has been designing and building dream spaces for its patrons and has in the process not just redefined elegant luxury but has also created lifelong relationships that remain the core strength of the firm.</p><br />
  <p>An extremely original & personal signature characterises our brand, which is synonymous with innovation, style and sophistication. We consciously try to design spaces that are clean and clutter free. we enhance the given positives of a site and try to camouflage the negatives. Above all, we strive for simplicity and that is what adds sophistication to our work. We intend to literally transform the lives of our patrons by providing a space that is wondrous, comfortable, yet practical with the only constant being luxury & elegance.</p><br />
  <p>Collaborate with us to craft the extraordinary! Get in touch to bring your unique interior designing vision to life</p>
</div>

<div className="about-left1">
  <img src={about_img2} alt="" className='about-img2'/>
</div>

</div>
    <Footer />
    </>
  )
}

export default About