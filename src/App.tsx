import React, { useEffect, useState } from "react";
import { pokemonData, allPokemons } from "./Api";
import Header from "./components/Header";
import "./App.module.scss";
import Pokedex from "./pages/pokedex";
import pokemonCard from "./components/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const fetchPokemons = async () => {
    try {
      const result = await allPokemons();
      const promises = result.results.map(async (pokemon: any) => {
        return await pokemonData(pokemon.url);
      });

      const response = await Promise.all(promises);
      setPokemons(response);
    } catch (error) {
      console.log("error fetch ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, []);

  return (
    <main>
      <Header />
      <Pokedex pokemons={pokemons}></Pokedex>
    </main>
  );
}

export default App;
