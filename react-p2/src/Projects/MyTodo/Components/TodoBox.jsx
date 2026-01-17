import React, { useState } from 'react'
import { useMyTodo } from '../Context/MyTodoContext';

const TodoBox = ({task}) => {

  
  const [ isEditable , setIsEditable] = useState(false)
  const [taskMsg, setTaskMsg] = useState(task.task)
 
  const { updateTask, checkCompletion , deleteTask } = useMyTodo()

  const editTask = () => {
    updateTask(task.id, { ...task, task: taskMsg})
    setIsEditable(false)
  }
  const clickCompleteBox = () => {
    checkCompletion(task.id)
  }
  
  return (
    <>
  
    <div className={`flex w-full border border-black/10 rounded-lg py-1.5 px-3 gap-x-3 shadow-md shadow-white/50 duration-300 text-black ${ task.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'} `} >
     
          <input 
            type="checkbox" 
            className={` cursor-pointer `}
            checked={task.completed}
            onChange={clickCompleteBox}
            
            />
          <input 
            type="text" 
            className={` border outline-none w-full bg-transparent rounded-lg ${ isEditable ? ' border-black/10 px-2' : ' border-transparent' }  ${ task.completed ? ' line-through': ''}`}
            value={taskMsg}
            onChange={(e) => setTaskMsg(e.target.value)}
            readOnly= {!isEditable}
            
             />
        
          <button 
          className={` inline-flex w-15 cursor-pointer h-8 rounded-lg border border-black/10  justify-center items-center  shrink-0 disabled:opacity-50 px-3 ${isEditable ? ' bg-gradient-to-r from-green-400 to-green-300 ' : ' bg-gradient-to-r from-blue-400 to-blue-300/80' }`}
          onClick={()=>{
            if (task.completed) {
              return
            } else if (isEditable) {
              editTask();
            }else {
              setIsEditable ((prev) => !prev)
            }
          }}
          disabled={task.completed}
          >{ isEditable ? 'Save' : 'Edit'}</button>
          
          <button 
          className=' inline-flex w-15 h-8 rounded-lg border border-black/10  cursor-pointer justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500  text-white font-bold hover:bg-gray-100 shrink-0 disabled:opacity-50 px-3'
          onClick={()=>deleteTask(task.id)}
          >Delete</button>
          
    </div>
    </>
  )
}

export default TodoBox