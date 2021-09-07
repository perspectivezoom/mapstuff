import { createUseStyles } from "react-jss";
import MainMap from "./map/MainMap";

const useStyles = createUseStyles({
  title: {
    fontFamily: "sans-serif",
    textAlign: "center"
  }
});

export default function Layout() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        <h1>Mapstuff</h1>
      </div>
      <MainMap />
    </div>
  );
}
