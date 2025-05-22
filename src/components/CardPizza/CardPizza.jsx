import React from 'react'
import './CardPizza.css'
import { Pizzas } from '../../pages/Home/pizzas'

export default function CardPizza({img, name, ingredients, price}) {
  
  return (
    <div id="card-product">
        <img id="img-product" src={img} alt={name}/>
        <h3>Nombre: {name}</h3>
        <div id="card-ingredientes">
            <h5>Ingrediente:</h5>
            <ul>
              {ingredients.map((ingredient,index) =>
              <li className='ingredientes' key={index}>{ingredient}</li>)}
            </ul>
        </div>
        <span>Precio: $ {price}</span>
        <div id="card-button">
          <button>Ver Mas👀</button>
          <button id="añadir">Añadir🛒</button>
        </div>
    </div>
  )
}
