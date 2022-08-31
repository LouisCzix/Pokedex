import React, { useEffect, useState } from "react";
import { pokemonData, allPokemons, searchPokemon } from "./Api";
import Header from "./components/Header";
import "./App.module.scss";
import Pokedex from "./pages/pokedex";
import pokemonCard from "./components/Pokemon";
import Search from "./components/Search";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 30;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await allPokemons(itensPerPage, itensPerPage * page);
      const promises = result.results.map(async (pokemon: any) => {
        return await pokemonData(pokemon.url);
      });

      const response = await Promise.all(promises);
      setPokemons(response);
      setLoading(false);
      setTotalPages(Math.ceil(result.count / itensPerPage));
    } catch (error) {
      console.log("error fetch ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, [page]);

  const onSearchHandler = async (pokemon: any) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <main>
      <Header pokemons={pokemons} />
      <Search onSearch={onSearchHandler} />
      {notFound ? (
        <div>Pokémon not found in your Pokédex</div>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        ></Pokedex>
      )}
    </main>
  );
}

export default App;
