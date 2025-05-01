import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../../components/Home/Home'
import Register from '../../components/Home/Register/Register'
import Login from '../../components/Home/Login/Login'
import Footer from '../../components/Footer/Footer'




export default function App() {
  return (
    <>
    <Navbar precio=" 25000" />
    <Home /> 
    {/* <Register /> */}
    {/* <Login /> */}
    <Footer />
    </>
  )
}

