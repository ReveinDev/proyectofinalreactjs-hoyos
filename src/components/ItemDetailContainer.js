import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/configdb";


export const ItemDetailContainer = () => {
    const [comidaIndividual, setComidaIndividual] = useState(null);
    const id = useParams().id;

    useEffect(() => {
      const refDbDoc = doc(database, "menucomidas", id)
      getDoc(refDbDoc)
        .then((respuesta) => {
          setComidaIndividual(
            { ...respuesta.data(), id: respuesta.id }
          )
        })
    }, [id]);

  return (
    <main>
        {comidaIndividual && <ItemDetail comidaIndividual= {comidaIndividual} />}
    </main>
  )
}