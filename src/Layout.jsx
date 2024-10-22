import React from 'react'
import HeaderTop from '../components/headerTop'
import Home from "../components/home"
import Footer from "./footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <HeaderTop />
      <main>
        <Outlet />
      </main>
      <Footer/>

    </div>
  )
}

export default Layout