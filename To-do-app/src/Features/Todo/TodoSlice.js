import {createSlice, nanoid} from '@reduxjs/toolkit'


const LoadFromLocalStorage = () => {
    try {
        const tasks = localStorage.getItem("todoList");
        if (tasks === null || tasks.length === 0 || !tasks) {
            return [{
                id: 1, 
                text: "Welcome, Add your Task here",
                complete: false,
            }]
        }
        return JSON.parse(tasks);
    } catch (error) {
        return []
    }
}

const initialState = {
    todos: LoadFromLocalStorage()
}

export const MyTodoSlice = createSlice({
    name: 'ToDo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            if (!action.payload || action.payload === '') {
                return
            }
            const task = {
                id: nanoid(),
                text: action.payload,
                complete: false,
            }
            state.todos.push(task);
            localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
        removeTask: (state, action) => {
            state.todos = state.todos.filter((task)=> task.id !== action.payload)
             localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
        editTask: (state, action) => {
            const {id, text} = action.payload
            const task = state.todos.find((todo)=> todo.id === id)
            if (task) {
                task.text = text
            }
             localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
        markTask: (state, action) => {
            
            const task = state.todos.find((todo)=> todo.id === action.payload)
            if (task) {
                task.complete = !task.complete
            }
             localStorage.setItem("todoList", JSON.stringify(state.todos))
        },
    }
})


export const { addTask, removeTask, editTask, markTask } = MyTodoSlice.actions

export default MyTodoSlice.reducer