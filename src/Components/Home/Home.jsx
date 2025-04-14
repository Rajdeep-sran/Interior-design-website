import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import gallery_1 from '../../assets/image1.png'
import gallery_2 from '../../assets/image2.png'
import gallery_3 from '../../assets/image3.png'
import gallery_4 from '../../assets/image4.png'
import gallery_5 from '../../assets/image5.png'
import gallery_6 from '../../assets/image6.png'
import gallery_7 from '../../assets/image7.png'

const Home = () => {
  
  return (
    <>
    <Navbar />
    <div className='home'>
        {/* <Title subTitle='Gallery' title='Campus Photos' /> */}
      <h1>Our Gallery</h1>
      <div className='gallery'>
        <img src={gallery_4} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_1} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
      </div>
      <p>From sleek minimalism to regal extravagance, we offer diverse expressions of aesthetics and design, each capturing a unique essence and personal taste.</p>
      <div className='home-numbers'>
        <div>
          <h1>100+</h1>
          <h3>Furniture Brands</h3>
        </div>
        <div>
          <h1>80+</h1>
          <h3>Lighting Brands</h3>
        </div>
        <div>
          <h1>120+</h1>
          <h3>Furnishing Brands</h3>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home