import "./App.css";
import React from "react";
import { Grid } from "@material-ui/core";
import Details from "./Components/Details/Details";
import useStyles from "./styles.js";
import Main from "./Components/Main/Main";
import {
  PushToTalkButtonContainer,
  PushToTalkButton,
  // ErrorPanel,
} from "@speechly/react-ui";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "120vh" }}
      >
        <Grid item xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main className={classes.main} xs={12} sm={3} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
