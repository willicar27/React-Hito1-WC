import React, { useState } from 'react';
import { Pizzas } from '../Home/pizzas';
import './Cart.css';


export default function() {
    const [listaPizza,setListaPizza] = useState(
        Pizzas.map(pizza => ({...pizza, count: 0 }))
    );
    //funcion de sumar productos 
    const handleIncrease = (id) => {
        setListaPizza((prevListaPizza) =>
        prevListaPizza.map((detalle) => {
            if (detalle.id === id) {
                return {...detalle, count: detalle.count + 1};
            }
            return detalle
        })
        )
    }

    //funcion de restar productos 
    const handleDecrease = (id) => {
        setListaPizza((prevListaPizza) =>
        prevListaPizza.map((detalle) => {
            if (detalle.id === id && detalle.count >= 0) {
                return {...detalle, count: detalle.count - 1};
            }
            return detalle;
        })
        )
    }

    //funcion para el total de productos
    const total = listaPizza.reduce((acc, detalle) => {
        let price = Number(detalle.price);
        let count = Number(detalle.count);
        return acc + price * count;
    }, 0);

    return (
    <>
    <div className='Conteiner'>
    <h2>Detalle del pedido:</h2>
    {listaPizza.every(pizza => pizza.count === 0) && (
        <p id='mensajeInicial'>El carrito esta vacío, pero puedes agregar productos:</p>
    )}
    <div className='carrito'>
        <ul className='listaPizzas'>
        {listaPizza.map((detalle) => (
            <li className='itemPizza' key={detalle.id}>
            <div className='productoPizza'>
                <img src={detalle.img} alt={detalle.name} />
                <h3>{detalle.name}</h3>
                <p>${detalle.price}</p>
                <button onClick={() => handleDecrease(detalle.id)}>-</button>
                <span>{detalle.count}</span>
                <button onClick={() => handleIncrease(detalle.id)}>+</button>
            </div>
            </li>
        )
    )}
        </ul>
    </div>
    
    <div className='total'>
        <h2>Total:<span>${total.toFixed(0)}</span></h2>
        <button>Pagar</button>
    </div>
    </div>
    </>
  )
}
