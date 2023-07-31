import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {cart, precioTotal, eliminarCarritoEntero} = useContext(CartContext);
    const eliminarCarrito = () => {
        eliminarCarritoEntero();
    }

  return (
    <div className="carrito-container">
        <h1 className="carrito-header">CARRITO DE COMPRAS</h1>
        {
            cart.map((comida) => (
                <div className="carrito-info" key={comida.id}>
                    <img src={comida.imagen} className="carrito-info-img" alt={comida.nombre} />
                    <h2 className="carrito-info-titulo">{comida.nombre}</h2>
                    <span className="carrito-info-cantidad">Cantidad: {comida.cantidad}</span>
                    <span className="carrito-info-precio">$ {(comida.precio).toLocaleString("de-DE")}</span>
                    <button className="eliminar-item"><i className="fa-solid fa-trash-can fa-lg"></i></button>
                </div>
            ))
        }
        <div className="carrito-footer">
            {
                cart.length > 0 ?
                <>
                    <button className="boton-vaciar" onClick={eliminarCarrito}>eliminar todos los productos del carrito</button>
                    <h3 className="total-carrito">el total de su carrito es: ${(precioTotal()).toLocaleString("de-DE")}</h3>
                    <Link className="boton-finalizar" to="/pedidos">finalizar pedido</Link>
                </> :
                <>
                    <h3 className="carrito-vacio-texto">su carrito está vacio</h3>
                    <Link className="boton-volver" to="/"><i className="fa-solid fa-reply fa-lg"></i> VOLVER AL MENU</Link>
                </>
            }
        </div>
    </div>
  )
}
