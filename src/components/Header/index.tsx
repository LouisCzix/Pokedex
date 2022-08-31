import { useEffect, useState } from "react";
import styles from "./header.module.scss";

interface PokeProps {
  pokemons: any[];
}

export default function Header({pokemons}: PokeProps) {
  

  
  return (
    <>
      <div className={styles.container}>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt=''
        />
      </div>

    </>
  );
}
