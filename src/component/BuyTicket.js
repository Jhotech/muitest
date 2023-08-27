import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {Slider, Stack} from "@mui/material";
import {VolumeDown, VolumeUp} from "@mui/icons-material";

export default function BuyTicket() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />

            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider aria-label="Volume" />
                <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />

            <Button variant="contained">Contained</Button>
        </Box>
    );
}