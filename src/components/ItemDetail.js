const ItemDetail = ( {comidaIndividual} ) => {
  return (
    <section className="comida-detalle-container">
      <article className="comida-detalle">
        <img src={comidaIndividual.imagen} alt={comidaIndividual.nombre} className="comida-detalle-imagen" />
        <div className="comida-detalle-info">
          <h2 className="comida-detalle-titulo">{comidaIndividual.nombre}</h2>
          <p className="comida-detalle-descripcion">{comidaIndividual.descripcion}</p>
          <p className="comida-detalle-precio">$ {(comidaIndividual.precio).toLocaleString("de-DE")}</p>
        </div>
      </article>
    </section>
  )
}

export default ItemDetail