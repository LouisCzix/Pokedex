import PageSelect from "../../components/PageSelect";
import PokemonCard from "../../components/Pokemon";
import styles from "./pokedex.module.scss"

interface PokeProps {
  pokemons: any[];
  loading: true | false;
  page: any;
  setPage: any;
  totalPages:any
}

export default function Pokedex({pokemons, loading, page, setPage, totalPages}: PokeProps) {
 

  return (
   <>
   <div>
    <PageSelect page={page} setPage={setPage} totalPages={totalPages} />
   </div>
   <div className={styles.Card}>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemons={pokemon}/>
        ))}
    
    </div>

    </>
  );
}
