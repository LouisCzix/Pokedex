import styles from "./pokemon.module.scss";

interface PokemonProps {
  pokemons: Record<any, any>;
}

export default function pokemonCard({ pokemons }: PokemonProps) {


  return (
    <div className={styles.container}>
    <div className={styles.pokemonCard}>
      <div className={styles.pokemonImgContainer}>
        <img className={styles.pokemonImg} src={pokemons.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemons.name} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3>{pokemons.name}</h3>
         
        </div>
        <div className={styles.cardBottom}>
        <div>#{pokemons.id}</div>
          <div className={styles.type}>
          
            {pokemons.types.map((type: any) => {
              return (
                <div className={styles.typeText}>{type.type.name}</div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
