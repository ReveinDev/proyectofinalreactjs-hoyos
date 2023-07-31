import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../firebase/configdb";

export const ItemListContainer = () => {
    const [comida, setComida] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Nuestro Menu");

    useEffect(() => {
      const refDb = collection(database, "menucomidas");
      const qry = categoria ? query(refDb, where("categoria", "==", categoria)) : refDb;

      getDocs(qry)
        .then((respuesta) => {
          setComida(
            respuesta.docs.map((db) => {
              return { ...db.data(), id: db.id }
            })
          )
          if(categoria) {
            setTitulo(categoria);
          } else {
            setTitulo("Nuestro Menu");
          }
        })
    }, [categoria]);
    
  return (
    <main>
        <ItemList comida={comida} titulo={titulo}/>
    </main>
  )
}
