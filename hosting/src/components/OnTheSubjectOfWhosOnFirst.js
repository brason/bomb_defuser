import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SelectableChip from "./SelectableChip";

const step1 = {
  YES: "1:0",
  FIRST: "0:1",
  DISPLAY: "2:1",
  OKAY: "0:1",
  SAYS: "2:1",
  NOTHING: "1:0",
  "": "2:0",
  BLANK: "1:1",
  NO: "2:1",
  LED: "1:0",
  LEAD: "2:1",
  READ: "1:1",
  RED: "1:1",
  REED: "2:0",
  LEED: "2:0",
  "HOLD ON": "2:1",
  YOU: "1:1",
  "YOU ARE": "2:1",
  YOUR: "1:1",
  "YOU'RE": "1:1",
  UR: "0:0",
  THERE: "2:1",
  "THEY'RE": "2:0",
  THEIR: "1:1",
  "THEY ARE": "1:0",
  SEE: "2:1",
  C: "0:1",
  CEE: "2:1"
};

const step2 = {
  READY:
    "YES,OKAY,WHAT,MIDDLE,LEFT,PRESS,RIGHT,BLANK,READY,NO,FIRST,UHHH,NOTHING,WAIT",
  FIRST:
    "LEFT,OKAY,YES,MIDDLE,NO,RIGHT,NOTHING,UHHH,WAIT,READY,BLANK,WHAT,PRESS,FIRST",
  NO:
    "BLANK,UHHH,WAIT,FIRST,WHAT,READY,RIGHT,YES,NOTHING,LEFT,PRESS,OKAY,NO,MIDDLE",
  BLANK:
    "WAIT,RIGHT,OKAY,MIDDLE,BLANK,PRESS,READY,NOTHING,NO,WHAT,LEFT,UHHH,YES,FIRST",
  NOTHING:
    "UHHH,RIGHT,OKAY,MIDDLE,YES,BLANK,NO,PRESS,LEFT,WHAT,WAIT,FIRST,NOTHING,READY",
  YES:
    "OKAY,RIGHT,UHHH,MIDDLE,FIRST,WHAT,PRESS,READY,NOTHING,YES,LEFT,BLANK,NO,WAIT",
  WHAT:
    "UHHH,WHAT,LEFT,NOTHING,READY,BLANK,MIDDLE,NO,OKAY,FIRST,WAIT,YES,PRESS,RIGHT",
  UHHH:
    "READY,NOTHING,LEFT,WHAT,OKAY,YES,RIGHT,NO,PRESS,BLANK,UHHH,MIDDLE,WAIT,FIRST",
  LEFT:
    "RIGHT,LEFT,FIRST,NO,MIDDLE,YES,BLANK,WHAT,UHHH,WAIT,PRESS,READY,OKAY,NOTHING",
  RIGHT:
    "YES,NOTHING,READY,PRESS,NO,WAIT,WHAT,RIGHT,MIDDLE,LEFT,UHHH,BLANK,OKAY,FIRST",
  MIDDLE:
    "BLANK,READY,OKAY,WHAT,NOTHING,PRESS,NO,WAIT,LEFT,MIDDLE,RIGHT,FIRST,UHHH,YES",
  OKAY:
    "MIDDLE,NO,FIRST,YES,UHHH,NOTHING,WAIT,OKAY,LEFT,READY,BLANK,PRESS,WHAT,RIGHT",
  WAIT:
    "UHHH,NO,BLANK,OKAY,YES,LEFT,FIRST,PRESS,WHAT,WAIT,NOTHING,READY,RIGHT,MIDDLE",
  PRESS:
    "RIGHT,MIDDLE,YES,READY,PRESS,OKAY,NOTHING,UHHH,BLANK,LEFT,FIRST,WHAT,NO,WAIT",
  YOU: "SURE,YOUARE,YOUR,YOU'RE,NEXT,UHHUH,UR,HOLD,WHAT?,YOU,UHUH,LIKE,DONE,U",
  YOUARE:
    "YOUR,NEXT,LIKE,UHHUH,WHAT?,DONE,UHUH,HOLD,YOU,U,YOU'RE,SURE,UR,YOUARE",
  YOUR: "UHUH,YOUARE,UHHUH,YOUR,NEXT,UR,SURE,U,YOU'RE,YOU,WHAT?,HOLD,LIKE,DONE",
  "YOU'RE":
    "YOU,YOU'RE,UR,NEXT,UHUH,YOUARE,U,YOUR,WHAT?,UHHUH,SURE,DONE,LIKE,HOLD",
  UR: "DONE,U,UR,UHHUH,WHAT?,SURE,YOUR,HOLD,YOU'RE,LIKE,NEXT,UHUH,YOUARE,YOU",
  U: "UHHUH,SURE,NEXT,WHAT?,YOU'RE,UR,UHUH,DONE,U,YOU,LIKE,HOLD,YOUARE,YOUR",
  UHHUH:
    "UHHUH,YOUR,YOUARE,YOU,DONE,HOLD,UHUH,NEXT,SURE,LIKE,YOU'RE,UR,U,WHAT?",
  UHUH: "UR,U,YOUARE,YOU'RE,NEXT,UHUH,DONE,YOU,UHHUH,LIKE,YOUR,SURE,HOLD,WHAT?",
  "WHAT?":
    "YOU,HOLD,YOU'RE,YOUR,U,DONE,UHUH,LIKE,YOUARE,UHHUH,UR,NEXT,WHAT?,SURE",
  DONE: "SURE,UHHUH,NEXT,WHAT?,YOUR,UR,YOU'RE,HOLD,LIKE,YOU,U,YOUARE,UHUH,DONE",
  NEXT: "WHAT?,UHHUH,UHUH,YOUR,HOLD,SURE,NEXT,LIKE,DONE,YOUARE,UR,YOU'RE,U,YOU",
  HOLD: "YOUARE,U,DONE,UHUH,YOU,UR,SURE,WHAT?,YOU'RE,NEXT,HOLD,UHHUH,YOUR,LIKE",
  SURE: "YOUARE,DONE,LIKE,YOU'RE,YOU,HOLD,UHHUH,UR,SURE,U,WHAT?,NEXT,YOUR,UHUH",
  LIKE: "YOU'RE,NEXT,U,UR,HOLD,DONE,UHUH,WHAT?,UHHUH,YOU,LIKE,SURE,YOUARE,YOUR"
};

