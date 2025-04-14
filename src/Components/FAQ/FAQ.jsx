import React from 'react'
import "./FAQ.css";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {data} from "./Datas"
import Ui from './Ui';
const FAQ = () => {
  console.log(data)
  return (
    <>
    <div className='main'>
      <Navbar />
      <div className='FAQ'>
      <h1><br />FAQ</h1>
      {
        data.map((curElem, index)=>{
          return <Ui curElem={curElem}/>
        })
      }
      </div>
    <Footer />
    </div>
    </>
  )
}

export default FAQ