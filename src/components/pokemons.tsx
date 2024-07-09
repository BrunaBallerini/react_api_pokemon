import axios from "axios";
import { useEffect, useState } from "react";

interface PokemonTypes {
  name: string;
  url: string;
}

const Pokemon = (props: PokemonTypes) => {
  const { name, url } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonsSprite, setpokemonsSprite] = useState<string>('');

  const fetchSprite = async () => {
    const newUrl = url.replace('-species', '');
    const response = await axios.get(newUrl);
    setpokemonsSprite(response.data.sprites.front_default);
    setLoading(false);
  }

  function capitalizeFirstLetter(nameString: string) {
    return nameString.charAt(0).toUpperCase() + nameString.slice(1);
  }


  useEffect(() => {
    fetchSprite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <p>Nome: {capitalizeFirstLetter(name)}</p>
        {loading && <img src={pokemonsSprite}></img>}
        {!loading && <img src={pokemonsSprite}></img>}
      </div>
    </>
  )
}

export default Pokemon