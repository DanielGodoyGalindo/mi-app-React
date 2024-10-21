import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../helpers/primeraMayuscula";

export const Item = ({producto}) => {
    return (
        <div className="producto">
            <img src={producto.image} alt={producto.product}></img>
            <div>
                <h4>{producto.product}</h4>
                <p>Precio: {producto.price}€</p>
                <p>Categoria: <span className="texto--cursiva">{capitalizeFirstLetter(producto.category)}</span></p>
                {/* routing spa --> cambiar <a> por componente <Link /> */}
                {/* y atributo "href" por prop "to" */}
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    );
}