import React, { useContext, useState } from 'react'
import AppContext from '../../../Context/AppContext'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(AppContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div className=' flex h-screen w-full justify-center
    items-center text-white '>

    <div className=' h-auto bg-gray-400 w-100 '>
        <h1 className=' text-2xl text-center p-5 underline '>Login</h1>
        <div className=' w-[80%] '>
        <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value) }

        className=' block border-1 border-amber-50 w-full ml-10 mb-1 pl-2 ' type="text" placeholder='Enter your username'/>
        <input
         value={password}
        onChange={(e)=>setPassword(e.target.value) }
        className=' block border-1 border-amber-50 w-full ml-10 mb-1 pl-2 '  type="text" placeholder='Enter your password'/>

        </div>
        <div className='flex justify-center m-4'>

        <button onClick={handleSubmit} className=' cursor-pointer bg-gray-800 p-3  rounded-xl ' >Submit</button>
        </div>


    </div>
    </div>
  )
}

export default Login