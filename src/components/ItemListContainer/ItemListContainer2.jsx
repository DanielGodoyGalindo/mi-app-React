import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer2 = () => {

    const [productos, setProductos] = useState([]);
    const [titulo] = useState("productos");
    const categoria = useParams().categoria;
    // useParams devuelve un objeto con los parametros obtenidos en la url
    // por ello acedemos a la categoria con la notación del punto
    // asi obtenemos la categoria en la que el usuario quiere estar
    // y podemos filtrar si la variable "categoria" existe

    /* FILTRADO DE PRODUCTOS TRAYENDO TODO EL OBJETO DE PRODUCTOS */
    /* Haciendo este filtrado hacemos que sea el cliente el que haga trabajar a su sistema */
    /* Por lo que hay que buscar otra manera de traerse solo los productos de una categoria */
    /* useEffect(() => {
        const productosRef = collection(db, "productos");
        getDocs(productosRef)
            .then(resp => {
                if (categoria) {
                    const filtProds = resp.docs.filter((doc) => doc.data().category === categoria);
                    setProductos(filtProds.map(doc => { return { ...doc.data(), id: doc.id } }));
                } else {
                    setProductos(
                        resp.docs.map(doc => { return { ...doc.data(), id: doc.id } }));
                }
            })
    }, [categoria]); // fin useEffect */

    /* LA SOLUCION ES USAR UN QUERY DE FIREBASE */
    /* La query obtiene los productos basandose en una condicion where */
    /* De esta manera, solo traemos de la bdd los productos necesarios */
    useEffect(() => {
        const productosRef = collection(db, "productos");
        const consulta = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;
        getDocs(consulta)
            .then(resp => {
                setProductos(
                    resp.docs.map(doc => { return { ...doc.data(), id: doc.id } }));

            })
    }, [categoria]); // fin useEffect

    return (
        <div><ItemList productos={productos} titulo={titulo} /></div>
    );
}