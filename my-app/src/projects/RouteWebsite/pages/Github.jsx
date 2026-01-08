import React, { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom'

const Github = () => {
    const myData = useLoaderData();


    // const [apiData, setApiData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/md-rayhan-shorif')
    //     .then( res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         setApiData(data)
    //     })
    // }, [])
    // console.log(apiData)
  return (
    <div>
        Github id : {myData.id} 

        <img src={myData.avatar_url} alt="" />
        <p>Created Account : {myData.created_at} </p>
    
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/md-rayhan-shorif')
    return res.json()
}