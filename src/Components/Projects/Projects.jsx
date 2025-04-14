import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from "swiper/modules";
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import "swiper/css/free-mode";

// import 'bootstrap/dist/css/bootstrap.min.css';

import './Projects.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProjectCard from './ProjectCard'
import Kitchen_1 from "../../assets/Kitchen1.png";
import Kitchen_2 from "../../assets/Kitchen2.png";
import Kitchen_3 from "../../assets/Kitchen3.png";
import LA_1 from "../../assets/LA1.png";
import LA_2 from "../../assets/LA2.png";
import LA_3 from "../../assets/LA3.png";
import BR_1 from "../../assets/Bathroom1.png";
import BR_2 from "../../assets/Bathroom2.png";
import BR_3 from "../../assets/Bathroom3.png";
import Office_1 from "../../assets/Office1.png";
import Office_2 from "../../assets/Office2.png";
import Bedroom_1 from "../../assets/Bedroom1.png";
const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="projectspage">
        <h1><br />Projects</h1>
      </div>

      <div className="main">
          <h1>Our Recent Projects</h1>


          <div className="container py-4 px-4 justify-content-center ">

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

           <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            slidesPerView={4}
            spaceBetween={50}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
           >
            <SwiperSlide><ProjectCard title="Kitchen" img={Kitchen_1}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Living Area" img={LA_1}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Office" img={Office_2}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Bathroom" img={BR_1}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Kitchen" img={Kitchen_2}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Bedroom" img={Bedroom_1}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Living Area" img={LA_2}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Kitchen" img={Kitchen_3}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Bathroom" img={BR_2}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Living Area" img={LA_3}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Office" img={Office_1}/></SwiperSlide>
            <SwiperSlide><ProjectCard title="Bathroom" img={BR_3}/></SwiperSlide>
            
           </Swiper>
          </div>
         

      </div>
      

      <Footer />
    </>
  );
};

export default Projects;
