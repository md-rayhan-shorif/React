import React from 'react'

const TodoInputBox = () => {
  return (
    <div className=' mt-10 flex justify-center '>
        <div className=' min-w-150    '>
       <form action="" className='flex'>
        <input type="text" placeholder='Write Todo...' className=' bg-white/15 w-full p-2  rounded-l-md' />
        <button type='submit' className=' bg-green-600 p-2 rounded-r-md'>Add</button>
        </form>
        </div>
    </div>
  )
}

export default TodoInputBox