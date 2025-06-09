import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardPizza from '../../components/CardPizza/CardPizza';
import './Pizza.css';

export default function Pizza() {
  const {id} = useParams();
    const [pizzas, setPizzas] = useState([]);

    const backEnd = "http://localhost:5000/api/pizzas";

    useEffect(() => {
      const fetchPizza = async () => {
        const respose = await fetch(`${backEnd}/${identificacion}`);
        const data = await respose.json();
        setPizzas([data])
      }
      fetchPizza()
    }, [id]);

  return (
     <div id="pizza-product">
        {pizzas.map(
          (pizza) => (
            <CardPizza
            key = {pizza.id}
            name = {pizza.name}
            ingredients = {pizza.ingredients}
            img = {pizza.img}
            price = {pizza.price}
            />
          )
        )}
    </div>
  )
}
