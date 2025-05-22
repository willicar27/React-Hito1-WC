import React from 'react'
import './Navbar.css'

export default function Navbar() { 
  let token = true;
  const total = 25000;
  //funcion que formatea el total
  const formatPrice = (amount) => {
    return amount.toLocaleString("es-ES", {
      style: "currency",
      currency: "CLP",
    })
  }
  return (
    <div id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <button id="home">🍕Home</button>
      <section id='section-perfil'>
        {token && <div>🔒Profile</div>}
        {token && <div>🔓Logout</div>}
        {!token && <div>🔏login</div>}
        {!token && <div>🔐Register</div>}
      </section>
      <button id="total">🛒 ${formatPrice(total)}</button>
    </div>
  )
}
