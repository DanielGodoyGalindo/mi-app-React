import { useState, useEffect } from "react";

export const TextH2 = () => {
    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log("Componente montado!");

        return () => {
            console.log("Componente montado!");
        }
    }, []);

    useEffect(() => {

        return () => {
            console.log("Texto modificado!");
        }
    }, [text])

    return (
        <div>
            <input type="text" onChange={handleText} />
            <h2>{text}</h2>
        </div>

    );
}

// Ciclo de vida de un componente
// Un componente tiene tres fases: montado, actualización y desmontado
// mount, update y unmount