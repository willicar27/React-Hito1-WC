import React from 'react'
import {Route, Routes,} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../../components/Footer/Footer';
import Cart from '../Cart/Cart';
import Pizza from '../Pizza/Pizza';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import { CartProvider } from '../../Context/ContextCart'; 
import { UserProvider } from '../../Context/UserContext';


export default function App() {
  return (
    <>
  <UserProvider>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pizza' element={<Pizza/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </CartProvider>
  </UserProvider>
    </>
  )
}

