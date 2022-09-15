import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { searchPokemon } from "../../Api";
import Search from "../Search";
import styles from "./header.module.scss";

export default function Header(props: any) {
  const { onSearchHandler } = props;
  return (
    <>
      <div className={styles.container}>
        <NavLink to='/'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            alt=''
          />
        </NavLink>

        <Search onSearchHandler={onSearchHandler} />
      </div>

      <Outlet />
    </>
  );
}
