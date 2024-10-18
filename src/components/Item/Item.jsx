export const Item = ({producto}) => {
    return (
        <div className="producto">
            <img src={producto.image}></img>
            <div>
                <h4>{producto.product}</h4>
                <p>Precio: {producto.price}</p>
                <p>Descripcion: {producto.description}</p>
                <a className="ver-mas" href={`/item/${producto.id}`}>Ver más</a>
            </div>
        </div>
    );
}