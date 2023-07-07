const Item = ({ comida }) => {
  return (
    <div>
        <img src={comida.imagen} alt={comida.nombre}/>
        <h2>{comida.nombre}</h2>
        <p>{comida.precio}</p>
        <a href="*">Ver Detalle</a>
    </div>
  )
}

export default Item