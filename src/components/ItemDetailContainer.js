import { useEffect, useState } from "react"
import { obtenerItemsId } from "../helpers/ObtenerItems";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [comidaIndividual, setComidaIndividual] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      obtenerItemsId(Number(id))
          .then((respuesta) => {
              setComidaIndividual(respuesta);
          })
    }, [id]);

  return (
    <main>
        {comidaIndividual && <ItemDetail comidaIndividual= {comidaIndividual} />}
    </main>
  )
}