import React from 'react'
import "./Home.css"
import  Header  from './header'
import CardPizza from './CardPizza'


export default function Home() {
  return (
    <>
    <Header />
    <div id="menu-cards">
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
    </div>
    
    </>
  )
}
