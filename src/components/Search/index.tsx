import React, { useState } from "react";
import styles from "./Search.module.scss";

export default function Search({ onSearch }: any) {
  const [search, setSearch] = useState("");
  const onChangeHandler = (e: any) => {
    setSearch(e.target.value);
    if (e.target.value.lenght === 0) {
      onSearch(undefined);
    }
    console.log(search);
  };

  const onBtnClickHandler = () => {
    onSearch(search);
  };

  return (
    <div>
      <div>
        <input
          type='search'
          onChange={onChangeHandler}
          placeholder='Look up a Pokémon'
        />
      </div>
      <div>
        <button onClick={onBtnClickHandler}> Search </button>
      </div>
    </div>
  );
}
