import React from "react";
import MainMapContainer from "./map/MainMapContainer";
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
        <MainMapContainer />
      </React.Suspense>
    </div>
  );
}
