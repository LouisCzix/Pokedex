import React, { useState } from "react";
import styles from "./Search.module.scss";
import { HiSearch } from "react-icons/hi";

export default function Search(props: any) {
  const [search, setSearch] = useState("");
  const { onSearchHandler } = props;

  const onChangeHandler = (event: any) => {
    setSearch(event.target.value);
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    onSearchHandler(search);
  };

  console.log("teste", search);
  return (
    <div className={styles.container}>
      <form name='search' onSubmit={submitForm}>
        <input
          type='text'
          onChange={onChangeHandler}
          placeholder='Look up a Pokémon..'
        />
      </form>
    </div>
  );
}
