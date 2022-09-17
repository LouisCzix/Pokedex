import styles from "./Info.module.scss";
import { useState, useEffect } from "react";
import { searchPokemon } from "../../Api";
import { Link, useParams } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import { HiOutlineChevronLeft } from "react-icons/hi";


export default function InfoPokemon() {
  const [pokemon, setPokemon] = useState<Record<any, any>>({});
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      if (id) {
        const result = await searchPokemon(id);
        setPokemon(result);
      }
    } catch (error) {
      console.log("error fetch ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  console.log(pokemon);
  function Loading(props: any) {
    if (!loading) {
      return (
        <div className={styles.container}>
          <div className={styles.container__title}>
            <Link to={"/"}>
            <div className={styles.container__previousButton}> <HiOutlineChevronLeft/> </div>
            </Link>
            {pokemon.name}</div>
          <div className={styles.container__content}>
          <div className={styles.container__abilitiesContainer}>
              <h1>Abilities:{" "}</h1>
            {pokemon.abilities.map((data: any) => {
              return (
                <div className={styles.container__abilitiesText}>
                  <WiStars/> {data.ability.name}
                </div>
              );
            })}
          </div>
          <div className={styles.container__img}>
            <img src={pokemon.sprites.other["home"].front_default} alt='' />
          </div>
          <div className={styles.container__statusContainer}>
            <h1 className={styles.container__statusText}>
              Stats:
            </h1>
            {pokemon.stats.map((stats: any) => (
                <>
                <div className={styles.container__statusText}>
                    {stats.stat.name}: {stats["base_stat"]}/100
                </div>
                </>
            ))}
            
          </div>
          </div>
          
          <div className={styles.container__typesContainer}>
            {pokemon.types.map((type: any) => {
              return (
                <div className={styles.container__types}>{type.type.name}</div>
              );
            })}
          </div>
        </div>
      );
    }
    return <h1 className={styles.container}> Loading... </h1>;
  }
  return <Loading loading={loading} />;
}
