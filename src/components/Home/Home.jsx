import React, {useEffect,useState} from 'react'
import "./Home.css"
import  Header  from './Header/Header'
// import Register from './Register/Register'
import Login from './Login/Login'
import CardPizza from './CardPizza/CardPizza'
import { Pizzas } from './pizzas'


export default function Home() {
  return (
    <>
    <Header />
    <div id="menu-cards">
      {Pizzas.map((pizza) => (
        <CardPizza 
        key={pizza.id}
        {...pizza} />
      ))}
      </div>    
    
    </>
  )
}
