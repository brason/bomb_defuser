import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function shouldCutWire(wire, lastDigitIsEven, batteryCount, ports) {
  if (!Object.values(wire).includes(true)) {
    return null;
  }

  const sets = {
    led: ["p1", "s4", "d1", "d2", "b1", "p3", "b2", "b3"],
    red: ["s1", "c2", "s3", "p2", "s4", "d2", "b1", "b2"],
    blue: ["s2", "s3", "p1", "p2", "s4", "d2", "d3", "p3"],
    star: ["c2", "c3", "p2", "d2", "d3", "p3", "b2", "b3"]
  };

  const includedSets = Object.keys(sets)
    .filter(k => wire[k])
    .map(k => sets[k]);

  const includedLetters = includedSets.reduce((a, b) =>
    a.filter(c => b.includes(c))
  );

  const excludedLetters = Object.keys(sets)
    .filter(k => !wire[k])
    .map(k => sets[k])
    .flat();

  const [[letter]] = includedLetters.filter(
    letter => !excludedLetters.includes(letter)
  );

  switch (letter) {
    case "c":
      return true;
    case "d":
      return false;
    case "s":
      return lastDigitIsEven;
    case "p":
      return ports.includes("parallel");
    case "b":
      return batteryCount >= 2;
  }
}

export default function OnTheSubjectOfComplicatedWires() {
  const { batteryCount, lastDigitIsEven, ports } = useContext(Context);

  const [wire, setWire] = useState({
    led: false,
    red: false,
    blue: false,
    star: false
  });

  function reset() {
    setWire({
      led: false,
      red: false,
      blue: false,
      star: false
    });
  }

  const handleChange = value => (event, checked) => {
    setWire({ ...wire, [value]: checked });
  };

  const cutWire = shouldCutWire(wire, lastDigitIsEven, batteryCount, ports);

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">
          On the Subject of Complicated Wires
        </Typography>
        <Button onClick={() => reset()} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px">
        {[
          ["LED", "led"],
          ["Red coloring", "red"],
          ["Blue coloring", "blue"],
          ["Star", "star"]
        ].map(([label, value]) => (
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={wire[value]}
                onChange={handleChange(value)}
              />
            }
            label={label}
          />
        ))}
      </Box>
      <Divider />
      <Box p="16px">
        <Typography variant="h6">Cut Wire: {cutWire ? "Yes" : "No"}</Typography>
      </Box>
    </Paper>
  );
}
