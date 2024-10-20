import { useState } from "react";

// Este componente contiene un formulario. Para guardar todos los campos
// del formulario usamos un objeto que en este caso llamamos "valores"
// que lo inicializamos con todos los campos vacios
// si no usasemos un unico objeto para todos los campos del formulario
// tendriamos que crear un estado por cada uno de los inputs

export const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado", valores);
    }

    // esta funcion setea los valores usando el spread operator del objeto "valores"
    // con lo cual obtiene el objeto con sus campos y luego despues de la coma
    // cambia el calor del campo indicado con e.target.name (este nombre de campo
    // lo obtiene del atributo "name" del input que llama a la funcion de modo
    // que si el input que llama a la funcion es "nombre", será el campo "nombre"
    // del objeto "valores" el que tome el nuevo valor indicado con "e.target.value",
    // que será el texto que se haya escrito en el input)
    const handleValores = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Indica tu nombre"
                    value={valores.nombre}
                    onChange={handleValores}
                    name="nombre" /> {/* importante llamar al input igual que el campo del objeto "valores" */}
                <input
                    type="email"
                    placeholder="Indica tu email"
                    value={valores.email}
                    onChange={handleValores}
                    name="email" />
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </div>
    );
}