import React from "react";

import Table from "./Table/Table";
import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";

import TableRow from "./Table/TableRow";
import TableCell from "./Table/TableCell";

function createData(title, priceBotox, priceFillers) {
  return { title, priceBotox, priceFillers };
}

const rows = [
  createData("1", "500", "400"),
  createData("2", "900", "420"),
  createData("3", "1300", "1337")
];

const PriceTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th">Enheter (1 mg)</TableCell>
          <TableCell component="th">Pris Botox</TableCell>
          <TableCell component="th">Pris Fillers</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            <TableCell component="th">{row.title}</TableCell>
            <TableCell>{row.priceBotox}</TableCell>
            <TableCell>{row.priceFillers}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PriceTable;
