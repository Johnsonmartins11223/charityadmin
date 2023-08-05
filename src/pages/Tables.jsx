import { useState, useEffect } from "react";
import { databases, DatabaseId, collectionId } from "../config";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const promise = databases.listDocuments(DatabaseId, collectionId);

    promise.then(function (response) {
      setData(response.documents)
      console.log(data)
    }, function (error) {
      // console.log(error); 
    });


  }, [])

  return (
    <>
      {data.length === 0 ? <h4>No Data</h4> :
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name/Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Ip address</TableCell>
                <TableCell align="right">country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.$id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.Password}</TableCell>
                  <TableCell align="right">{row.ip}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  )
}
export default Tables