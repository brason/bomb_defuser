import React, { useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function getButtonLabel(stage, display, buttons, history) {
  switch (stage) {
    case 1:
      return buttons[display === 1 ? 1 : display - 1];
    case 2:
      return (d => {
        if (d === 1) return 4;
        if (d === 3) return buttons[0];
        if ([2, 4].includes(d)) return buttons[history[1].position];
      })(display);
    case 3:
      return (d => {
        if (d === 1) return history[2].label;
        if (d === 2) return history[1].label;
        if (d === 3) return buttons[2];
        if (d === 4) return 4;
      })(display);
    case 4:
      return (d => {
        if (d === 1) return buttons[history[1].position];
        if (d === 2) return buttons[0];
        if ([3, 4].includes(d)) return buttons[history[2].position];
      })(display);
    case 5:
      return (d => {
        if (d === 1) return history[1].label;
        if (d === 2) return history[2].label;
        if (d === 3) return history[4].label;
        if (d === 4) return history[3].label;
      })(display);
  }
}

export default function OnTheSubjectOfMemory() {
  const [stage, setStage] = useState(1);
  const [buttonHistory, setButtonHistory] = useState({});

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  const focusIndex = useRef(0);

  const inputRefs = [input1Ref, input2Ref, input3Ref, input4Ref, input5Ref];

  const reset = () => {};

  const handleChange = () => {
    focusIndex.current = (focusIndex.current + 1) % 5;
    inputRefs[focusIndex.current].current.focus();

    const [display, ...buttons] = inputRefs.map(ref =>
      parseInt(ref.current.value)
    );

    if (focusIndex.current === 0) {
      const label = getButtonLabel(stage, display, buttons, buttonHistory);

      setStage(stage + 1);
      setButtonHistory(history => {
        history[stage] = {
          label,
          position: buttons.indexOf(label)
        };
        return history;
      });
      inputRefs.forEach(ref => (ref.current.value = null));
    }
  };

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of Memory</Typography>
        <Button onClick={reset} variant="outlined">
          Reset
        </Button>
      </Box>
      <Divider />
      <Box display="flex" p="16px">
        <Box mr="16px">
          <TextField
            inputRef={inputRefs[0]}
            variant="outlined"
            placeholder="Display"
            onChange={handleChange}
          />
        </Box>
        {[1, 2, 3, 4].map(i => (
          <Box mr="16px">
            <TextField
              inputRef={inputRefs[i]}
              variant="outlined"
              placeholder={`Button ${i}`}
              onChange={handleChange}
            />
          </Box>
        ))}
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        {Object.entries(buttonHistory).map(([stage, { label }]) => (
          <Box mr="16px">
            <Typography>
              Stage {stage}: {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
