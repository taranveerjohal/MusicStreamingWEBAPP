import React from 'react'

const Error = ({title}) => {
  return (
    <div className='flex w-full justify-center items-center'>
      <h2 className='font-bold text-3xl text-white mt-2'>{title || "Something went Wrong Please try Again"}</h2>
    </div>
  )
}

export default Error