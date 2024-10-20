import { useEffect } from "react";

export const Nosotros = () => {

    // Si se quiere trabajar con eventListeners hay que incluir una funcion no anonima
    // dentro de un euseEffect para hacer algo cuando se inicie el evento
    // y para que ese evento finalice, se debe de retornar la misma funcion en el
    // useEffect (todo lo que se indique en el return de useEffect se ejecutará
    // cuando el componente se desmonta)

    useEffect(() => {

        const hacerClick = () => {
            console.log("Click");
        }

        window.addEventListener("click", hacerClick);

        return () => {
            window.removeEventListener("click", hacerClick);
        }
    }, [])


    return (
        <div className="container">
            <h1 className="main-title">Nosotros</h1>
            <p>Este es el componente "Nosotros"</p>
        </div>
    );
}