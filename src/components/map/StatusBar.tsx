import React, { useState } from "react";
import { INITIAL_LIMIT } from "../../resources/usePokemonListResource";
import { createUseStyles } from "react-jss";
import "leaflet/dist/leaflet.css";

const useStyles = createUseStyles({
  container: {
    alignItems: "baseline",
    display: "flex",
    columnGap: 8,
    marginBottom: 8
  },
  input: {
    width: 36
  }
});

type Props = {
  count: number;
  refetchPokemonList: (limit: number) => void;
};

export default function MainMap({ count, refetchPokemonList }: Props) {
  const classes = useStyles();
  const [formLimit, setFormLimit] = useState(INITIAL_LIMIT);
  function onClick() {
    refetchPokemonList(formLimit);
  }
  return (
    <div className={classes.container}>
      <div>Current Count: {count}</div>
      <div>Refetch a total of</div>
      <input
        className={classes.input}
        onChange={(e) => setFormLimit(e.target.valueAsNumber)}
        type="number"
        value={formLimit}
      />
      <button onClick={onClick}>Go</button>
    </div>
  );
}
