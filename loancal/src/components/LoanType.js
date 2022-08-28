import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { React } from "react";

export default function LoanType() {
  const [loanType, setloanType] = useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setloanType(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loan Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loanType}
          label="Loan Type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Serial loan</MenuItem>
          <MenuItem disabled value={2}>
            Type 2
          </MenuItem>
          <MenuItem disabled value={3}>
            Type 3
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
