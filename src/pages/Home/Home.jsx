import React, {useEffect,useState} from 'react';
import "./Home.css";
import  Header  from '../../components/Header/Header';


export default function Home() {
  const [pizzas,setPizza] = useState([]);

  async function fetchPizza() {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      console.log(data);
      setPizza(data);
    } 
    catch (error) {
      alert("Tenemos un error inesperado.");
    }
  }
  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <>
    <Header />
    <div id="menu-cards">
      {pizzas.map((pizza) => (
          <div id="card-product" key={pizza.id}>
            <h3 id="titulo-card">{pizza.name}</h3>
        <img id="img-product" src={pizza.img} alt={pizza.name}/>
        <div id="card-ingredientes">
            <h5>Ingrediente:</h5>
            <ul>
              {pizza.ingredients.map((ingredient,index) =>
              <li className='ingredientes' key={index}>{ingredient}</li>)}
            </ul>
        </div>
        <span>Precio: $ {pizza.price}</span>
        <div id="card-button">
          <button>Ver Mas👀</button>
          <button id="añadir">Añadir🛒</button>
        </div>
    </div>
      ))}
      </div>    
    
    </>
  )
}
