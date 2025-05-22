import React, { useState, useEffect } from 'react'
import './Pizza.css'
export default function Pizza() {
    const [pizzas, setPizzas] = useState([]);
    const [seleccionPizza, setSeleccionPizza] = useState(null);

    async function fetchPizza() {
        try {
            const respose = await fetch("http://localhost:5000/api/pizzas");
            const data = await respose.json();

            setPizzas(data);

            const pizzaDisponible = data.find((pizza) => pizza.id === 'p001');
            setSeleccionPizza(pizzaDisponible || null);    
        }
        catch {
            alert('Existe un error inesperado.');
        }
    }
    useEffect(() => {
    fetchPizza();
    }, []);

    if(!seleccionPizza) {
      return (<p>No se encuentra la pizza con el ID indicado.</p>);
    }

  return (
     <div id="pizza-product">
        <h3 id="nombre-pizza">{seleccionPizza.name}</h3>
        <div className='figura-pizza'>
        <img id="img-pizza" src={seleccionPizza.img} alt={seleccionPizza.name}/>
        <div id="pizza-ingredientes">
            <h5>Ingrediente:</h5>
            <ul>
              {seleccionPizza.ingredients.map((ingredient,index) =>
              <li className='ingredientes' key={index}>{ingredient}</li>)}
            </ul>
        </div>
        </div>
        
        <div>
          <p>{seleccionPizza.desc}</p>
        </div>
        
        <div id="card-button">
          <span>Precio: $ {seleccionPizza.price}</span>
          <button id="añadir">Añadir🛒</button>
        </div>
    </div>
  )
}
