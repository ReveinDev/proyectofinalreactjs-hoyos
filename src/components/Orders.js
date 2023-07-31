import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { database } from "../firebase/configdb";

export const Orders = () => {
    const {cart, precioTotal, eliminarCarritoEntero} = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    const [orderId, setOrderId] = useState("");
    const ordenPedido = (datos) => {
        const pedido = {
            buyer: datos,
            items: cart.map((item) => {
                return { id: item.id, title: item.nombre, quantity: item.cantidad, price: item.precio }
            }),
            date: serverTimestamp(),
            total: precioTotal()
        }
        const refOrdenPedido = collection(database, "orders");
        addDoc(refOrdenPedido, pedido)
            .then((res) => {
                setOrderId(res.id);
                eliminarCarritoEntero();
            })
    }

    if(orderId) {
        return (
            <div>
                <h2>muchas gracias por tu compra!</h2>
                <p>tu numero de orden de pedido es: {orderId}</p>
            </div>
        );
    }

  return (
    <div className="formulario-container">
        <h1 className="formulario-titulo">orden de compra</h1>
        <form className="formulario-inner" onSubmit={handleSubmit(ordenPedido)}>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName" placeholder="Name" {...register("nombre")} required />
                <label htmlFor="floatingName">Ingresa tu nombre</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingEmail" placeholder="Email" {...register("email")} required />
                <label htmlFor="floatingEmail">Ingresa tu email</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingPhone" placeholder="Phone" {...register("telefono")} required />
                <label htmlFor="floatingPhone">Ingresa tu numero de telefono</label>
            </div>
            <button className="btn btn-primary" type="submit">finalizar compra</button>
        </form>
    </div>
  )
}
