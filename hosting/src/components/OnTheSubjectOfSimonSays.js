import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Context } from "../State";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SelectableChip from "./SelectableChip";
import ColorSelector from "./ColorSelector";

function onTheSubjectOfSimonSays(hasVowel, strikeCount, colors) {
    const colorMappers =  [[
        {
            'r': 'b',
            'b': 'r',
            'g': 'y',
            'y': 'g',
        },
        {
            'r': 'y',
            'b': 'g',
            'g': 'b',
            'y': 'r',
        },
        {
            'r': 'r',
            'b': 'y',
            'g': 'g',
            'y': 'b',
        }
    ], [
        {
            'r': 'b',
            'b': 'y',
            'g': 'g',
            'y': 'r',
        },
        {
            'r': 'r',
            'b': 'b',
            'g': 'y',
            'y': 'g',
        },
        {
            'r': 'y',
            'b': 'g',
            'g': 'b',
            'y': 'r',
        }
    ]];

    const mapper = colorMappers[hasVowel ? 0 : 1][strikeCount];
    return colors.map(color => mapper[color]);
}


export default function OnTheSubjectOfSimonSays() {
    const {strikes, serialNumber } = useContext(Context);
    
    const [colors, setColors] = useState([""]);

    const handleSimonSaysSteps = (i, color) => {
        const _colors = [...colors];
        _colors[i] = color;
        _colors.push("");
        setColors(_colors);
    }

    const results = onTheSubjectOfSimonSays(!(/[aeiou]/).test(serialNumber), strikes, colors);
    
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
            <Divider/>
            <Box p="16px">
             {colors.map((color, i) => (
                <Box display="flex" alignItems="center" mb="16px">
                    <Box mr="16px">
                    <Typography>Round {i + 1}</Typography>
                    </Box>
                <ColorSelector
                colors={["b", "g", "y", "r"]}
                onChange={(color) => handleSimonSaysSteps(i, color)}
                selected={color}
                />
                </Box>
            ))}
            <Box>
                <Typography>Results: </Typography>
                {results.map(r => (
                    <Typography>{r}</Typography>
                ))}
            </Box>
            </Box>

        </Paper>
    );
}