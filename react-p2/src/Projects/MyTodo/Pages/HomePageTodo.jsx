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
    
    <div className=' bg-[#0f172a] text-white min-h-screen  pt-20 pb-10 selection:bg-purple-500/30 '>
      <div className=' w-full max-w-2xl mx-auto shadow-xl shadow-purple-500/50 rounded-2xl px-6 py-8 bg-white/5 backdrop:blur-xl border border-white/10  '>

      
      <h1 className=' text-4xl  hover:font-extrabold text-center mb-8 mt-2 md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  text-transparent bg-clip-text hover:scale-105 transition-transform duration-400 cursor-default  ' >
        Manage Your Task & Grow Your Future
      </h1>
      <div className=' mb-8 transform hover:-translate-y-1 duration-300'>
      <TodoInputBox />
      </div>
      <div className=' flex flex-wrap gap-y-5 '> 
        {todoList.map((task)=>(
          <div key={task.id} className=' w-full group animate-in fade-in slide duration-5000' >
              <TodoBox task={task} />
          </div>
        ))}
      
      </div>
      </div>
    </div>
    </MyTodoProvider>
  )
}

export default HomePageTodo