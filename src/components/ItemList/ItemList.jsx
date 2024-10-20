import { Item } from "../Item/Item";
import { capitalizeFirstLetter } from "../../helpers/primeraMayuscula";

export const ItemList = ({ productos, titulo }) => {
    titulo = capitalizeFirstLetter(titulo);
    return (
        <div className="container">
            <h1 className="main-title">{titulo}</h1>
            <div className="productos">
                {productos.map(prod => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    );
}