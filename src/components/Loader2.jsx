
import React from 'react'
import { JellyfishSpinner } from "react-spinners-kit";


const Loader2 = ({title}) => {

  return (
        <div className="h-full w-full object-contain items-center flex flex-col justify-between">
        <JellyfishSpinner
                    size={400}
                    color="#b33722ee"
                />
        <h2 className='font-bold text-2xl sm:text-3xl text-white'>{title || "loading.."}</h2>
        </div>
  )
}

export default Loader2