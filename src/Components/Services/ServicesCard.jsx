import React from 'react'
import './Services.css'

const ServicesCard = (props) => {
  return (
    <>
    <div className='Services-card'>
        {/* <img src={props.img} alt="" /> */}
        <p>{props.number}</p>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
    </div>
    </>
  )
}

export default ServicesCard