import { Card, Button, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/Pokemon";
import styles from "./pokedex.module.scss"

interface PokeProps {
  pokemons: any[];
}

export default function Pokedex({pokemons}: PokeProps) {
 

  return (
   <>
   <div >
      {pokemons.map((pokemon) => (
        <PokemonCard pokemons={pokemon}/>
        ))}
    
    </div>

    </>
  );
}
