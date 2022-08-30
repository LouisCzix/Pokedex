import React, { useEffect, useState } from "react";
import { pokemonData, allPokemons } from "./Api";
import Header from "./components/Header";
import "./App.module.scss";
import Pokedex from "./pages/pokedex";
import pokemonCard from "./components/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

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

  return (
    <main>
      <Header />
      <Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages}></Pokedex>
    </main>
  );
}

export default App;
