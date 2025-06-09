import React, { useContext } from 'react';
import './Cart.css';
import { ContextCart, UserContext } from '../../Context/ContextCart';


export default function Cart() {

    const {cart, handleIncrease, handleDecrease, total,} = useContext(ContextCart);
    const {token} = UserContext();

    return (
    <>
    <div className='Conteiner'>
    <h2>Detalle del pedido:</h2>
    {cart.length === 0 ? (
        <p id='mensajeInicial'>El carrito esta vacío, pero puedes agregar productos:</p>
    ) : (
    <div className='carrito'>
        <ul className='listaPizzas'>
        {cart.map((detalle) => (
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
    )}
    
    <div className='total'>
        <h2>Total:<span>${total.toFixed(0)}</span></h2>
        <button disabled={!token}>Pagar</button>
    </div>
    </div>
    </>
  )
}
