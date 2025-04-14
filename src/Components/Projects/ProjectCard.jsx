import React from 'react'
import './Projects.css'

const ProjectCard = (props) => {
  return (
    <>
    <div className='card'>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
    </div>
    </>
  )
}

export default ProjectCard