import React from 'react'
import loader from '../assets/loader.svg'

 const Loader = ({title}) => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <img src={loader} alt="loader" className="w-32 h-32 object-contain"/>
      <h2 className='font-bold text-3xl mt-2 text-white'>{title || "loading.."}</h2>
    </div>
  )
}

export default Loader
