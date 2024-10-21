import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CarContext";

export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link" to="/carrito">
                🛒 <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
}