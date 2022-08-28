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
    max: 30,
};

export default function LoanLengthSelector({ setLoanLength, loanLength }) {
    const onChange = (e) => setLoanLength(Number(e.target.value));
    return (
        <Box>
            <Typography gutterBottom>Loan term (years)</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={loanLength}
                        onChange={onChange}
                        aria-labelledby="input-slider"
                        min={LIMITS.min}
                        max={LIMITS.max}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={loanLength}
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
