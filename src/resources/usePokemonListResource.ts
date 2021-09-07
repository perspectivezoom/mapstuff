import { LatLngExpression } from "leaflet";
import { useAsyncResource } from "use-async-resource";

function fetchPokemonList(limit: number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then((res) =>
    res.json()
  );
}

export type PokemonListEntry = {
  id: number;
  latLng: LatLngExpression;
  name: string;
  url: string;
};

export const INITIAL_LIMIT = 3;
const MIN_LAT = 37.75;
const MAX_LAT = 37.8;
const MIN_LNG = -122.5;
const MAX_LNG = -122.4;

function processEntry(result: { name: string; url: string }): PokemonListEntry {
  const latLng = {
    lat: MIN_LAT + Math.random() * (MAX_LAT - MIN_LAT),
    lng: MIN_LNG + Math.random() * (MAX_LNG - MIN_LNG)
  };
  const match = result.url.match(/pokemon\/(\d+)/);
  const id = match != null ? parseInt(match[1], 10) : 0;
  return {
    ...result,
    id,
    latLng
  };
}

export default function usePokemonListResource(): [
  PokemonListEntry[],
  (limit: number) => void
] {
  const [pokemonListReader, refetchPokemonList] = useAsyncResource(
    fetchPokemonList,
    INITIAL_LIMIT
  );
  const response = pokemonListReader();
  const entries = response["results"].map(processEntry);
  return [entries, refetchPokemonList];
}
