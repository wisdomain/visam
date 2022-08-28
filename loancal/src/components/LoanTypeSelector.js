import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { React } from 'react';

const loanTypes = {
    housingLoan: {
        name: 'Housing loan',
        interest: 3.5,
    },
    carLoan: {
        name: 'Car loan',
        interest: 5.5,
    },
};

const LoanTypeSelector = ({ setLoanType, loanType }) => {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel>Loan Type</InputLabel>
                <Select
                    value={loanType}
                    label="Loan Type"
                    onChange={(event) => {
                        setLoanType(event.target.value);
                    }}
                >
                    {Object.entries(loanTypes).map(([id, v]) => (
                        <MenuItem key={id} value={id}>
                            {v.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
export { loanTypes, LoanTypeSelector };
