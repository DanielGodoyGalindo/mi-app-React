export const Usuario = ({ nombre, edad, nacionalidad }) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <p>{edad}</p>
            <p>{nacionalidad}</p>
            <hr />
        </div>
    );
}