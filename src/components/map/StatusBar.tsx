import React from "react";
import { createUseStyles } from "react-jss";
import "leaflet/dist/leaflet.css";

const useStyles = createUseStyles({
  container: {
    alignItems: "baseline",
    display: "flex",
    columnGap: 8,
    marginBottom: 8
  }
});

type Props = {
  count: number;
  incrementPokemonList: () => void;
};

export default function MainMap({ count, incrementPokemonList }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div> Count: {count}</div>
      <button onClick={incrementPokemonList}>+1</button>
    </div>
  );
}
