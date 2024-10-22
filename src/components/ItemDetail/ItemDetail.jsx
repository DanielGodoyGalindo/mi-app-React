import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {

    // Hooks
    const [cantidad, setCantidad] = useState(1);
    const { agregarAlCarrito } = useContext(CartContext);

    // Funciones
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    }


    // Componente
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.image} alt={item.product} />
                <div>
                    <h3 className="titulo">{item.product}</h3>
                    <p className="descripcion">{item.description}</p>
                    <p className="categoria">Categoria: {item.category}</p>
                    <p className="precio">{item.price}</p>
                    <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                    {/* pasamos como props cantidad en stock y funciones*/}
                </div>
            </div>
        </div>
    );
}