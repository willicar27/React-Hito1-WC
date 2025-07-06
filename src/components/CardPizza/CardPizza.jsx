import React, { useContext } from 'react';
import './CardPizza.css';
import {ContextCart} from '../../Context/ContextCart';
import { useNavigate  } from 'react-router-dom';
export default function CardPizza({img, name, ingredients, price, id})  {
  
  const {HandleAgregarCarrito} = useContext(ContextCart);
  const navigate = useNavigate();
  const createCart = (pizzaId, pizzaName, pizzaImg, pizzaPrice) => {
    const newElementCart = {pizzaId, pizzaName, pizzaImg, pizzaPrice, quantity: 1, };
    HandleAgregarCarrito(newElementCart);
  }

  const VerPizza =() => {
    navigate(`/pizza/${id}`);
  };

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
          <button onClick={VerPizza}>Ver Mas👀</button>
          <button id="añadir" onClick={() => createCart({id, img, name, price,})}>Añadir🛒</button>
        </div>
    </div>
  )
}
