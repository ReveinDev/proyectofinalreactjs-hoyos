import { useEffect } from "react";
import { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CartContext = createContext();
const cartStart = JSON.parse(localStorage.getItem("cart")) || [];
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(cartStart);
    const clickAgregar = (comidaIndividual, cantidad) => {
      const addItem = {...comidaIndividual, cantidad};
      const newCart = [...cart];
      const isInCart = newCart.find((comida) => comida.id === addItem.id);
      const SwalAgregarComida = withReactContent(Swal);
  
      if(isInCart) {
        isInCart.cantidad += cantidad;
      } else {
        newCart.push(addItem);
      }
      SwalAgregarComida.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: "success",
        title: "Item agregado al carrito exitosamente",
        background: "#a5dc86",
        iconColor: "white"
      });
      setCart(newCart);
    }
    const clickEliminar = (comidaId) => {
      const newCart = cart.filter((comida) => comida.id !== comidaId);
      const SwalEliminarComida = withReactContent(Swal);
      SwalEliminarComida.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        icon: "success",
        title: "Item eliminado del carrito exitosamente",
        background: "#f27474",
        iconColor: "white"
      });
      setCart(newCart);
    }
    const cantidadTotal = () => {
      return cart.length;
    }
    const precioTotal = () => {
      return cart.reduce((acc, comida) => acc + comida.precio * comida.cantidad, 0);
    }
    const eliminarCarritoEntero = () => {
      const SwalVaciarCarrito = withReactContent(Swal);
      SwalVaciarCarrito.fire({
        title: "Estas seguro de eliminar tu carrito?",
        showCancelButton: true,
        cancelButtonColor: "#F71735",
        confirmButtonText: "Vaciar Carrito",
        confirmButtonColor: "#17E7B7",
        cancelButtonText: "Cancelar"
      })
        .then((result) => {
          if(result.isConfirmed) {
            SwalVaciarCarrito.fire("Su carrito ha sido eliminado exitosamente", "", "success")
            setCart([]);
          } 
        });
    }
    const eliminarCarritoEnteroPedidoTerminado = () => {
      setCart([]);
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <CartContext.Provider value={ {cart, clickAgregar, cantidadTotal, precioTotal, eliminarCarritoEntero, clickEliminar, eliminarCarritoEnteroPedidoTerminado} }>
            {children}
        </CartContext.Provider>
    )
}