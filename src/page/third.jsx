import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Box from '../component/box'
import img2 from "../image/SLIDER.png"
import image from "../image/225659.png"
import "./page.css"

function third() {
  // const [change, setChange] = useState(null)

  return (
    <div>
      <div className='flex w-full justify-between'>
        <Link to="/interest"><div className=' mt-10 m-'><img className='w-2.5' src={img2} /></div></Link>
        <div className='out w-full ml-2 flex justify-between mt-12 '>
          <div className='outliee '></div>
          <div className='outnee '></div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className=' w-full '><img className='w-80 mt-20 ml-40' src={image}/></div>
        <div className=' w-full h-96'>
          <div className='mt-48 flex'><p className='text-3xl font-bold text-gray-800'>You're in the right place</p></div>
          <div className='mt-5 mb-7 flex'>
            <p className='text-lg font-medium  text-gray-500'>Brilliant gets you hands-on to help improve your professional <br /> skills and knowledge. You'll interact with concepts and solve &nbsp;<br /> fun problems in math, science, and computer science &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br /></p>
          </div>
        </div>
      </div>

      <Link to="/level"><button className="mt-20 rounded-lg w-44 h-12 bg-black text-white text-lg font-semibold" >Continue</button></Link>
    </div>
  )
}

export default third
