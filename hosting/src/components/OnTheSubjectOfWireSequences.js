import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ColorSelector, { Color } from "./ColorSelector";

const occTable = {
  r: ["C", "B", "A", "AC", "B", "AC", "ABC", "AB", "B"],
  b: ["B", "AC", "B", "A", "B", "BC", "C", "AC", "A"],
  k: ["ABC", "AC", "B", "AC", "B", "BC", "AB", "C", "C"]
};

export default function OnTheSubjectOfWireSequences() {
  const [color, setColor] = useState();
  const [shouldCut, setShouldCut] = useState();

  const [occCount, setOccCount] = useState({
    r: 0,
    b: 0,
    k: 0
  });

  const reset = () => {
    setShouldCut(false);
    setOccCount({ r: 0, b: 0, k: 0 });
    setColor("");
  };

  const handleColorClick = color => {
    setColor(color);
  };

  const handleLabelClick = label => () => {
    setShouldCut(occTable[color][occCount[color]].includes(label));
    setOccCount({ ...occCount, [color]: occCount[color] + 1 });
    setColor("");
  };

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">On the Subject of Wire Sequences</Typography>
        <Button onClick={reset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex" alignItems="center">
        <Box mr="16px">
          <ColorSelector
            colors="rbk"
            selected={color}
            onChange={handleColorClick}
          />
        </Box>
        <Box display="flex">
          {["A", "B", "C"].map(l => (
            <Box mr="16px">
              <Button variant="outlined" onClick={handleLabelClick(l)}>
                {l}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box p="16px" display="flex" justifyContent="space-between">
        <Typography variant="h6">
          Cut Wire: {shouldCut ? "YES" : "NO"}
        </Typography>
        <Box display="flex" >
          {["r", "b", "k"].map(color => (
            <Box mr="16px" display="flex" alignItems="center">
              <Box mr="8px">
                <Color color={color} />
              </Box>
              <Typography>{occCount[color]}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
