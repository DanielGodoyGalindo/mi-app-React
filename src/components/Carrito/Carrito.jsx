import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>
            {carrito.map((producto) => (
                <div key={producto.id}>
                    <br />
                    <h3 key={producto.id}>{producto.product}</h3>
                    <p>Precio unitario: {producto.price}€</p>
                    <p>Precio total: {producto.price * producto.cantidad}€</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <br />
                </div>
            ))
            }
            {carrito.length > 0 ?
                <> {/* Fragmento usado en React para agrupar varios elementos en uno */}
                    <h2>Precio total: {precioTotal()}€</h2>
                    <br />
                    {<button onClick={handleVaciar} className="enviar">Vaciar carrito</button>}
                    <br />
                    <Link className="menu-link finalizar-compra" to="/checkout">Finalizar compra</Link>
                </>
                :
                <>
                    <br />
                    <span>El carrito está vacio</span>
                </>
            }
        </div >
    );
}