import { useState, useEffect } from "react";
import data from "../../data/products.json"


export const ItemListContainer = () => {

    // Definimos hook de estado
    const [productos, setProductos] = useState([]);

    // Con una promesa obtenemos datos de los productos del json
    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }

    // Usamos hook useEffect para setear los productos en el componente
    // y no se actualice cada vez que el componente se actualiza
    useEffect(() => {
        pedirProductos()
            .then((result) => {
                setProductos(result);
            });

    }, []);

    // Mostrar datos del json
    return (
        <div>
            <h1>Productos</h1>
            {/* Si productos no esta vacio && mostrar datos */}
            {productos.length > 0 &&
                productos.map((producto) => { // con un map por cada producto devolvemos un div con la info
                    return (
                        <div key={producto.id}> {/* Cada elemento que devuelve map debe tener una clave unica */}
                            <img src={producto.image} alt={producto.product} />
                            <h3>Producto: {producto.product}</h3>
                            <p>Precio: {producto.price}</p>
                            <p>Descripcion: {producto.description}</p>
                            <hr />
                        </div>
                    )
                })

            }
        </div>
    );
}