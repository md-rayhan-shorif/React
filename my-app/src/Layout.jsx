import React from 'react'
import Navbar from './projects/RouteWebsite/conponents/Navbar'
import Footer from './projects/RouteWebsite/conponents/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
