import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../assets/vismaLogo.png";
import SliderField from "./SliderField";
import LoanType from "./LoanType";
import LoanInfo from "./LoanInfo";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LoanCal() {
  const [loanAmount, setloanAmount] = useState();
  const [paybackTime, setpaybackTime] = useState();
  const [interest, setInterest] = useState(3);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="column">
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Item>
              <img src={logo} height={50} alt="Visma logo" />
            </Item>
          </Grid>
          <Grid>
            <Item>
              <h1>Loan calculator</h1>
              <h3>Use the calculator to see what a loan will cost.</h3>
            </Item>
          </Grid>
          <Grid>
            <LoanType />
          </Grid>
          <Grid>
            <LoanType />
          </Grid>
          <Grid>
            <SliderField />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" justifyContent="flex-start">
          <Item>
            <h1>Results</h1>
          </Item>
          <Item>
            <LoanInfo />
          </Item>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
