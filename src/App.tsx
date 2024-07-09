import { useEffect, useState } from "react"
import axios from "axios";
import Pokemon from "./components/pokemons";

interface PokemonsType {
  name: string;
  url: string;
}

const App = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonsType>>([])
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/generation/1');
    setPokemons(response.data.pokemon_species);
    setLoading(false);
  }
  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>


      {loading && pokemons.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.url} />)}
      {!loading && pokemons.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.url} />)}

    </>
  )
}

export default App