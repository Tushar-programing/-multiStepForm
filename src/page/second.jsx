import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Box from '../component/box'
import img2 from "../image/SLIDER.png"
import "./page.css"

function second() {
  const [change, setChange] = useState(null)

  const handlebox = (index) => {
    console.log("working successfully");
    change === index ? setChange(null) : setChange(index)
  }

  return (
    <div>
      <div className='flex w-full justify-between'>
        <Link to="/"><div className=' mt-10 m-'><img className='w-2.5' src={img2} /></div></Link>
        <div className='out w-full ml-2 flex justify-between mt-12 '>
          <div className='outlie '></div>
          <div className='outnee '></div>
        </div>
      </div>
      <div className='mt-8 '><p className='text-3xl font-bold text-gray-800'>What are you most interested in?</p></div>
      <div className='mt-5 mb-7'><p className='text-lg font-medium  text-gray-500'>Choose just one. This will help you started (but won't limit your experience) .</p></div>
      <button onClick={() => handlebox(0)} className='w-full'><Box img="https://static.vecteezy.com/system/resources/previews/019/045/386/original/increasing-stocks-icon-growing-graph-bar-chart-png.png" className={`${change === 0 ? 'border-yellow-300' : null}`} className1=" ml-3" title1='Learning specific skills to advance my carrer' title2=''/></button>
      <button onClick={() => handlebox(1)} className='w-full'><Box img="https://i.pinimg.com/originals/27/82/c0/2782c05bdf4107f95a0409bf734522b5.jpg" className={`${change === 1 ? 'border-yellow-300' : null}`} className1="w-14 mt-1 ml-3" title1="Exploring new topics I'm interested in" title2=''/></button>
      <button onClick={() => handlebox(2)} className='w-full'><Box img="https://www.almightycs.com/web/image/product.template/26/image_1024?unique=c00b9de" className={`${change === 2 ? 'border-yellow-300' : null}`} className1="w-12 mt-2 ml-4" title1='Refreshing my math foundations' title2=''/></button>
      <button onClick={() => handlebox(3)} className='w-full'><Box img="https://thumbs.dreamstime.com/b/blue-dart-red-target-28360759.jpg" className={`${change === 3 ? 'border-yellow-300' : null}`} className1="w-16 mt-2 ml-2" title1='Exercising my brain to stay sharp' title2=''/></button>
      <button onClick={() => handlebox(4)} className='w-full'><Box img="https://media.istockphoto.com/id/1303509707/vector/eye-vector-look-icon-eyeball-vision-blue-eyesight-view-symbol-ball-isolated-icon-illustration.jpg?s=612x612&w=0&k=20&c=HZg6qSJy7A2W0S4QFvfztC5BnYOcliHkLC3ZEk68Gz4=" className={`${change === 4 ? 'border-yellow-300' : null}`} className1="w-14 ml-4" title1='Something else' title2=''/></button>

      <Link to={change === null? '/' : "/place"}><button className={`mt-2 rounded-lg w-44 h-12  ${change === null ? 'bg-gray-200' : 'bg-black'} text-white text-lg font-semibold`} >Continue</button></Link>
    </div>
  )
}

export default second
