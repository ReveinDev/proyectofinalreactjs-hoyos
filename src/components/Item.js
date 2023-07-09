import { Link } from "react-router-dom"

const Item = ({ comida }) => {
  return (
    <div className="card-comidas">
      <img src={comida.imagen} alt={comida.nombre} className="comidas-img"/>
      <div className="comidas-info">
        <h3 className="comidas-nombre">{comida.nombre}</h3>
        <p className="comidas-precio">$ {(comida.precio).toLocaleString("de-DE")}</p>
        <Link to={`/comida/${comida.id}`} className="btn comidas-boton-detalle">Ver Detalle</Link>
      </div>
    </div>
  )
}

export default Item