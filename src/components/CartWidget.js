import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);

    return  <Link className="btn boton-carrito" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cantidad-carrito">{cantidadTotal()}</span>
            </Link>
}