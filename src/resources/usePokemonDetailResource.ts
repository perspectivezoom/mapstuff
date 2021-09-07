import { useAsyncResource } from "use-async-resource";

function fetchPokemonDetail(id: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  );
}

export type PokemonDetailEntry = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export default function usePokemonDetailResource(
  id: number
): PokemonDetailEntry {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pokemonDetailReader, _refetchPokemonDetail] = useAsyncResource(
    fetchPokemonDetail,
    id
  );
  return pokemonDetailReader();
}
