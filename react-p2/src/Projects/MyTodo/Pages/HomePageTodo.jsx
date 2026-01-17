import React, { useEffect, useState } from 'react'
import { MyTodoProvider } from '../Context/MyTodoContext'
import TodoInputBox from '../Components/TodoInputBox'
import TodoBox from '../Components/TodoBox'

const HomePageTodo = () => {
  const [todoList , setTodoList] = useState([])
  const addTask = (task) => {
    setTodoList((prev)=> [ { ...task} , ...prev])
  }
  const deleteTask = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id))
  }
  const updateTask = (id, task) => {
    setTodoList((prev) => prev.map((prevTask) => prevTask.id === id ? task : prevTask))
  }
  const checkCompletion = (id) => {
    setTodoList((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task ))
  }

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"))
    if (todoList && todoList.length > 0) {
      setTodoList(todoList)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])
  

  return (
    <MyTodoProvider value={{todoList , addTask, deleteTask, updateTask, checkCompletion }}>
    
    <div className=' bg-gray-900 text-white h-screen  pt-20 pb-10  '>
      <div className=' w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 '>

      
      <h1 className=' text-2xl font-bold hover:font-extrabold text-center mb-8 mt-2' >
        Manage Your Task & Grow Your Future
      </h1>
      <div className=' mb-4'>
      <TodoInputBox />
      </div>
      <div className=' flex flex-wrap gap-y-3 '> 
      <TodoBox />
      </div>
      </div>
    </div>
    </MyTodoProvider>
  )
}

export default HomePageTodo