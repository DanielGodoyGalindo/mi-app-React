import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const CheckOut = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [ pedidoId , setPedidoId ] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        };
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((resolve,reject) => {
                if (resolve){
                    /* Compra realizada con éxito */
                    setPedidoId(resolve.id);
                    vaciarCarrito();
                } else if (reject) {
                    console.log("Ha habido un error en la compra");
                }
            })
    }

    /* E el caso de que se haya realizado un pedido, tendremos un valor en la variable pedidoId */
    /* En ese caso retornaremos el componente con este mensaje, sino, se devuelve el formulario */
    /* para que el usuario confirme el pedido con sus datos */
    if (pedidoId){
        return (
            <div className="container">
                <h1 className="main-title">¡Muchas gracias por tu compra!</h1>
                <p className="parrafo">El número de tu pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Indica tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Indica tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Indica tu número de telefono" {...register("telefono")} />
                <button type="submit" className="enviar">Comprar</button>
            </form>
        </div>
    );
}