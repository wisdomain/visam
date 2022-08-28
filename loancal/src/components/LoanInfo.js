import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function LoanInfo({ payments }) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">To pay</StyledTableCell>
                        <StyledTableCell align="right">
                            Interest
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Downpayment
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            Remaining debt
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {payments.map((payment, i) => (
                        <TableRow
                            key={i}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {payment.date}
                            </TableCell>
                            <TableCell align="right">{payment.toPay}</TableCell>
                            <TableCell align="right">
                                {payment.interest}
                            </TableCell>
                            <TableCell align="right">
                                {payment.downpayment}
                            </TableCell>
                            <TableCell align="right">
                                {payment.remainingDebt}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
