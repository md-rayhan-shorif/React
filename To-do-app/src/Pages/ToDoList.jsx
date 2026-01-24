import React, { useEffect, useState } from 'react'
import TodoForm from '../Components/TodoForm'
import TodoItems from '../Components/TodoItems'
import { useSelector } from 'react-redux'


const HomePageTodo = () => {
  const todos = useSelector(state => state.todos)

  return (
    
    
    <div className=' bg-[#0f172a] text-white min-h-screen  pt-20 pb-10 selection:bg-purple-500/30 '>
      <div className=' w-full max-w-2xl mx-auto shadow-xl shadow-purple-500/50 rounded-2xl px-6 py-8 bg-white/5 backdrop:blur-xl border border-white/10  '>

      
      <h1 className=' text-4xl  hover:font-extrabold text-center mb-8 mt-2 md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  text-transparent bg-clip-text hover:scale-105 transition-transform duration-400 cursor-default  ' >
        Manage Your Task & Grow Your Future
      </h1>
      <div className=' mb-8 transform hover:-translate-y-1 duration-300'>
        <TodoForm/>
      </div>
      <div className=' flex flex-wrap gap-y-5 '> 
        
        {
          todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} /> 
          ))
        }

        
      
      </div>
      </div>
    </div>
   
  )
}

export default HomePageTodo