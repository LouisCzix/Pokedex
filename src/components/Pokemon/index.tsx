import React from 'react';

interface PokemonProps {
  pokemons: Record<any, any>;
}

export default function pokemonCard({pokemons}: PokemonProps) {
    console.log(pokemons)
    return (
        
        <div><div>{pokemons.name}</div>
        <div>
            {pokemons.id}
        </div>
        </div>
        )
};

