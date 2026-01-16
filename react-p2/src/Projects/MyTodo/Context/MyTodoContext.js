import { createContext, useContext } from "react";


export const MyTodoContext = createContext({
    todoList: [
        {
            id: 1,
            task: "Complete this task",
            complete: false,
        },
    ],
    addTask: (task) => {},
    deleteTask: (id) => {},
    updateTask: (id, task) => {},
    checkCompletion: (id) => {}

})

export const useMyTodo = () => {
    return useContext(MyTodoContext)
}



export const MyTodoProvider = MyTodoContext.Provider



