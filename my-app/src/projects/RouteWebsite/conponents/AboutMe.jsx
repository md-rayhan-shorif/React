import React from 'react'
import myPhoto from '../../../assets/myPhoto.jpeg'
const AboutMe = () => {
  return (
    <div>
        <h1 className=' text-3xl p-4 font-semibold'>About Me</h1>
        <div className=' flex justify-between  '> 
            <img src={myPhoto} alt="Md. Rayhan Shorif" 
            className=' rounded-full h-40  shadow-2xl bg-amber-50 p-0.5 ' />
            <div className=' px-4 flex flex-col  justify-center'>
                <p className=' mt-2 text-2xl'>Md. Rayhan Shorif</p>
                <p className=' mt-4'>I am a passionate developer with expertise in building modern web applications. 
                    I love turning complex problems into simple, beautiful, and intuitive solutions. </p>
            </div>
        </div>
        <div className=' my-2 flex flex-col justify-center '>
            <h1 className=' text-3xl p-4 font-semibold'>Skills</h1>
            <div className='flex flex-wrap '>
                <p className=' bg-blue-300 p-2 m-4 rounded-xl font-semibold text-white' >HTML</p>
                <p  className=' bg-blue-300 p-2 m-4 rounded-xl font-semibold text-white' >CSS</p>
                <p  className=' bg-blue-300 p-2 m-4 rounded-xl font-semibold text-white' >JavaScript</p>
                <p  className=' bg-blue-300 p-2 m-4 rounded-xl font-semibold text-white' >React.js</p>
                <p  className=' bg-blue-300 p-2 m-4 rounded-xl font-semibold text-white' >C++</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe