import usePokemonDetailResource from "../../resources/usePokemonDetailResource";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  image: {
    width: 96
  },
  title: {
    wordWrap: "anywhere"
  }
});

type Props = {
  itemID: number;
};

export default function PopupDetail({ itemID }: Props) {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pokemonDetail = usePokemonDetailResource(itemID);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{pokemonDetail.name}</h1>
      <img
        alt={pokemonDetail.name}
        className={classes.image}
        src={pokemonDetail.sprites.front_default}
      />
    </div>
  );
}
