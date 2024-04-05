import React from 'react'
import {Link} from "react-router-dom"
import img from "../image/Screenshot.png"
import img1 from "../image/Screenshot1.png"
import img2 from "../image/SLIDER.png"


function fifth() {
  return (
    <div>
      <div className='flex w-full justify-between'>
        <Link to="/level"><div className=' mt-10 m-'><img className='w-2.5' src={img2} /></div></Link>
        <div className='out w-full ml-2 flex justify-between mt-12 '>
          <div className='outlieeee '></div>
          <div className='outnee '></div>
        </div>
      </div>
      <div className=' h-auto flex justify-between mt-20'>
        <div className=' h-auto w-full'><img className='w-80 ml-48' src={img}/></div>
        <div className=' h-96 w-full'>
          <div className='flex mt-14'><p className='text-3xl font-bold text-gray-900'>You're on your way!</p></div>
          <div className='flex mt-8'><img src={img1} /></div>
          <div className='flex mt-2'><p className='text-left italic text-lg font-normal'>"Through its engaging and well-structured courses, Brilliant has taught me <br />mathematical concepts that I previously struggled to understand. I now feel <br /> confident approaching both technical job interviews and real world problem <br /> solving situations."</p></div>
          <div className='flex mt-5'><p className='italic text-lg'>― Jacob S.</p></div>
        </div>
      </div>
      <Link to="/load"><button className="mt-10 rounded-lg w-44 h-12 bg-black text-white text-lg font-semibold" >Continue</button></Link>
    </div>
  )
}

export default fifth
