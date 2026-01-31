import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import RTE from './components/others/RTE'
import AllPost from './pages/AllPost'
import AddPost from './pages/AddPost'

function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch()
   
   // 
   useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
   },[])
   
  return !loading ? (
    <>
      <div className=' min-h-screen flex flex-wrap content-between bg-gray-900 '> 
        <div className=' w-full block'> 
            <Header/>
            <main>
              <Outlet/>
            </main>
            <Footer/>
        </div>
      </div>
    </>
  ) : (
    <h1> Loading... </h1>
  )
}

export default App
