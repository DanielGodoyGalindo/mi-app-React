import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {

    // hook usestate para guardar y actualizar item
    // en "item" guardaremos el objeto de item con el que estamos trabajando
    // con "setItem" primero obtendremos con promesa el item por id y lo seteamos
    const [item, setItem] = useState(null);

    // hook useParams (busca parametros en la url)
    // en este caso el parametro dinamico :id
    const id = useParams().id;

    // recibe promesa para setear item
    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then(response => { setItem({ ...response.data(), id: response.id }) });
    }, [id]);

    // llamada a componente detalleItem
    return (
        <div>
            {item && <ItemDetail item={item} />}

        </div>
    );
}