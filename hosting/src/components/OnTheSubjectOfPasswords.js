import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function getPassword(comb1, comb2, comb3) {
  const f = (a, b) => a.map(d => b.map(e => [...d, ...e])).flat();
  const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

  const combinations = cartesian([...comb1], [...comb2], [...comb3]).map(s => s.join(""));

  const words = [
    "about",
    "after",
    "again",
    "below",
    "could",
    "every",
    "first",
    "found",
    "great",
    "house",
    "large",
    "learn",
    "never",
    "other",
    "place",
    "plant",
    "point",
    "right",
    "small",
    "sound",
    "spell",
    "still",
    "study",
    "their",
    "there",
    "these",
    "thing",
    "think",
    "three",
    "water",
    "where",
    "which",
    "world",
    "would",
    "write"
  ];

  const candidates = [];
  for (const word of words) {
    if (combinations.includes(word[0] + word[1] + word[2])) {
      candidates.push(word);
    }
  }
  return candidates;
}

export default function OnTheSubjectOfPasswords() {
  const { batteryCount, serialNumber, indicators, ports } = useContext(Context);

  const [lettersAtPosition, setLettersAtPosition] = useState(["", "", ""]);
  const [canditates, setCanditates] = useState([]);

  const handleLettersChange = i => e => {
    const _lettersAtPosition = [...lettersAtPosition];
    _lettersAtPosition[i] = e.target.value;
    setLettersAtPosition(_lettersAtPosition);
    setCanditates(getPassword(_lettersAtPosition[0], _lettersAtPosition[1], _lettersAtPosition[2]));
  };

  const handleReset = () => {
    setLettersAtPosition(['', '', '']);
    setCanditates([]);
  };

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of Passwords</Typography>
        <Button onClick={handleReset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        <Box mr="16px">
          <TextField
            variant="outlined"
            label="Position 1"
            onChange={handleLettersChange(0)}
          />
        </Box>
        <Box mr="1em">
          <TextField
            variant="outlined"
            label="Position 2"
            onChange={handleLettersChange(1)}
          />
        </Box>
        <Box>
          <TextField
            variant="outlined"
            label="Position 3"
            onChange={handleLettersChange(2)}
          />
        </Box>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        {canditates.map(canditate => (
          <Box mr="16px">
            <Typography>{canditate}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
