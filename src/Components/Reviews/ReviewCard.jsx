import React from 'react'
import "./Reviews.css"

const ReviewCard = ({ name, title, message, image }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={`${name}'s profile`} className="testimonial-image" />
      <div className="testimonial-content">
        <p className="testimonial-message">"{message}"</p>
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-title">{title}</p>
      </div>
    </div>
  )
}

export default ReviewCard