import React from 'react'
import img from "../image/main5.png"

function seventh() {
  return (
    <div>
      <div className='text-4xl font-bold mt-48'>Learning paths based on your answers</div>
      <div className='mt-6'><p className='font-medium text-gray-600'>Choose one to get started. You can switch anytime</p></div>
      <div className='absolute ml-96 mt-10 border w-32 text-xs font-bold py-1 rounded-2xl bg-yellow-500'>MOST POPULAR</div>
      <div className=' h-60 mt-14 mx-48 flex justify-between'>
       
        <div className='border w-full mr-3 rounded-lg pt-6 h-44 flex justify-between'>
          <div className=' w-56 text-left mt-2 ml-2 text-lg font-medium text-gray-700'><strong className='text-black'>Foundational Math</strong> Build <br/> your foundational skills in <br/> algebra, geometry, and <br/> probability.</div>
          <div className=' w-48 ml-6'><img src={img} /></div>
        </div>
        <div className='border w-full mr-3 rounded-lg pt-6 h-44 flex justify-between'>
          <div className=' w-56 text-left mt-2 ml-2 text-lg font-medium text-gray-700'><strong className='text-black'>Mathematical Thinking</strong><br/>Build your foundational <br/> skills in  algebra, geometry, <br/>and  probability.</div>
          <div className=' w-48 ml-6'><img src={img} /></div>
        </div>
      </div>
    </div>
  )
}

export default seventh
