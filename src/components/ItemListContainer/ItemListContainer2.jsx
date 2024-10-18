import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer2 = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirDatos()
            .then(res => setProductos(res))
    }, [])


    return (
        <div><ItemList productos={productos}/></div>
    );
}