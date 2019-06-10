import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ColorSelector from "./ColorSelector";

function getLetterCount(str, letter) {
  const match = str.match(new RegExp(`${letter}`, "g"));
  return match ? match.length : 0;
}

function getWireToCut(wires, lastDigitIsEven) {
  const wireCounts = {
    b: getLetterCount(wires, "b"),
    w: getLetterCount(wires, "w"),
    r: getLetterCount(wires, "r"),
    y: getLetterCount(wires, "y")
  };

  const lastWire = wires[wires.length - 1];

  switch (wires.length) {
    case 3:
      if (!wires.includes("r")) {
        return 2;
      } else if (lastWire === "w") {
        return 3;
      } else if (wireCounts["b"] > 1) {
        return wires.lastIndexOf("b") + 1;
      } else {
        return 3;
      }
    case 4:
      if (wireCounts["r"] > 1 && !lastDigitIsEven) {
        return wires.lastIndexOf("r") + 1;
      } else if (lastWire === "y" && !wires.includes("r")) {
        return 1;
      } else if (wireCounts["b"] === 1) {
        return 1;
      } else if (wireCounts["y"] > 1) {
        return 4;
      } else {
        return 2;
      }
    case 5:
      if (lastWire === "k" && !lastDigitIsEven) {
        return 4;
      } else if (wireCounts["r"] === 1 && wireCounts["y"] > 1) {
        return 1;
      } else if (!wires.includes("k")) {
        return 2;
      } else {
        return 1;
      }
    case 6:
      if (!wires.includes("y") && !lastDigitIsEven) {
        return 3;
      } else if (wireCounts["y"] === 1 && wireCounts["w"] > 1) {
        return 4;
      } else if (!wires.includes("r")) {
        return 6;
      } else {
        return 4;
      }
    default:
      return -1;
  }
}

export default function OnTheSubjectOfWires() {
  const { lastDigitIsEvent } = useContext(Context);
  const [wires, setWires] = useState(["", "", ""]);
  const [wireToCut, setWireToCut] = useState(-1);

  const handleWireChange = (i, color) => {
    const _wires = [...wires];
    _wires[i] = color;
    if (i === _wires.length - 1 && i < 5) {
      _wires.push("");
    }
    setWires(_wires);
  };

  useEffect(() => {
    setWireToCut(getWireToCut(wires.join(""), lastDigitIsEvent));
  }, [wires]);

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of Wires</Typography>
        <Button variant="outlined" onClick={() => setWires(["", "", ""])}>
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        {wires.map((wireColor, i) => (
          <Box display="flex" mr="16px" flexDirection="column">
            <Box mb="16px">
              <Typography>Wire {i + 1}</Typography>
            </Box>
            <ColorSelector
              colors="bwkyr"
              onChange={color => handleWireChange(i, color)}
              selected={wireColor}
              vertical
            />
          </Box>
        ))}
      </Box>
      <Divider />
      <Box p="16px">
        <Typography>Wire to cut: {wireToCut}</Typography>
      </Box>
    </Paper>
  );
}
