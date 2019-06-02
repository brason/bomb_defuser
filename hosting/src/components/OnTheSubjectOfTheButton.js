import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SelectableChip from "./SelectableChip";
import ColorSelector from "./ColorSelector";

function getAction(color, label, batteryCount, indicators) {
  if (color === "b" && label === "ABORT") {
    return "HOLD";
  } else if (batteryCount > 1 && label === "DETONATE") {
    return "PRESS AND RELEASE";
  } else if (color === "w" && indicators.includes("car")) {
    return "HOLD";
  } else if (batteryCount > 2 && indicators.includes("frk")) {
    return "PRESS AND RELEASE";
  } else if (color === "y") {
    return "HOLD";
  } else if (color === "r" && label === "HOLD") {
    return "PRESS AND RELEASE";
  } else {
    return "HOLD";
  }
}

export default function OnTheSubjectOfTheButton() {
  const { batteryCount, serialNumber, indicators, ports } = useContext(Context);

  const [color, setColor] = useState();
  const [label, setLabel] = useState();

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of The Button</Typography>
        <Button variant="outlined">Reset</Button>
      </Box>
      <Divider />
      <Box display="flex" alignItems="center" p="16px">
        <Box mr="16px">
          <Typography>Color</Typography>
        </Box>
        <ColorSelector onChange={col => setColor(col)} selected={color} />
      </Box>
      <Divider />
      <Box display="flex" alignItems="center" p="16px">
        <Box mr="16px">
          <Typography>Text</Typography>
        </Box>
        {["HOLD", "ABORT", "DETONATE"].map(lab => (
          <Box mr="16px">
            <SelectableChip
              onClick={() => setLabel(lab)}
              variant="outlined"
              label={lab}
              selected={lab === label}
            />
          </Box>
        ))}
      </Box>
      <Divider />
      <Box p="16px">
        <Typography>
          ACTION: {getAction(color, label, batteryCount, indicators)}
        </Typography>
      </Box>
    </Paper>
  );
}
