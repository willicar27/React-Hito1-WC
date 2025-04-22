import React from 'react'
import "./Home.css"
import  Header  from './Header/Header'
import CardPizza from './CardPizza/CardPizza'
import Register from './Register/Register'
import Login from './Login/Login'


export default function Home() {
  return (
    <>
    <Header />
    <Register />
    {/* <Login /> */}
    {/* <div id="menu-cards">
    <CardPizza 
    nombre= "Napolitana"
    src= "src/assets/imgs/pizza-1.jpg"
    ingredientes= "mozzarella, tomates, jamón, orégano"
    precio= "5950"
    />
    <CardPizza 
    nombre= "Española"
    src= "src/assets/imgs/pizza-2.jpg"
    ingredientes= "mozzarella, gorgonzola, parmesano, provolone"
    precio= "6950"
    />
    <CardPizza 
    nombre= "Pepperoni"
    src= "src/assets/imgs/pizza-3.jpg"
    ingredientes= "mozzarella, pepperoni, orégano"
    precio= "6950"
    />
    </div> */}
    
    </>
  )
}
