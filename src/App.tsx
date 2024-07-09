import { useEffect, useState } from "react"
import Card from "./components/card";
import axios from "axios";
import Pokemon from "./components/pokemons";

interface PokemonsType {
  name: string;
  url: string;
}

const App = () => {
  const [x, setX] = useState<number>(0);
  const nomes = ['Felipe', 'Bruna', 'Matheus'];

  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<Array<PokemonsType>>([])

  const fetchPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/generation/1');
    setPokemons(response.data.pokemon_species);
    setLoading(false);

  }

  useEffect(() => {
    console.log(x);
  }, [x]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(pokemons)

  return (
    <>
      <span>O valor é: {x} </span>
      <button onClick={() => {
        setX(x + 1);
      }}
      >Incremento</button >
      {nomes.map((nome) => <Card nome={nome} />)}

      {loading && <span>Carregando</span>}
      {!loading && <span>Carregado</span>}

      {pokemons.map((pokemon) => <Pokemon name={pokemon.name} url={pokemon.url} />)}

    </>
  )
}

export default App