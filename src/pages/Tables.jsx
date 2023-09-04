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
  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'password', headerName: 'password', width: 130 },
  {
    field: 'ip',
    headerName: 'ip address',
    type: 'number',
    width: 90,
  },
  {
    field: 'country',
    headerName: 'country',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

  return (
    <>
      {data.length === 0 ? <h4>No Data</h4> :
              {data.map((row) => (
                 <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={row}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
              ))}
      }
    </>
  )
}
export default Tables
