import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import services_img1 from '../../assets/services1.png'
import services_img2 from '../../assets/services2.png'
import services_img3 from '../../assets/services3.png'
import services_img4 from '../../assets/services4.png'
import services_img5 from '../../assets/services5.png'
import services_img6 from '../../assets/services6.png'

const Services = () => {
  return (
    <>
    <Navbar />
    <div className='servicespage'>
        <h1>Services</h1>
    </div>
    <div className='Services-cardComp'>

      <ServicesCard number="01" title="Construction and Civil Renovation" subtitle="Leave the heavy lifting to us! Our civil work takes care of the basics, from plumbing to structural reinforcements. With us, you get a rock-solid foundation."/>

      <ServicesCard number="02" title="Luxury Furnishings" subtitle="Indulge in our well-curated collection of luxury furnishings. From custom sofas to elegant curtains, we have the finest pieces to adorn your space."/>

      <ServicesCard number="03" title="Turnkey Projects" subtitle="Why juggle contractors when you can have it all? Our turnkey projects cover everything from planning to final touches. We transform spaces while you sit back and relax."/>

      <ServicesCard number="04" title="Luxury Interiors" subtitle="Want interiors that make a statement? Our luxury designs are timeless & classy, infused with plush furnishings & chic lighting."/>

      <ServicesCard number="05" title="Design & Execution" subtitle="Got a vision? We can bring it to life. Our team handles everything from design & planning to execution, ensuring every detail is flawless."/>

      <ServicesCard number="06" title="Landscaping" subtitle="Why stop at interiors? Our landscaping service turns outdoor spaces into lush retreats. From gardens to patios, we create serene outdoor environments."/>

    </div>

    <div className='section2'>
      <div className='section2-left'>
        <img src={services_img1} alt="" className='section2-img'/>
      </div>
      <div className='section2-right'>
        <h2>01.</h2><br />
        <h3>Customised layouts according to our client’s vision</h3><br />
        <p>Our dedicated team of interior designers and skilled draftsmen collaborate closely with you to recommend designs and create layouts tailored to your space. We partner seamlessly with architects and fellow interior designers, providing comprehensive furniture customization services to realize their visions effectively. Our clients enjoy full customization options, including proportions, finishes, and materials, ensuring their unique preferences are met with precision.</p>
      </div>
    </div>

    <div className='section2'>
    <div className='section2-right'>
        <h2>02.</h2><br />
        <h3>Crafted with precision</h3><br />
        <p>Once the layout components are confirmed and materials selected, our engineers meticulously create detailed drawings. These include furniture layouts, elevations, and sections, tailored to each aspect of the design, whether chosen or custom-crafted. These drawings are then submitted to the project’s architects and designers for approval, ensuring they satisfy both functional requirements and aesthetic preferences.
        </p>
      </div>
      <div className='section2-left'>
        <img src={services_img2} alt="" className='section2-img'/>
      </div>
    </div>

    <div className='section2'>
      <div className='section2-left'>
        <img src={services_img3} alt="" className='section2-img'/>
      </div>
      <div className='section2-right'>
        <h2>03.</h2><br />
        <h3>Sourcing of raw materials</h3><br />
        <p>Failure to expertly lay each brick risks the entire foundation crumbling. Our pride lies in our dedication to impeccable craftsmanship, starting from the foundation. Committed to excellence, we meticulously source materials from top-tier international and local vendors. At Jasmine Interior Luxury, there are no concessions, only an unwavering pursuit of excellence.</p>
      </div>
    </div>

    <div className='section2'>
    <div className='section2-right'>
        <h2>04.</h2><br />
        <h3>Carpentry</h3><br />
        <p>With over one decades of manufacturing expertise, we spare no effort in crafting your furniture. Each wood piece is meticulously carved, premium veneers selected, and metals meticulously prepared using a blend of artisanal craftsmanship and advanced techniques. Our meticulous attention to detail sets us apart from the competition.</p>
      </div>
      <div className='section2-left'>
        <img src={services_img4} alt="" className='section2-img'/>
      </div>
    </div>

    <div className='section2'>
      <div className='section2-left'>
        <img src={services_img1} alt="" className='section2-img'/>
      </div>
      <div className='section2-right'>
        <h2>05.</h2><br />
        <h3>Upholstery</h3><br />
        <p>Our skilled team of upholsterers meticulously crafts exquisite designs using only the finest fabrics and luxurious leathers, showcasing their expert craftsmanship. Every inch of fabric undergoes thorough inspection before being incorporated into an RVH piece.</p>
      </div>
    </div>

    <div className='section2'>
    <div className='section2-right'>
        <h2>06.</h2><br />
        <h3>Assembly</h3><br />
        <p>After the veneers are polished, metals brushed, and fabrics sewn, every component is painstakingly assembled to form your distinctive piece. Whether it’s a wardrobe or a coffee table, we approach each item with equal care, dedication, and precision.</p>
      </div>
      <div className='section2-left'>
        <img src={services_img6} alt="" className='section2-img'/>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Services