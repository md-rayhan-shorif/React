import React from 'react'
// ১. এখানে .png এর বদলে .jpg দিন (আপনার এক্সপ্লোরার অনুযায়ী)
import heroImg from '../../../assets/HeroSectionImage.jpg'

const HeroSection = () => {
    return (
        <div className=' relative flex flex-col lg:flex-row items-center justify-between p-10 h-[500px] w-full rounded-2xl my-2 text-white overflow-hidden  '>
            <div className=' absolute inset-0 z-0 bg-cover bg-center blur-[4px] scale-110 ' 
                style={{backgroundImage: `url(${heroImg})`}}
            >

            </div>
            <div className=' absolute inset-0 bg-black/30' >

            </div>
             <div className=' z-3' >
                <h1 className=' text-5xl  font-bold mb-2'>Showcase  <span className=' text-blue-400 '>Your Journey. </span></h1>
                <h1 className=' text-5xl font-bold mb-2'>Build Your <span className=' text-blue-400 '>Future </span></h1>
                <p className=' text-lg opacity-90'>Explore My Projects in & UI/UX Design</p>
                <button className=' mt-6 bg-blue-500 p-4 rounded-xl font-semibold cursor-pointer hover:bg-blue-300 hover:font-bold hover:text-black ' >Explore Projects</button>
            </div>

        </div>
    )
}

export default HeroSection