import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Information from "./components/Information";
import State from "./State";
import OnTheSubjectOfWires from "./components/OnTheSubjectOfWires";
import OnTheSubjectOfTheButton from "./components/OnTheSubjectOfTheButton";
import OnTheSubjectOfKeypads from "./components/OnTheSubjectOfKeypads";

export default function App() {
  return (
    <State>
      <Box height="100vh">
        <AppBar color="secondary">
          <Toolbar variant="dense">
            <Typography variant="h6">Bomb Defuser 2000</Typography>
          </Toolbar>
        </AppBar>
        <Box pt="48px">
          <Box p="16px">
            <Box mb="16px">
              <Information />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfWires />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfTheButton />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfKeypads />
            </Box>
          </Box>
        </Box>
      </Box>
    </State>
  );
}
