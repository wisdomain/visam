import React, { useState, useEffect, useMemo } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../assets/vismaLogo.png";
import LoanAmountSelector from "./LoanAmountSelector";
import InterestSelector from "./InterestSelector";
import LoanInfo from "./LoanInfo";
import Divider from "@mui/material/Divider";
import LoanLengthSelector from "./LoanLengthSelector";
import { LoanTypeSelector, loanTypes } from "./LoanTypeSelector";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const generatePayments = (startDate, loanLength, loanAmount, interest) => {
  if (!interest || Number.isNaN(interest)) {
    return [];
  }
  const totalMonths = loanLength * 12;
  const downPaymentPerMonth = loanAmount / totalMonths;
  const payments = [];
  let date = new Date(startDate);
  const monthlyInterestRate = interest / 1200;
  for (let i = 1; i <= totalMonths; i++) {
    const interestAmount = loanAmount * monthlyInterestRate;
    payments.push({
      date: date.toLocaleDateString(),
      toPay: (interestAmount + downPaymentPerMonth).toFixed(2),
      interest: interestAmount.toFixed(2),
      downpayment: downPaymentPerMonth.toFixed(2),
      remainingDebt: loanAmount.toFixed(2),
    });
    loanAmount -= downPaymentPerMonth;
    date.setMonth(date.getMonth() + 1);
  }
  return payments;
};

export default function LoanCal() {
  const [loanType, setLoanType] = useState(Object.keys(loanTypes)[0]);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanLength, setLoanLength] = useState(25);
  const [interest, setInterest] = useState(3.5);

  const payments = useMemo(
    () => generatePayments(startDate, loanLength, loanAmount, interest),
    [startDate, loanLength, loanAmount, interest]
  );
  useEffect(() => {
    setInterest(loanTypes[loanType].interest);
  }, [loanType]);
  console.log(payments);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{ width: 800 }}>
        <Grid container direction="column" spacing={3}>
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
            Loan start date: &nbsp;
            <input
              type="date"
              name="loan-start"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </Grid>
          <Grid>
            <LoanTypeSelector setLoanType={setLoanType} loanType={loanType} />
          </Grid>
          <Grid>
            <LoanAmountSelector
              setLoanAmount={setLoanAmount}
              loanAmount={loanAmount}
            />
          </Grid>
          <Grid>
            <LoanLengthSelector
              setLoanLength={setLoanLength}
              loanLength={loanLength}
            />
          </Grid>
          <Grid>
            <InterestSelector setInterest={setInterest} interest={interest} />
          </Grid>
        </Grid>
        <br />
        <Divider />
        <Grid>
          <Item sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <Typography variant="h5">Repayment plan</Typography>
            <LoanInfo payments={payments} />
          </Item>
        </Grid>
      </Box>
    </Grid>
  );
}
