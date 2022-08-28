import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Input = styled(MuiInput)`
  width: 100px;
`;

export default function SliderField() {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100000000) {
      setValue(100000000);
    }
  };

  return (
    <Box sx={{ width: 600 }}>
      <Typography id="input-slider" gutterBottom>
        Loan amount
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{/* <RemoveCircleOutlineIcon /> */}</Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={100000000}
          />
        </Grid>
        <Grid item>{/* <RemoveCircleOutlineIcon /> */}</Grid>
        <Grid item>
          <Input
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              min: 0,
              max: 100000000,
              type: "number",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
