import React, { useContext, useState } from 'react';
import './Cart.css';
import { ContextCart } from '../../Context/ContextCart';
import { useUser } from "../../Context/UserContext"
import { Link } from "react-router-dom";

export default function Cart() {

    const {cart, handleIncrease, handleDecrease, total,  clearCart} = useContext(ContextCart);
    const {token} = useUser();

    const handlePayment = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ cartItems: cart, total})
            })

            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(errorText || 'Error al procesar el pago')
            }
            clearCart()
            alert('Pago Exitoso. Gracias por tu compra!')
        }
        catch (error) {
            console.error('Error en el checkout:', error.message)
            alert('Error en el checkut: ' + error.message)
        }
    }

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
        <button disabled={!token || cart.length === 0} onClick={handlePayment}>Pagar</button>
        <Link to="/">seguir comprando</Link>
    </div>
    </div>
    </>
  )
}
