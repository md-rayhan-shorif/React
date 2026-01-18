import React from 'react'
import AddTodo from '../Components/AddTodo'
import Todos from '../Components/Todos'

const HomeTodoList = () => {
  return (
    <>
    <div className=' bg-gray-950 h-screen flex flex-col items-center  ' >

   <div className=' w-[50%]'>

        
    <div className='  '>

    <AddTodo/>
    </div>
    <div>
    <Todos/>

    </div>


    </div>
    </div>
    </>
  )
}

export default HomeTodoList