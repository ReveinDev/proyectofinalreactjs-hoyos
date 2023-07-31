import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
const cartStart = JSON.parse(localStorage.getItem("cart")) || [];
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartStart);
    const clickAgregar = (comidaIndividual, cantidad) => {
      const addItem = {...comidaIndividual, cantidad};
      const newCart = [...cart];
      const isInCart = newCart.find((comida) => comida.id === addItem.id);
  
      if(isInCart) {
        isInCart.cantidad += cantidad;
      } else {
        newCart.push(addItem);
      }
      setCart(newCart);
    }
    const cantidadTotal = () => {
      return cart.length;
    }
    const precioTotal = () => {
      return cart.reduce((acc, comida) => acc + comida.precio * comida.cantidad, 0);
    }
    const eliminarCarritoEntero = () => {
      setCart([]);
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <CartContext.Provider value={ {cart, clickAgregar, cantidadTotal, precioTotal, eliminarCarritoEntero} }>
            {children}
        </CartContext.Provider>
    )
}