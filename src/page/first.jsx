import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Box from '../component/box'
import "./page.css"

function first() {
  const [change, setChange] = useState(null)

  const handlebox = (index) => {
    // console.log("working successfully");
    change === index ? setChange(null) : setChange(index)
  }


  return (
    <div>
      <div className='out flex justify-between mt-12 '>
        <div className='outli '></div>
        <div className='outne '></div>
      </div>
      <div className='mt-8 '><p className='text-3xl font-bold text-gray-800'>Which describes you best ?</p></div>
      <div className='mt-5 mb-7'><p className='text-lg font-medium  text-gray-500'>This will help us personalize your experience.</p></div>
      <button onClick={() => handlebox(0)} className='w-full'><Box img="https://cdn-icons-png.flaticon.com/512/10550/10550917.png" className={`${change === 0 ? 'border-yellow-300' : null}`} className1=" ml-3" title1='Students' title2='or soon to be enrolled'/></button>
      <button onClick={() => handlebox(1)} className='w-full'><Box img="https://static.vecteezy.com/system/resources/previews/008/773/765/non_2x/young-man-holding-a-smartphone-person-and-gadget-communication-in-the-network-flat-illustration-isolated-on-white-background-free-vector.jpg" className={`${change === 1 ? 'border-yellow-300' : null}`} className1="w-14 ml-3" title1='Professional' title2='pursuing a carrer'/></button>
      <button onClick={() => handlebox(2)} className='w-full'><Box img="https://static.vecteezy.com/system/resources/thumbnails/004/899/833/small/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" className={`${change === 2 ? 'border-yellow-300' : null}`} className1="w-14 ml-4" title1='Parent' title2='of a school-age child'/></button>
      <button onClick={() => handlebox(3)} className='w-full'><Box img="https://static.vecteezy.com/system/resources/previews/008/127/219/non_2x/the-guy-holds-a-ticket-and-a-passport-in-his-hands-travel-concept-isolated-on-white-background-trendy-flat-style-vector.jpg" className={`${change === 3 ? 'border-yellow-300' : null}`} className1="w-16 mt-2 ml-2" title1='Lifelong learner' title2=''/></button>
      <button onClick={() => handlebox(4)} className='w-full'><Box img="https://img.freepik.com/free-vector/young-woman-white_25030-39552.jpg" className={`${change === 4 ? 'border-yellow-300' : null}`} className1="w-14 ml-4" title1='Teacher' title2=''/></button>
      <button onClick={() => handlebox(5)} className='w-full'><Box img="https://st2.depositphotos.com/7646640/44377/v/450/depositphotos_443778318-stock-illustration-elderly-man-avatar-icon-flat.jpg" className={`${change === 5 ? 'border-yellow-300' : null}`} className1="w-14 ml-4" title1='Other' title2=''/></button>

      <Link to={change === null? '/' : "/interest"}><button className={`mt-2 rounded-lg w-44 h-12  ${change === null ? 'bg-gray-200' : 'bg-black'} text-white text-lg font-semibold`} >Continue</button></Link>
    </div>
  )
}

export default first
