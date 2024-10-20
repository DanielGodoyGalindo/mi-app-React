import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer2 = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("productos");
    const categoria = useParams().categoria;
    // useParams devuelve un objeto con los parametros obtenidos en la url
    // por ello acedemos a la categoria con la notación del punto
    // asi obtenemos la categoria en la que el usuario quiere estar
    // y podemos filtrar si la variable "categoria" existe

    useEffect(() => {
        pedirDatos()
            .then(res => {
                if (categoria) {
                    setProductos(res.filter(prod => prod.category === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("productos");
                }
            })
    }, [categoria]); // fin useEffect


    return (
        <div><ItemList productos={productos} titulo={titulo} /></div>
    );
}