import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    // hook usestate para guardar y actualizar item
    const [item, setItem] = useState(null);

    // hook useParams (busca parametros en la url)
    // en este caso el parametro dinamico :id
    const id = useParams().id;

    // recibe promesa para setear item
    useEffect(() => {
        pedirItemPorId(Number(id)) // casteo de string
            .then((response) => {
                setItem(response);
            })
    }, [id])

    // llamada a componente detalleItem
    return (
        <div>
            {item && <ItemDetail item={item} />}

        </div>
    );
}