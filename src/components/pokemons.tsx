import axios from "axios";
import { useEffect, useState } from "react";

interface PokemonTypes {
  name: string;
  url: string;
}

const Pokemon = (props: PokemonTypes) => {

  const { name, url } = props
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonsSprite, setpokemonsSprite] = useState<string>('');

  const fetchSprite = async () => {
    const newUrl = url.replace('-species', '');
    const response = await axios.get(newUrl);
    setpokemonsSprite(response.data.sprites.front_default);
    setLoading(false);

  }

  useEffect(() => {
    fetchSprite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(loading);

  console.log(pokemonsSprite);


  return (
    <>
      <div>{name}, {url}</div>
      {loading && <img src={pokemonsSprite}></img>}
      {!loading && <img src={pokemonsSprite}></img>}
    </>
  )
}

export default Pokemon