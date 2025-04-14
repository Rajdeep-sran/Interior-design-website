import React from "react";
import { useState } from "react";
import "./Contact.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import mail_img from '../../assets/logo0.png'
import mail_icon from '../../assets/logo1.png'
import phone_icon from '../../assets/logo2.png'
import location_icon from '../../assets/logo3.png'

const Contact = () => {
const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [isSubmitted, setIsSubmitted] = useState(false);

const handleForm = (e) => {
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
  const response = await fetch('http://localhost:8080/demo',{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
      'Content-Type':'application/json'
    }
  });

if (response.ok) {
  setIsSubmitted(true); 
  setForm({ name: "", email: "", message: "" }); // Reset form fields
  setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
}
} catch (error) {
console.error("Error submitting form:", error);
}
};
  return (
    <>
      <Navbar />
      <div className="contactpage"><h1>Contact Us</h1></div>
        <div className="contactContainer">
        <div className="contact">
        <div className="contact-col">
            <h3><br />Send Us a Message<img src={mail_img} height="50px"/></h3>
            <p><br /><br />Feel free to reach through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional services to our university community.</p>
            <ul>
                <li><img src={mail_icon} />EleganceInteriors@gmail.com</li>
                <li><img src={phone_icon}  />+1 123-456-7890</li>
                <li><img src={location_icon}  />146A, Sector 51A, Sector 51, Chandigarh, 160044</li>
            </ul>
            <br />
        </div>
        <div className="contact-col">
          <br />
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={form.name} placeholder="Enter your name" onChange={handleForm} required/>
            <label>Email</label>
            <input type="email" name='email' value={form.email} placeholder="Enter your email" onChange={handleForm} required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" value={form.message} onChange={handleForm} ></textarea>
            <button type='submit' className="btn dark-btn">Submit now</button>
          </form>
          {isSubmitted && (
              <p className="success-message">
                Thank you! Your message has been sent.
              </p>
            )}
          <br />
        </div>
        </div>
        </div>
      
      <Footer />
    </>
  );
};

export default Contact;