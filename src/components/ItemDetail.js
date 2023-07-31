import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {comidaIndividual} ) => {
  const {clickAgregar} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const clickRestar = () => {
    cantidad > 1 && setCantidad(cantidad -1)
  }

  const clickSumar = () => {
    cantidad < comidaIndividual.stock && setCantidad(cantidad + 1)
  }

  return (
    <section className="comida-detalle-container">
      <article className="comida-detalle">
        <img src={comidaIndividual.imagen} alt={comidaIndividual.nombre} className="comida-detalle-imagen" />
        <div className="comida-detalle-info">
          <h2 className="comida-detalle-titulo">{comidaIndividual.nombre}</h2>
          <p className="comida-detalle-descripcion">{comidaIndividual.descripcion}</p>
          <p className="comida-detalle-precio">$ {(comidaIndividual.precio).toLocaleString("de-DE")}</p>
          <ItemCount clickRestar={clickRestar} cantidad={cantidad} clickSumar={clickSumar} clickAgregar={() => {clickAgregar(comidaIndividual, cantidad)}}/>
        </div>
      </article>
    </section>
  )
}

export default ItemDetail