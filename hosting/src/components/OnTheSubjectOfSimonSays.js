import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ColorSelector, { Color } from "./ColorSelector";

function getMappedColors(hasVowel, strikeCount, colors) {
  const colorMappers = [
    [
      {
        r: "b",
        b: "r",
        g: "y",
        y: "g"
      },
      {
        r: "y",
        b: "g",
        g: "b",
        y: "r"
      },
      {
        r: "b",
        b: "r",
        g: "y",
        y: "b"
      }
    ],
    [
      {
        r: "b",
        b: "y",
        g: "g",
        y: "r"
      },
      {
        r: "r",
        b: "b",
        g: "y",
        y: "g"
      },
      {
        r: "y",
        b: "g",
        g: "b",
        y: "r"
      }
    ]
  ];

  const mapper = colorMappers[hasVowel ? 0 : 1][strikeCount];
  return colors.map(color => mapper[color]);
}

export default function OnTheSubjectOfSimonSays() {
  const { strikes, hasVowel } = useContext(Context);

  const [colors, setColors] = useState([""]);

  const handleSimonSaysSteps = (i, color) => {
    const _colors = [...colors];
    _colors[i] = color;
    if (i === _colors.length - 1) {
      _colors.push("");
    }
    setColors(_colors);
  };

  const mappedColors = getMappedColors(hasVowel, strikes, colors);

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of Simon Says</Typography>
        <Button variant="outlined" onClick={() => setColors([""])}>
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        {colors.map((color, i) => (
          <Box
            display="flex"
            alignItems="center"
            mr="16px"
            flexDirection="column"
          >
            <Box mb="16px">
              <Typography>Color {i + 1}</Typography>
            </Box>
            <ColorSelector
              colors="bgyr"
              onChange={color => handleSimonSaysSteps(i, color)}
              selected={color}
              vertical
            />
          </Box>
        ))}
      </Box>
      <Divider />
      <Box display="flex" p="16px">
        <Box mr="16px" width="72px">
          <Typography variant="h6">Mapped</Typography>
        </Box>
        {mappedColors.slice(0, -1).map(r => (
          <Box mr="16px">
            <Color color={r} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
