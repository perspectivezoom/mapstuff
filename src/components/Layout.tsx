import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    fontFamily: "sans-serif",
    textAlign: "center"
  }
});

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
