import React, { useEffect, useState } from "react";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    const handleAnterior = () => {
        id > 1 && setId(id - 1);
    }

    const handleSiguiente = () => {
        if (id < 1025)
            setId(id + 1);
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(resp => { return resp.json(); })
            .then(data => { setPokemon(data); })
        // fetch se usa para realizar peticiones y obtener respuestas
        // nos devuelve una promesa. Para obtener la promesa debemos usar .then
        // Se hacen dos .then para obtener los datos del fetch
        // Con solo el primero se recibe un objeto response
        // Se convierte a .json y con el segundo .then se obtienen
        // los datos de esa response
    }, [id]); // si indicamos "id" dentro del array de dependencia le estamos diciendo que
    // se ejecute el hook useEffect cuando el id cambie
    // Si el objeto pokemon existe mostrar un div con su nombre y su imagen
    return (
        <div>{
            pokemon &&
            <div>
                <h1>{pokemon.name}</h1>
                <p>ID: {pokemon.id}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <br />
                {
                    pokemon.id > 1 ?
                        <button onClick={handleAnterior}>Anterior</button> :
                        <button disabled>Anterior</button>
                }
                <button onClick={handleSiguiente}>Siguiente</button>
            </div>
        }
        </div>
    );
}