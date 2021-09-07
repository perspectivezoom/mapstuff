import usePokemonListResource from "../../resources/usePokemonListResource";
import React from "react";
import MainMap from "./MainMap";
import StatusBar from "./StatusBar";

export default function MainMapContainer() {
  const [pokemonList, incrementPokemonList] = usePokemonListResource();

  return (
    <div>
      <StatusBar
        count={pokemonList.length}
        incrementPokemonList={incrementPokemonList}
      />
      <MainMap pokemonList={pokemonList} />
    </div>
  );
}
