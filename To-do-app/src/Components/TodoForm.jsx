import React, { useState } from 'react'
import {addTask} from '../Features/Todo/TodoSlice'
import { useDispatch } from 'react-redux'

const TodoForm = () => {
    const [task , setTask] = useState('')
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTask(task))
        console.log(task)
        setTask('')
        
    }

  return (
     <form onSubmit={submitHandler}   className="flex ">
          <input
            type="text"
            placeholder="Write To Do..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
              
              
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50  text-white cursor-pointer shrink-0 font-bold ">
              Add
          </button>
      </form>
  )
}

export default TodoForm