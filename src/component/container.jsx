import React from 'react'

function container({
    className,
    title1 = "Arithmetic",
    title2 = "Introductory",
    img,
}) {
  return (
    <div className={`border  w-56 rounded-lg ${className}`}>
      <img className=' h-20 mt-8 mb-2 w-full' src={img}/>
      <p className='font-normal text-lg'>{title1}</p>
      <p className='font-normal text-xl text-gray-400 mb-5'>{title2}</p>
    </div>
  )
}

export default container
