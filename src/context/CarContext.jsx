import { createContext, useEffect, useState } from "react";

/* Que es un Context */
/* El contexto permite que cierta información del componente padre esté disponible 
    en cualquier componente del árbol que esté por debajo de él sin importar qué tan 
    profundo sea y sin pasar la información explícitamente por medio de props. */
/* https://es.react.dev/learn/passing-data-deeply-with-context */
/* Para usarlo tenemos que envolver todas las rutas en App.jsx dentro del contexto */
export const CartContext = createContext();

/* Obtener carrito de local Storage, y si no lo hay, obtener un array vacio */
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

/* Se usa el prop children para indicar al componente que dentro de él se generan otros componentes
    por ello en App.jsx se abre el componente CartProvider, dentro se incluyen otros componentes
    y por último se cierra con  </CartProvider> */
export const CartProvider = ({children}) => {

    // Variables
    /* Usaremos este hook para almacenar los productos del carrito */
    const [carrito, setCarrito] = useState(carritoInicial);

    // Funciones
    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }; // obtener que item y su cantidad
        const nuevoCarrito = [...carrito]; // lo usamos para agregar productos al original
        const estaEnCarrito = nuevoCarrito.find(producto => producto.id === itemAgregado.id); // buscamos si ya está el producto en el carrito
        if (estaEnCarrito) {
            estaEnCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...nuevoCarrito, itemAgregado]);
        }
    }

    const cantidadEnCarrito = () => { // acumula la cantidad de items en el carrito
        return carrito.reduce((acumulado, producto) =>
            acumulado + producto.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acumulado, producto) =>
            acumulado + (producto.price * producto.cantidad), 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    /* usamos useEffect para almacenar los cambios del carrito en el localStorage */
    useEffect(() => {
      localStorage.setItem("carrito",JSON.stringify(carrito));
    }, [carrito]);
    

    return (
        /* Definimos el contexto para usar el componente CartContext */
        <CartContext.Provider
            value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
            {children} {/* indicamos que hay componentes hijos dentro de este componente */}
        </CartContext.Provider>
    );


}