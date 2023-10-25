import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../components/navigation/Navbar"
import React from 'react'

const Layout = (props) => {
  return (
    <div>
        <Navbar/>
        <ToastContainer autoclose={5000}/>
        {props.children}       
    </div>
  )
}

export default Layout