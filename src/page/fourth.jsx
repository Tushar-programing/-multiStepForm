import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Box from '../component/box'
import image1 from "../image/amin1.png"
import image2 from "../image/main2.png"
import image3 from "../image/main3.png"
import image4 from "../image/main4.png"
import img2 from "../image/SLIDER.png"

import Container from '../component/container'
import "./page.css"

function fourth() {
  const [change , setChange] = useState(null);

  const handle = (index) => {
    change === index ? setChange(null) :
    setChange(index)
  }
  return (
    <div>
      <div className='flex w-full justify-between'>
        <Link to="/place"><div className=' mt-10 m-'><img className='w-2.5' src={img2} /></div></Link>
        <div className='out w-full ml-2 flex justify-between mt-12 '>
          <div className='outlieee '></div>
          <div className='outnee '></div>
        </div>
      </div>
      <div className='mt-20 '><p className='text-3xl font-bold text-gray-800'>What is your comfort level?</p></div>
      <div className='mt-5 mb-12'><p className='text-lg font-medium  text-gray-600'>Choose the higest level you fell confident in - you can always adjust later.</p></div>
      <div className=' h-60'>
        <div className=' mx-40 h-52 flex justify-between'>
          <button onClick={() => handle(1)}><Container img={image1} className={change === 1? "border-yellow-400" : null}/></button>
          <button onClick={() => handle(2)}><Container img={image2} className={change === 2? "border-yellow-400" : null} title1='Basic Algebra' title2='Foundational'/></button>
          <button onClick={() => handle(3)}><Container img={image3} className={change === 3? "border-yellow-400" : null} title1='Intermediate Algebra' title2='Intermediate'/></button>
          <button onClick={() => handle(4)}><Container img={image4} className={change === 4? "border-yellow-400" : null} title1='Calculus' title2='Advanced'/></button>

        </div>
      </div>

      <Link to={change === null ? "/level" : '/onway'}><button className={`mt-16 rounded-lg w-44 h-12 ${change === null? "bg-gray-200": "bg-black"} bg-black text-white text-lg font-semibold`} >Continue</button></Link>
    </div>
  )
}

export default fourth
