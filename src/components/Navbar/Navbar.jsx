import React from 'react'
import './Navbar.css'

export default function Navbar({precio}) { 
  const token = true;
  return (
    <div id="navbar">
      <h3>Pizzería Mamma Mía!</h3>
      <button id="home">🍕Home</button>
      <ul id="menu">
        {token && <li>🔒Profile</li>}
        {token && <li>🔓Logout</li>}
        {!token && <li>🔏login</li>}
        {!token && <li>🔐Register</li>}
      </ul>
      <button id="total">🛒total:${precio}</button>
    </div>
  )
}
