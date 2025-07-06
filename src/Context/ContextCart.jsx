import { createContext, useState } from "react";
import { pizzaCart } from "../assets/JS/pizzas";

export const ContextCart = createContext();

export const CartProvider = ({children}) => {
const [cart, setCart] = useState(
    pizzaCart.map((pizza) => ({ ...pizza, count: 0}))
);

const nuevaPizzaCount = (id, increment = true) => {
    const updatedCart = cart
        .map((pizza) => 
            pizza.id === id
                ? {...pizza, 
                    count: Number(pizza.count || 0) + (increment ? 1 : -1),    
                }
                : pizza)
                .filter((pizza) => (pizza.count || 0) > 0);

                setCart(updatedCart);
};

const handleIncrease = (id) => nuevaPizzaCount(id, true);

const handleDecrease = (id) => nuevaPizzaCount(id, false);

const HandleAgregarCarrito = (pizza) => {
    setCart((prevCart) => {
        const pizzaDentroCarrito = prevCart.find((p) => p.id === pizza.id);

        if (pizzaDentroCarrito) {
            return prevCart.map((p) => 
            p.id === pizza.id 
            ? {...p, count: Number(p.count || 0) + 1}
            : p
            );
        } else {

            return [...prevCart, {...pizza, count: 1}];
        }
    });
};

const clearCart = () => {
    setCart([])
};

const total = cart.reduce((acc, pizza) => {
    const price = Number(pizza.price) || 0;
    const count = Number(pizza.count) || 0;
    return acc + price * count;
}, 0);

const contextValue = {
    cart,
    handleIncrease,
    handleDecrease,
    HandleAgregarCarrito,
    total,
    clearCart
};
console.log(cart);

return (
    <ContextCart.Provider value={contextValue}>
    {children}
    </ContextCart.Provider>
);
};