import React from 'react'

const TodoBox = () => {

  const complete = false;
  const isTodoEditable = false;
  
  return (
    <>
  
    <div className={`flex w-full border border-black/10 rounded-lg py-1.5 px-3 gap-x-3 shadow-md shadow-white/50 duration-300 text-black ${ complete ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'} `} >
     
          <input 
            type="checkbox" 
            className={` cursor-pointer `}
            checked={complete}
            readOnly
            
            />
          <input 
            type="text" 
            className={` border outline-none w-full bg-transparent rounded-lg ${ isTodoEditable ? ' border-black/10 px-2' : ' border-transparent' }  ${ complete ? ' line-through': ''}`}
            placeholder='I am your task'
             />
        
          <button 
          className=' inline-flex w-15 h-8 rounded-lg border border-black/10  justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 px-3'
          
          >{ isTodoEditable ? 'Save' : 'Edit'}</button>
          
          <button 
          className=' inline-flex w-15 h-8 rounded-lg border border-black/10  justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 px-3'
          
          >Delete</button>
          
    </div>
    </>
  )
}

export default TodoBox