import Item from "./Item"

const ItemList = ({ comida, titulo }) => {
  return (
    <section>
        <h1 className="titulo-pagina">{titulo}</h1>

        <article className="comidas-container">
            {comida.map((item) => <Item comida={item} key={item.id} />)}
        </article>
    </section>
  )
}

export default ItemList