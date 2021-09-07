import usePokemonListResource from "../../resources/usePokemonListResource";
import React from "react";
import MainMap from "./MainMap";
import StatusBar from "./StatusBar";

export default function MainMapContainer() {
  const [pokemonList, refetchPokemonList] = usePokemonListResource();

  return (
    <div>
      <StatusBar
        count={pokemonList.length}
        refetchPokemonList={refetchPokemonList}
      />
      <MainMap pokemonList={pokemonList} />
    </div>
  );
}
