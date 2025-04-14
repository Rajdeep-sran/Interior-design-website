import React from 'react'
import './Reviews.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ReviewCard from './ReviewCard'
import team_1 from "../../assets/team1.png"
import team_2 from "../../assets/team2.png"
import team_3 from "../../assets/team3.png"
import team_4 from "../../assets/team4.png"
import team_5 from "../../assets/team5.png"
import team_6 from "../../assets/team6.png"
import team_7 from "../../assets/team7.png"
import team_8 from "../../assets/team8.png"
import team_9 from "../../assets/team9.png"
import team_10 from "../../assets/team10.png"
import team_11 from "../../assets/team11.png"
import team_12 from "../../assets/team12.png"

const Reviews = () => {
    const testimonials = [
        {
          name: "Ananya Sharma",
          title: "Software Engineer",
          message: "This product has changed the way I work and improved my efficiency!",
          image: team_1
        },
        {
          name: "Rahul Mehta",
          title: "Product Manager",
          message: "Excellent quality and great customer service. Highly recommended!",
          image: team_2
        },
        {
          name: "Vikram Singh",
          title: "Homeowner",
          message: "The design team transformed my home beyond my expectations! Every detail was thoughtfully considered, and the result is stunning. Highly recommend!",
          image: team_3
        },
        {
          name: "Priya Nair",
          title: "Business Owner",
          message: "The designers created a beautiful, functional workspace that perfectly aligns with our brand. The process was smooth, and they listened to all our needs.",
          image: team_4
        },
        {
          name: "Neha Kapoor",
          title: "Architect",
          message: "This team brings a fresh perspective to interior design. I was impressed by their creativity and attention to detail. The final design exceeded my vision.",
          image: team_5
          },
        {
          name: "Amit Joshi",
          title: "Real Estate Agent",
          message: "Exceptional service! They staged several properties for my clients, making them look both modern and inviting. The properties sold faster than expected!",
          image: team_6
        },
        {
          name: "Riya Gupta",
          title: "Interior Enthusiast",
          message: "I’m thrilled with the transformation! The designers respected my style while adding their own unique touches. My home has never looked better.",
          image: team_7
        },
        {
          name: "Kiran Patel",
          title: "First-Time Homebuyer",
          message: "I was unsure about the design process, but they made it easy and enjoyable. My new home feels personalized, cozy, and exactly what I wanted.",
          image: team_8
        },
        {
          name: "Sakshi Deshmukh",
          title: "Freelance Writer",
          message: "They turned my small apartment into a spacious, airy retreat. Every piece feels intentional, and the color scheme is just perfect. I’m so grateful!",
          image: team_9
        },
        {
          name: "Isabella Green",
          title: "Restaurant Owner",
          message: "The team designed an incredible space for my restaurant. The ambiance they created is perfect for my guests and enhances the dining experience.",
          image: team_10
        },
        {
          name: "Arjun Reddy",
          title: "Interior Design Student",
          message: "I’m inspired by the team’s expertise and vision! Watching them work taught me so much about combining styles and creating harmonious spaces.",
          image: team_11
        },
        {
          name: "Ramesh Sharma",
          title: "Home Renovator",
          message: "They transformed an old, outdated property into a modern dream home. The attention to detail and thoughtfulness in the design truly impressed me.",
          image: team_12
        }
      ];
    
  return (
    <>
    <div className='main'>
    <Navbar />
    <div className='reviews'>

     <h1><br />Reviews</h1>
    

    <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <ReviewCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            message={testimonial.message}
            image={testimonial.image}
          />
        ))}
    </div>
    
     </div>
    </div>
    <Footer />
  </>
  )
}

export default Reviews