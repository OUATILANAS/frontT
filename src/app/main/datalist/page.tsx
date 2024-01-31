"use client";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';
import "../globals.css";
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {



    return (
        <div>
            <h3 className='heading3'>For edit you can focus to an element </h3>
            <h3 className='heading3'>For delete you can double click on the row</h3>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow

                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell onDoubleClick={(ev) => { ev.target.parentElement.remove() }} contentEditable component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell onDoubleClick={(ev) => { ev.target.parentElement.remove() }} contentEditable align="right">{row.calories}</TableCell>
                                <TableCell onDoubleClick={(ev) => { ev.target.parentElement.remove() }} contentEditable align="right">{row.fat}</TableCell>
                                <TableCell onDoubleClick={(ev) => { ev.target.parentElement.remove() }} contentEditable align="right">{row.carbs}</TableCell>
                                <TableCell onDoubleClick={(ev) => { ev.target.parentElement.remove() }} contentEditable align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}