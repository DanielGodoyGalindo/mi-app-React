import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link carrito" to="/carrito" title="Carrito">
                🛒 <span className="productsCounter">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
}