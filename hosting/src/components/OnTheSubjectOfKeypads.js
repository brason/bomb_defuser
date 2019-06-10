import React, { useContext, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const baseUrl = "http://www.bombmanual.com/manual/1/html/img/symbols";

const symbolNumber = {
  ae: "14",
  at: "13",
  balloon: "28",
  bt: "31",
  copyright: "1",
  cursive: "26",
  doublek: "5",
  dragon: "19",
  euro: "16",
  filledstar: "2",
  hollowstar: "3",
  hookn: "9",
  leftc: "23",
  meltedthree: "15",
  nwithhat: "18",
  omega: "6",
  paragraph: "21",
  pitchfork: "24",
  pumpkin: "8",
  questionmark: "20",
  rightc: "22",
  six: "11",
  smileyface: "4",
  squidknife: "7",
  squigglyn: "12",
  tracks: "27",
  upsidedowny: "30"
};

const symbols = [
  "copyright",
  "filledstar",
  "hollowstar",
  "smileyface",
  "doublek",
  "omega",
  "squidknife",
  "pumpkin",
  "hookn",
  "six",
  "squigglyn",
  "at",
  "ae",
  "meltedthree",
  "euro",
  "nwithhat",
  "dragon",
  "questionmark",
  "paragraph",
  "rightc",
  "leftc",
  "pitchfork",
  "cursive",
  "tracks",
  "balloon",
  "upsidedowny",
  "bt"
];

const patterns = [
  ["balloon", "at", "upsidedowny", "squigglyn", "squidknife", "hookn", "leftc"],
  [
    "euro",
    "balloon",
    "leftc",
    "cursive",
    "hollowstar",
    "hookn",
    "questionmark"
  ],
  [
    "copyright",
    "pumpkin",
    "cursive",
    "doublek",
    "meltedthree",
    "upsidedowny",
    "hollowstar"
  ],
  [
    "six",
    "paragraph",
    "bt",
    "squidknife",
    "doublek",
    "questionmark",
    "smileyface"
  ],
  [
    "pitchfork",
    "smileyface",
    "bt",
    "rightc",
    "paragraph",
    "dragon",
    "filledstar"
  ],
  ["six", "euro", "tracks", "ae", "pitchfork", "nwithhat", "omega"]
];

function getIconUrl(symbol) {
  return `${baseUrl}/${symbolNumber[symbol]}-${symbol}.png`;
}

function getAvailableSymbols(symbols, patterns, selected) {
  const availablePatterns = patterns.filter(pattern =>
    selected.every(symbol => pattern.includes(symbol))
  );
  return [...new Set(availablePatterns.flat())];
}

export default function OnTheSubjectOfKeypads() {
  const [selectedSymbols, setSelectedSymbols] = useState([]);

  const addMarked = symbol => () => {
    const _selectedSymbols = [...selectedSymbols];
    if (_selectedSymbols.includes(symbol)) {
      _selectedSymbols.splice(_selectedSymbols.indexOf(symbol), 1);
    } else {
      _selectedSymbols.push(symbol);
    }
    setSelectedSymbols(_selectedSymbols);
  };

  const reset = () => {
    setSelectedSymbols([]);
  };

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">On the Subject of Keypads</Typography>
        <Button onClick={reset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex" flexWrap="wrap">
        {getAvailableSymbols(symbols, patterns, selectedSymbols).map(symbol => {
          const exists = selectedSymbols.includes(symbol);

          return (
            <Box mr="16px">
              <img
                onClick={addMarked(symbol)}
                src={getIconUrl(symbol)}
                style={{
                  width: "50px",
                  height: "50px",
                  background: exists ? "red" : "",
                  borderRadius: "4px"
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}
