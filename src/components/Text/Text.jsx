import { useState } from "react";
import { TextH2 } from "../TextH2/TextH2";


export const Text = () => {

    // Definir estado para mostrar u ocultar texto
    // hook useState devuelve array [valor estado, funcion que modifica el estado]
    // useState(valor inicial)
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            {/* El texto del botón vendrá determinado por el valor de "show" */}
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {/* Si show es true muestra el h2 sino no muestra nada */}
            {show ? <TextH2 /> : ""}
        </div>
    );
};