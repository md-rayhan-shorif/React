
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import HeroSection from '../conponents/HeroSection';
import AboutMe from '../conponents/AboutMe';
import ProjectDetails from '../conponents/ProjectDetails';
export default function Home() {
    return (
        <>
        <div className=' w-full h-screen bg-gray-200 '>
        <div className=' mx-4 my-2.5  '>

        <HeroSection/>
        </div>
        <div className=' flex justify-between mx-4 my-2.5  gap-2  '>

        <div className=' w-[70%]'>
            <ProjectDetails/>
        </div>
        <div className=''>
        <AboutMe/>

        </div>
        </div>

        </div>
        
        </>
    );
}
