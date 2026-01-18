import { useState } from 'react'


import { Provider } from 'react-redux'

import HomeTodoList from './Projects/ToDoList_Redux/Pages/HomeTodoList'
import { store } from './Projects/ToDoList_Redux/App/store'



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
