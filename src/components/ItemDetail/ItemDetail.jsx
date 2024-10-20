import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1);
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }

    const handleAgregar = () => {
        console.log({ ...item, cantidad });
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.image} alt={item.product} />
                <div>
                    <h3 className="titulo">{item.product}</h3>
                    <p className="descripcion">{item.description}</p>
                    <p className="precio">{item.price}</p>
                    <ItemCount
                        cantidad={cantidad} handleSumar={handleSumar}
                        handleRestar={handleRestar} handleAgregar={handleAgregar} />
                    {/* pasamos como props cantidad en stock y funciones*/}
                </div>
            </div>
        </div>
    );
}