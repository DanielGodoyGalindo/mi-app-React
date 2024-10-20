import { useForm } from "react-hook-form";

// Formulario que usa react-hook-form
// Es una libreria para la validadción de formularios
// (Validación mejor implementada que la del componente de Contacto.jsx)

export const ContactoHookForm = () => {

    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Indica tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Indica tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Indica tu número de telefono" {...register("telefono")} />
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </div>
    );
}