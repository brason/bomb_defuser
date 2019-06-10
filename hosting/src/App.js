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
import OnTheSubjectOfSimonSays from "./components/OnTheSubjectOfSimonSays";
import OnTheSubjectOfPasswords from "./components/OnTheSubjectOfPasswords";
import OnTheSubjectOfWhosOnFirst from "./components/OnTheSubjectOfWhosOnFirst";
import OnTheSubjectOfMemory from "./components/OnTheSubjectOfMemory";
import OnTheSubjectOfComplicatedWires from "./components/OnTheSubjectOfComplicatedWires";

export default function App() {
  return (
    <State>
      <Box height="100vh">
        <AppBar color="secondary">
          <Toolbar variant="dense">
            <Typography variant="h6">Bomb Defuser 2000</Typography>
          </Toolbar>
        </AppBar>
        <Box pt="48px" height="calc(100% - 48px)" display="flex">
          <Box overflowY="auto">
            <Information />
          </Box>
          <Box p="16px" style={{ overflowY: "auto" }}>
            <Box mb="16px">
              <OnTheSubjectOfWires />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfTheButton />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfKeypads />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfSimonSays />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfPasswords />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfWhosOnFirst />
            </Box>
            <Box mb="16px">
              <OnTheSubjectOfMemory/>
            </Box>
            <Box>
              <OnTheSubjectOfComplicatedWires/>
            </Box>
          </Box>
        </Box>
      </Box>
    </State>
  );
}
