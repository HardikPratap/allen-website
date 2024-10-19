import React from 'react'
import HeaderTop from '../components/headerTop'
import Home from "../components/home"
import Footer from "./footer"

function Layout({ children }) {
  return (
    <div>
      <HeaderTop />
      <main>{children}</main>
      <Footer/>

    </div>
  )
}

export default Layout
