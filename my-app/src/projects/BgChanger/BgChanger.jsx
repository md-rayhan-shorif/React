import React, { useState } from 'react'
import ColorPlate from './ColorPlate'

const BgChanger = () => {
  const [color, setColor] = useState("#ffffff")

  return (
   <>
   <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
  
    <div className='h-16 w-auto bg-amber-100 rounded-3xl text-center flex justify-center items-center bottom-12 fixed  inset-x-0 mx-5  '>

        <div className='flex flex-wrap justify-center gap-3   '>


          {/* note about onclick
            - if i dont have to pass perametre then i can use it like : onclick={functionName}
            error example: onclick={functionName(any perametre)}

            - if i have to pass perametre then i have write like this: onclick={()=>functionName(any perametre)}
            
          */}

            <button onClick={()=> setColor("red")} bgColor="bg-red-500" className='h-10 w-15 bg-red-500 rounded-2xl cursor-pointer hover:bg-red-400 ' >Red</button>
            <button onClick={()=> setColor("green")} 
            bgColor="bg-green-500" className='h-10 w-15 bg-green-500 rounded-2xl cursor-pointer hover:bg-green-400 ' >Green</button>
           
            <button onClick={()=> setColor("gray")} bgColor="bg-gray-500" className='h-10 w-15 bg-gray-500 rounded-2xl cursor-pointer hover:bg-gray-400 ' >Gray</button>
            <button onClick={()=> setColor("yellow")} bgColor="bg-yellow-500" className='h-10 w-15 bg-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-400 ' >Yellow</button>
            <button onClick={()=> setColor("pink")} bgColor="bg-pink-500" className='h-10 w-15 bg-pink-500 rounded-2xl cursor-pointer hover:bg-pink-400 ' >Pink</button>

          </div>


        </div>

   </div>
   
   </>
  )
}

export default BgChanger