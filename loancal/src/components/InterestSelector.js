import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
const Input = styled(MuiInput)`
    width: 100px;
`;

const LIMITS = {
    min: 0,
    max: 50,
};

export default function InterestSelector({ setInterest, interest }) {
    const onChange = (e) => setInterest(Number(e.target.value));
    return (
        <Box>
            <Typography gutterBottom>Interest</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={interest}
                        onChange={onChange}
                        aria-labelledby="input-slider"
                        min={LIMITS.min}
                        max={LIMITS.max}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={interest}
                        onChange={onChange}
                        inputProps={{
                            min: LIMITS.min,
                            max: LIMITS.max,
                            type: 'number',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
