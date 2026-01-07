import React from 'react'

const ColorPlate = () => {
  return (
    <>
    <div>
       

        <div className='h-16 w-auto bg-amber-100 rounded-3xl text-center flex justify-evenly items-center  '>

            <button bgColor="bg-red-500" className='h-10 w-15 bg-red-500 rounded-2xl cursor-pointer hover:bg-red-400 ' >Red</button>
            <button 
            bgColor="bg-green-500" className='h-10 w-15 bg-green-500 rounded-2xl cursor-pointer hover:bg-green-400 ' >Green</button>
           
            <button bgColor="bg-gray-500" className='h-10 w-15 bg-gray-500 rounded-2xl cursor-pointer hover:bg-gray-400 ' >Gray</button>
            <button bgColor="bg-yellow-500" className='h-10 w-15 bg-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-400 ' >Yellow</button>
            <button bgColor="bg-pink-500" className='h-10 w-15 bg-pink-500 rounded-2xl cursor-pointer hover:bg-pink-400 ' >Pink</button>


        </div>
    </div>

    </>
  )
}

export default ColorPlate