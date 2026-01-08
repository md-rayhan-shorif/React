import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userId} = useParams();
  return (
    <div className=' h-15 bg-gray-600 text-white font-bold text-3xl text-center pt-2' >User {userId} </div>
  )
}

export default User