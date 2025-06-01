import { createContext, useState } from "react";
import { pizzaCart } from "../assets/JS/pizzas";
export const ContextCart = createContext();

export const CartProvider = ({Children}) => {
const [cart, setCart] = useState(pizzaCart);

const nuevaPizzaCount = (id, increment = true) => {
    setCart((prevCart) =>
        prevCart.map((pizza) => 
            pizza.id === id
                ? {...pizza, count: increment ? pizza.count + 1 : pizza.count -1}
                : pizza)
                ).filter((pizza) => pizza.count > 0)
}

const handleIncrease = (id) => nuevaPizzaCount(id, true);

const handleDecrease = (id) => nuevaPizzaCount(id, false);

const HandleAgregarCarrito = (id) => {
    setCart((prevCart) => {
        const pizzaDentroCarrito = prevCart.find((pizza) => pizza.id === id);

        if (pizzaDentroCarrito) {
            return prevCart.map((pizza) => 
            pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza
            );
        } else {
            const pizzaAgregar = pizzaCart.find((pizza) => pizza.id === id);
            return [...prevCart, {...pizzaAgregar, count: 1}];
        }
    });
};

const total = cart.reduce((acc, pizza) => {
    const price = isNaN(pizza.price) ? 0 : pizza.price;
    const count = isNaN(pizza.count) ? 0 : pizza.count;
    return acc + price * count;
}, 0);

const contextValue = {
    cart,
    handleIncrease,
    handleDecrease,
    HandleAgregarCarrito,
    total,
};

return <ContextCart.Provider value={contextValue}>{Children}</ContextCart.Provider>
}