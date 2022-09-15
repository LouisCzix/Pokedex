import { useState, useEffect } from "react";
import { allPokemons, pokemonData, searchPokemon } from "../../Api";
import PageSelect from "../../components/PageSelect";
import PokemonCard from "../../components/Pokemon";
import styles from "./pokedex.module.scss";

interface IPokedex {
  pokemons: any[],
  page: number,
  totalPages: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  filteredPokemon: any[]
}

export default function Pokedex({
  pokemons,
  page,
  totalPages,
  setPage,
  filteredPokemon,
}: IPokedex) {
  
  return (
    <>
      <div>
        <PageSelect page={page} setPage={setPage} totalPages={totalPages} />

        {filteredPokemon.length !== 0 ? (
          <div className={styles.Card}>
            <div>
              <PokemonCard pokemons={filteredPokemon} />
            </div>
          </div>
        ) : (
          <div className={styles.Card}>
            {pokemons.map((pokemon: any) => (
              <div key={pokemon.id}>
                <PokemonCard pokemons={pokemon} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
