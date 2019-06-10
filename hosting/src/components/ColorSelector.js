import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import Box from "@material-ui/core/Box";
import Check from "mdi-material-ui/Check";
import React from "react";
import { green } from "@material-ui/core/colors";

function getColor(color) {
  const mapper = {
    k: "black",
    w: "white",
    b: blue[500],
    r: red[500],
    y: yellow[500],
    g: green[500]
  };
  return mapper[color];
}

export function Color({ color, selected, onClick }) {
  return (
    <Box
      width="48px"
      height="30px"
      bgcolor={getColor(color)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="100px"
      border="1px solid rgba(0, 0, 0, 0.23)"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {selected && <Check htmlColor={color === "k" ? "white" : "black"} />}
    </Box>
  );
}

export default function ColorSelector({
  colors,
  selected,
  onChange,
  vertical
}) {
  return (
    <Box display="flex" {...vertical && { flexDirection: "column" }}>
      {colors.split("").map(color => (
        <Box
          {...vertical && { mb: "16px" }}
          {...!vertical && { mr: "16px" }}
          color={color}
        >
          <Color
            onClick={() => onChange(color)}
            selected={color === selected}
            color={color}
          />
        </Box>
      ))}
    </Box>
  );
}
