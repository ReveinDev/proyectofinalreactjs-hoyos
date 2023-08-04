import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {cart, precioTotal, eliminarCarritoEntero, clickEliminar} = useContext(CartContext);
    const eliminarCarrito = () => {
        eliminarCarritoEntero();
    }

  return (
    <div className="carrito-container">
        <h1 className="carrito-header">CARRITO DE COMPRAS</h1>
        {
            cart.map((comida) => (
                <div className="carrito-info" key={comida.id}>
                    <div className="carrito-info-inner">
                        <img src={comida.imagen} className="carrito-info-img" alt={comida.nombre} />
                        <p className="carrito-info-titulo">{comida.nombre}</p>
                        <p className="carrito-info-cantidad">cantidad: {comida.cantidad}</p>
                        <p className="carrito-info-precio">$ {(comida.precio).toLocaleString("de-DE")}</p>
                        <button className="eliminar-item" onClick={() => clickEliminar(comida.id)}><i className="fa-solid fa-trash-can fa-lg"></i></button>
                    </div>
                </div>
            ))
        }
        <div className="carrito-footer">
            {
                cart.length > 0 ?
                <>
                    <div className="carrito-footer-lleno">
                        <button className="boton-vaciar" onClick={eliminarCarrito}>eliminar todos los productos del carrito</button>
                        <p className="total-carrito">el total de su carrito es: $ {(precioTotal()).toLocaleString("de-DE")}</p>
                        <Link className="boton-finalizar" to="/pedidos">finalizar pedido</Link>
                    </div>
                </> :
                <>
                    <div className="carrito-footer-vacio">
                        <p className="carrito-vacio-texto">su carrito está vacio</p>
                        <span className="carrito-vacio-img"><i class="fa-solid fa-face-frown fa-xl"></i></span>
                        <Link className="boton-volver" to="/"><i className="fa-solid fa-reply fa-lg"></i> VOLVER AL MENU</Link>
                    </div>
                </>
            }
        </div>
    </div>
  )
}
