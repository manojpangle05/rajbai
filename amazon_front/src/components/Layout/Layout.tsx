import {  useLocation } from "react-router-dom";
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { Outlet } from "react-router-dom"
// import { useSelector } from 'react-redux'
// import { useState, useEffect } from "react"
// import { useSelector } from 'react-redux'

const Layout = () => {
    // const { screen } = useSelector((state: any) => state.functions)
  const location = useLocation();

  // Check if current route is coming soon
  const hideLayout = location.pathname === "/";

    return (
        <div className={`bg-skin-background1`}>
             {/* Show Header only if not Coming Soon */}
      {!hideLayout && <Navbar />}
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
             {/* Show Footer only if not Coming Soon */}
      {!hideLayout && <Footer />}
        </div>
    )
}

export default Layout