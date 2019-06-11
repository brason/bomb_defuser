import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import Chip from "@material-ui/core/Chip";

const letterToCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--.."
};

const codeToLetter = Object.fromEntries(
  Object.entries(letterToCode).map(([k, v]) => [v, k])
);

const wordToFrequency = {
  shell: 3.505,
  halls: 3.515,
  slick: 3.522,
  trick: 3.532,
  boxes: 3.535,
  leaks: 3.542,
  strobe: 3.545,
  bistro: 3.552,
  flick: 3.555,
  bombs: 3.565,
  break: 3.572,
  brick: 3.575,
  steak: 3.582,
  sting: 3.592,
  vector: 3.595,
  beats: 3.6
};

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[.\-]/, /[.\-]/, /[.\-]/, /[.\-]/]}
    />
  );
}

export default function OnTheSubjectOfMorseCode() {
  const [code, setCode] = useState("");
  const [letters, setLetters] = useState([]);

  const reset = () => {
    setCode("");
    setLetters([]);
  };

  const handleEnter = event => {
    setLetters([...letters, codeToLetter[code.replace(/_/g, "")]]);
    setCode("");
  };

  const words = Object.keys(wordToFrequency);

  const candidates = words.filter(word =>
    letters.every(letter => word.includes(letter))
  );

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">On the Subject of Morse Code</Typography>
        <Button onClick={reset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px">
        <Box mb="16px">
          <TextField
            label="Morse code"
            variant="outlined"
            value={code}
            onFocus={event => event.currentTarget.select()}
            onChange={event => {
              setCode(event.currentTarget.value);
            }}
            onKeyPress={event => {
              event.key === "Enter" && handleEnter(event);
            }}
            InputProps={{
              inputComponent: TextMaskCustom
            }}
          />
        </Box>
        <Box display="flex" alignItems="center" mb="16px">
          {letters.map(letter => (
            <Box mr="16px">
              <Chip variant="outlined" label={letter} />
            </Box>
          ))}
        </Box>
        <Box display="flex" flexWrap="wrap">
          {candidates.map(word => (
            <Box mr="16px" mb="16px">
              <Chip
                variant="outlined"
                label={`${word} (${wordToFrequency[word]})`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
