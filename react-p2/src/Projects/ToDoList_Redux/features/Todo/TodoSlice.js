import { createSlice , nanoid} from '@reduxjs/toolkit'
// nenoid is imported - just for getting unique id.

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Welcome! Add your task',
            complete: false,
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if ( !action.payload || action.payload.trim() === '') {
                return;
            }
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false
            }
           
            state.todos.push(todo)
            
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find((todo)=> todo.id === id)

            if (todo) {
                todo.text = text;
            }
        },
        checkComplete: (state, action) => {
            
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.complete = !todo.complete
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, checkComplete } = todoSlice.actions

export default todoSlice.reducer
