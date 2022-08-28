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
    max: 10000000,
};

export default function LoanAmountSelector({ setLoanAmount, loanAmount }) {
    const onChange = (e) => setLoanAmount(Number(e.target.value));
    return (
        <Box>
            <Typography gutterBottom>Loan amount</Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={loanAmount}
                        onChange={onChange}
                        aria-labelledby="input-slider"
                        min={LIMITS.min}
                        max={LIMITS.max}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={loanAmount}
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
