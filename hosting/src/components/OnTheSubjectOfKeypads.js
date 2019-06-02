import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SelectableChip from "./SelectableChip";
import ColorSelector from "./ColorSelector";

const urls = [
  "http://www.bombmanual.com/manual/1/html/img/symbols/1-copyright.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/2-filledstar.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/3-hollowstar.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/4-smileyface.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/5-doublek.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/6-omega.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/7-squidknife.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/8-pumpkin.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/9-hookn.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/11-six.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/12-squigglyn.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/13-at.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/14-ae.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/15-meltedthree.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/16-euro.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/18-nwithhat.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/19-dragon.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/20-questionmark.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/21-paragraph.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/22-rightc.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/23-leftc.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/24-pitchfork.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/26-cursive.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/27-tracks.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/28-balloon.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/30-upsidedowny.png",
  "http://www.bombmanual.com/manual/1/html/img/symbols/31-bt.png"
];

export default function OnTheSubjectOfKeypads() {
  const { batteryCount, serialNumber, indicators, ports } = useContext(Context);

  return (
    <Paper>
      <Box
        p="16px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">On the Subject of Keypads</Typography>
        <Button variant="outlined">Reset</Button>
      </Box>
      <Divider />
      <Box p="16px">
        {urls.map(url => (
          <img src={url} style={{width: '50px', height: '50px'}} />
        ))}
      </Box>
    </Paper>
  );
}
