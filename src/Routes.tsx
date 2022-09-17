import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.module.scss";
import Pokedex from "./pages/pokedex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allPokemons, pokemonData, searchPokemon } from "./Api";
import InfoPokemon from "./components/Info";

export default function AppRoutes() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
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
  }, [page]);

  const onSearchHandler = async (pokemon: any) => {
    try {
      setLoading(true);
      setNotFound(false);

      if (pokemon !== "") {
        const data = await searchPokemon(pokemon.toLowerCase());
        setFilteredPokemon(data);
      } else {
        fetchPokemons();
        setFilteredPokemon([]);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  console.log(filteredPokemon);

  return (
    <>
      <main>
        <React.StrictMode>
          <Router>
            <Routes>
              <Route
                path='/'
                element={<Header onSearchHandler={onSearchHandler} />}
              >
                <Route
                  index
                  element={
                    <Pokedex
                      pokemons={pokemons}
                      page={page}
                      totalPages={totalPages}
                      setPage={setPage}
                      filteredPokemon={filteredPokemon}
                    />
                  }
                />
                <Route path="details/:id" element={<InfoPokemon />} />
              </Route>
            </Routes>
          </Router>
        </React.StrictMode>
      </main>
    </>
  );
}
