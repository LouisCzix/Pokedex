import React, { useEffect, useState } from "react";
import { allpokemons } from "../../Api/index";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Record<any, any>>([]);

  const fetchPokemons = async () => {
    const result = await allpokemons();
    setPokemons(result);
  };

  useEffect(() => {
    fetchPokemons();
    console.log(pokemons);
  }, []);
  console.log("pokemons", pokemons);
  
  return <div>oi</div>;
}
