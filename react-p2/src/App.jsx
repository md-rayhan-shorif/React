import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoList from './Projects/ToDoList/Pages/ToDoList'
import HomePageTodo from './Projects/MyTodo/Pages/HomePageTodo'
import Todos from './Components/Todos'
import { Provider } from 'react-redux'
import { store } from './App/store'
import HomeTodoList from './Pages/HomeTodoList'


function App() {
  

  return (
    <Provider store={store}>
      {/* <ToDoList/> */}
      {/* <HomePageTodo /> */}

      <HomeTodoList/>
      
    </Provider>
  )
}

export default App 
