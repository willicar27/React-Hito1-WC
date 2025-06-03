import React, { useContext } from 'react';
import './CardPizza.css';
import {ContextCart} from '../../Context/ContextCart';

export default function CardPizza({img, name, ingredients, price, id})  {
  
  const {HandleAgregarCarrito} = useContext(ContextCart);

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
          <button id="añadir" onClick={() => HandleAgregarCarrito({img, name, price, id})}>Añadir🛒</button>
        </div>
    </div>
  )
}
