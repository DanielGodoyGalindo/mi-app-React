import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>Mi tienda</h1> </Link>
            <ul className="menu">
                {/* para activar el routing spa */}
                {/* se modifican los elementos anchor por componentes Link */}
                {/* el atributo "href" de los anchor se cambia a "to" */}
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/comida">Comida</Link></li>
                <li><Link className="menu-link" to="/productos/bebida">Bebida</Link></li>
                <li><Link className="menu-link" to="/productos/menaje">Menaje</Link></li>
                <li><Link className="menu-link" to="/productos/limpieza">Limpieza</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}