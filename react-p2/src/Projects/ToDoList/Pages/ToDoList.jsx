import React, { useState } from 'react'
import { ToDoProvider } from '../Context'

const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const addTodo = () => {}
    const updateTodo = () => {}
    const deleteTodo = () => {}
    const toggleComplete = () => {}

  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }} >
    
    <div className=' min-h-screen p7-8 bg-[#172842] text-white  '>
        <div className=' w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3  '>
            <h1 className=' text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
            <div className=' mb-4 '>

            </div>
            <div className=' flex flex-wrap gap-y-3'>

            </div>
        </div>
    </div>
    </ToDoProvider >
  )
}

export default ToDoList