const rows = {
  "0": "TOP",
  "1": "MIDDLE",
  "2": "BOTTOM"
};

const columns = {
  "0": "LEFT",
  "1": "RIGHT"
};

function getPosition(str) {
  const [row, column] = str.split(":");
  return `${rows[row]} ${columns[column]}`;
}

export default function OnTheSubjectOfWhosOnFirst() {
  const [step1Word, setStep1Word] = useState("");
  const [step2Word, setStep2Word] = useState("");

  const reset = () => {
    setStep1Word("");
    setStep2Word("");
  };

  const handleStep1Click = word => {
    setStep1Word(word);
  };

  const handleStep2Click = word => {
    setStep2Word(word);
  };

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">On the Subject of Who's on First</Typography>
        <Button onClick={reset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        <Box mr="16px">
          <Typography>Step 1</Typography>
        </Box>
        <Typography>{getPosition(step1[step1Word])}</Typography>
      </Box>
      <Divider />
      <Box p="16px" display="flex" flexWrap="wrap">
        {Object.keys(step1)
          .sort()
          .map(word => (
            <Box mr="16px" mb="16px">
              <SelectableChip
                onClick={() => handleStep1Click(word)}
                variant="outlined"
                label={word}
                selected={step1Word === word}
                style={{ width: "84px" }}
              />
            </Box>
          ))}
      </Box>
      <Divider />
      <Box p="16px" display="flex" alignItems="center">
        <Box mr="16px">
          <Typography>Step 2</Typography>
        </Box>
        <Box display="flex">
          {step2Word &&
            step2[Object.keys(step2).find(w => w === step2Word)]
              .split(",")
              .map(word => (
                <Box mr="8px">
                  <SelectableChip variant="outlined" label={word} />
                </Box>
              ))}
        </Box>
      </Box>
      <Divider />
      <Box p="16px" display="flex" flexWrap="wrap">
        {Object.keys(step2)
          .sort()
          .map(word => (
            <Box mr="16px" mb="16px">
              <SelectableChip
                onClick={() => handleStep2Click(word)}
                variant="outlined"
                label={word}
                selected={step2Word === word}
                style={{ width: "84px" }}
              />
            </Box>
          ))}
      </Box>
    </Paper>
  );
}
