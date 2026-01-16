import React, { useState } from 'react'
import { MyTodoProvider } from '../Context/MyTodoContext'
import TodoInputBox from '../Components/TodoInputBox'
import TodoBox from '../Components/TodoBox'

const HomePageTodo = () => {
  const [todoList , setTodoList] = useState([])
  const addTask = () => {}
  const deleteTask = () => {}
  const updateTask = () => {}
  const checkCompletion = () => {}

  return (
    <MyTodoProvider value={{todoList , addTask, deleteTask, updateTask, checkCompletion }}>
    
    <div className=' bg-gray-900 text-white h-screen  pt-20 pb-10  '>
      <h1 className=' text-2xl font-bold hover:font-extrabold text-center shadow-gray-700 shadow-2xl'>
        Manage Your Task & Grow Your Future
      </h1>
      <div>
      <TodoInputBox />
      </div>
      <div>
      <TodoBox />
      </div>
    </div>
    </MyTodoProvider>
  )
}

export default HomePageTodo