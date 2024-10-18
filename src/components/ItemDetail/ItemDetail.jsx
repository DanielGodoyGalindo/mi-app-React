export const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.image} alt={item.product} />
                <div>
                    <h3 className="titulo">{item.product}</h3>
                    <p className="descripcion">{item.description}</p>
                    <p className="precio">{item.price}</p>
                </div>
            </div>
        </div>
    );
}