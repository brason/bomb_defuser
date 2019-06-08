import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { TextField, Checkbox } from "@material-ui/core";
import { Context } from "../State";
import SelctableChip from "./SelectableChip";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

export default function Information() {
  const {
    batteryCount,
    serialNumber,
    indicators,
    ports,
    strikes,
    onBatteryCountChange,
    onSerialNumberChange,
    onIndicatorsChange,
    onPortChange,
    onStrikesChange
  } = useContext(Context);

  return (
    <Box width="300px">
      <Box p="16px">
        <Typography>Strikes</Typography>
        <Box display="flex" mt="8px">
          {[0, 1, 2].map(i => (
            <Box mr="16px">
              <SelctableChip
                selected={i === strikes}
                label={i}
                onClick={() => onStrikesChange(i)}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box p="16px">
        <Typography>Batteries</Typography>
        <Box display="flex" mt="8px">
          {[0, 1, 2, 3, 4].map(i => (
            <Box mr="16px">
              <SelctableChip
                selected={i === batteryCount}
                label={i}
                onClick={() => onBatteryCountChange(i)}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        <TextField
          fullWidth
          variant="outlined"
          label="Serial number"
          value={serialNumber}
          onChange={e => onSerialNumberChange(e.target.value)}
        />
      </Box>
      <Divider />
      <Box p="16px" display="flex">
        {["Ind 1", "Ind 2", "Ind 3"].map((name, i) => {
          return (
            <Box mr="16px" width="120px">
              <TextField
                label={name}
                variant="outlined"
                value={indicators[i]}
                onChange={e => onIndicatorsChange(i, e.target.value)}
              />
            </Box>
          );
        })}
      </Box>
      <Box p="16px">
        <Typography>Ports</Typography>
        <Box display="flex" mt="8px" flexWrap="wrap">
          {["DVI-D", "Parallel", "PS/2", "RJ-45", "Serial", "Stereo RCA"].map(
            port => (
              <Box mr="16px" mb="16px">
                <SelctableChip
                  selected={ports.includes(port)}
                  label={port}
                  onClick={() => onPortChange(port)}
                />
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
