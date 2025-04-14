import React from 'react'
import './Team.css'
const TeamCard = (props) => {
    
  return (
    <>
    <div className='card'>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </div>

    </>
  )
}

export default TeamCard