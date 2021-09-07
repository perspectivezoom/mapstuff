import React from "react";
import MainMap from "./map/MainMap";
import { createUseStyles } from "react-jss";

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
      <React.Suspense fallback="Loading...">
        <MainMap />
      </React.Suspense>
    </div>
  );
}
