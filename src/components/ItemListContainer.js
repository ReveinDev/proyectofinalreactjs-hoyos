import { useEffect, useState } from "react";
import { obtenerItems } from "../helpers/ObtenerItems";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
    const [comida, setComida] = useState([]);

    useEffect(() => {
        obtenerItems()
            .then((respuesta) => {
                setComida(respuesta);
            });
    }, []);
    

  return (
    <div>
        <ItemList comida = {comida} />
    </div>
  )
}
