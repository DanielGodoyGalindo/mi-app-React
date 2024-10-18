import { useEffect, useState } from "react";
import { pedirItemPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ itemId }) => {

    // hook usestate para guardar y actualizar item
    const [item, setItem] = useState(null);

    // recibe promesa para setear item
    useEffect(() => {
        pedirItemPorId(itemId)
            .then((response) => {
                setItem(response);
            })
    }, [])

    // llamada a componente detalleItem
    return (
        <div>
            {item && <ItemDetail item={item} />}

        </div>
    );
}