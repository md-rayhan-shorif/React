import React, { useState } from 'react'
import { editTask, removeTask, markTask } from '../Features/Todo/TodoSlice'
import { useSelector, useDispatch } from 'react-redux'

const TodoItems = ({ todo }) => {
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const check = false; // তোমার কোড অনুযায়ী কনস্ট্যান্ট রাখা হলো

    const editHandler = () => {
        dispatch(editTask({ id: todo.id, text: todoMsg }))
        setIsTodoEditable(!isTodoEditable)
    }
    const removekHandler = () => {
        dispatch(removeTask(todo.id))
    }
    const markHandler = () => {
        dispatch(markTask(todo.id))
    }

    return (
        <>
            <div
                className={`flex w-full items-center border border-white/20 rounded-xl py-2 px-4 gap-x-3 shadow-lg transition-all duration-300 text-white font-medium mb-3 ${
                    todo.complete 
                    ? 'bg-gradient-to-r from-green-900/40 to-emerald-800/40 border-green-500/30' 
                    : 'bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/15'
                }`}
            >
                <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer accent-green-500 rounded-md transition-transform hover:scale-110 "
                    checked={todo.complete}
                    onChange={markHandler}
                />
                
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg text-lg transition-all ${
                        isTodoEditable ? 'border-white/30 px-3 bg-black/20' : 'border-transparent'
                    } ${todo.complete ? 'line-through opacity-50 text-gray-400' : 'text-white'}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable}
                />

                {/* Edit / Save Button */}
                <button
                    className={`inline-flex w-20 cursor-pointer h-9 rounded-lg border border-white/10 justify-center items-center shrink-0 font-semibold transition-all active:scale-95 shadow-sm ${
                        isTodoEditable 
                        ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white shadow-orange-500/20' 
                        : 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-blue-500/20'
                    } disabled:opacity-50 px-3`}
                    onClick={editHandler}
                    disabled={todo.complete}
                >
                    {isTodoEditable ? 'Save' : 'Edit'}
                </button>

                {/* Delete Button */}
                <button
                    className="inline-flex w-20 h-9 rounded-lg border border-white/10 cursor-pointer justify-center items-center bg-gradient-to-br from-rose-500 via-red-600 to-orange-600 text-white font-bold transition-all active:scale-95 shadow-md shadow-red-500/20 px-3"
                    onClick={removekHandler}
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default TodoItems