import { useEffect, useState } from "react";
import { obtenerItems } from "../helpers/ObtenerItems";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [comida, setComida] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Nuestro Menu");

    useEffect(() => {
        obtenerItems()
            .then((respuesta) => {
                if(categoria) {
                  setComida(respuesta.filter((comida) => comida.categoria === categoria));
                  setTitulo(categoria);
                } else {
                  setComida(respuesta);
                  setTitulo("Nuestro Menu");
                }
            });
    }, [categoria]);
    

  return (
    <main>
        <ItemList comida={comida} titulo={titulo}/>
    </main>
  )
}
