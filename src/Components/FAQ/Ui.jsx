import React, { useState } from 'react'
import "./FAQ.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const Ui = ({curElem}) => {
    const [data, setData] = useState(false)
    const showHide = () =>{
        setData(!data)
    }
  return (
    <>
    <div className='accordian'>
        <div className='qns'>
            <button onClick={showHide}>{data ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} /> }</button>
            <h3>{curElem.q}</h3>
        </div>
        <p>{data ? curElem.ans : ""}</p>
    </div>
    </>
  )
}

export default Ui