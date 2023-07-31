const ItemCount = ( {clickRestar, cantidad, clickSumar, clickAgregar} ) => {
  return (
    <div className="cantidad-container">
        <div className="cantidad-inner-container">
            <button className="restar-cantidad" onClick={clickRestar}><i className="fa-solid fa-circle-minus fa-xl"></i></button>
            <span className="cantidad-comida">{ cantidad }</span>
            <button className="sumar-cantidad" onClick={clickSumar}><i className="fa-solid fa-circle-plus fa-xl"></i></button>
        </div>
        <button className="boton-compra" onClick={clickAgregar}>AGREGAR AL CARRITO <i className="fa-solid fa-cart-plus fa-lg"></i></button>
    </div>
  )
}

export default ItemCount