import React from 'react'
import './CardPizza.css'

export default function CardPizza({src, nombre, ingredientes, precio}) {
  return (
    <div id="card-product">
        <img id="img-product" src={src} all={nombre}/>
        <h3>Nombre: {nombre}</h3>
        <div id="card-ingredientes">
            <h5>Ingrediente:</h5>
            <p>{ingredientes}</p>
        </div>
        <span>Precio: $ {precio}</span>
        <div id="card-button">
          <button>Ver Mas👀</button>
          <button id="añadir">Añadir🛒</button>
        </div>
    </div>
  )
}
