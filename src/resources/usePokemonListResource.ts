import { LatLngExpression } from "leaflet";
import { useAsyncResource } from "use-async-resource";

function fetchPokemonList(limit: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then((res) =>
    res.json()
  );
}

export type PokemonListEntry = {
  latLng: LatLngExpression;
  name: string;
  url: string;
};

const MIN_LAT = 37.75;
const MAX_LAT = 37.8;
const MIN_LNG = -122.5;
const MAX_LNG = -122.4;

function appendLatLng(result: { name: string; url: string }): PokemonListEntry {
  const latLng = {
    lat: MIN_LAT + Math.random() * (MAX_LAT - MIN_LAT),
    lng: MIN_LNG + Math.random() * (MAX_LNG - MIN_LNG)
  };
  return {
    ...result,
    latLng
  };
}

export default function usePokemonListResource(): [
  PokemonListEntry[],
  (limit: number) => void
] {
  const [pokemonListReader, refetchPokemonList] = useAsyncResource(
    fetchPokemonList,
    4
  );
  const response = pokemonListReader();
  const entries = response["results"].map(appendLatLng);
  return [entries, refetchPokemonList];
}
