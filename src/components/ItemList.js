import Item from "./Item"

const ItemList = ({ comida }) => {
  return (
    <div>
        <h1>Nuestro Menu</h1>

        <div>
            {comida.map((item) => <Item comida={item} key={item.id} />)}
        </div>
    </div>
  )
}

export default ItemList