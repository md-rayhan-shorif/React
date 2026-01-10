import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectDetails = () => {
    const navigate = useNavigate()
  return (
    <div className=' bg-white rounded-xl h-95 ' >
        <h1 className=' text-3xl p-4 font-semibold '>My Projects</h1>
        <div className='flex flex-col'>
                <p onClick={()=> navigate("/project1")} className=' cursor-pointer bg-blue-300 p-2 m-2 rounded-xl font-semibold text-white' >Back Ground Changer</p>
                <p onClick={()=> navigate("/project2")} className=' bg-blue-300 p-2 m-2 cursor-pointer rounded-xl font-semibold  text-white' >Password Generator</p>
                <p onClick={()=> navigate("/project3")} className=' bg-blue-300 p-2 cursor-pointer m-2 rounded-xl font-semibold text-white' >Theme Changer</p>
                <p onClick={()=> navigate("/project4")} className=' bg-blue-300 p-2 cursor-pointer m-2 rounded-xl font-semibold text-white' >Currency Converter</p>
               
            </div>
    </div>
  )
}

export default ProjectDetails