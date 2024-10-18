/* API + React */

import React, { useEffect, useState } from "react";

export const PokemonList = () => {

    const [currentList, setCurrentList] = useState({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const [nextUrl, setNextUrl] = useState("");
    const [previousUrl, setPreviousUrl] = useState("");

    const handleAnterior = () => {
        previousUrl && setUrl(previousUrl);
    }

    const handleSiguiente = () => {
        setUrl(nextUrl);
    }

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json()) // si no se ponen las llaves no hace falta "return"
            .then((data) => {
                setCurrentList(data);
                setNextUrl(data.next);
                setPreviousUrl(data.previous);
            });
    }, [url]);

    return (
        <div>
            {
                currentList.results &&
                <div>
                    {currentList.results.map((pokemon) => {
                        return (
                            <div key={pokemon.name}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    <button onClick={handleAnterior}>Anterior</button>
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }
        </div>
    );
}