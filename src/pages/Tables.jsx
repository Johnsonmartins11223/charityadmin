import React, { useState, useEffect } from "react";
import { databases, DatabaseId, collectionId } from "../config";
import { DataGrid } from '@mui/x-data-grid'; // Import DataGrid from '@mui/x-data-grid' instead of '@mui/material'

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(DatabaseId, collectionId);
        setData(response.documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: '$id', headerName: 'ID', width: 200 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'ip', headerName: 'IP Address', type: 'number', width: 90 },
    {
      field: 'country',
      headerName: 'Country',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  const getRowId = (row) => row['$id'];


  return (
    <div style={{ width: '100%' }}>
      {data.length === 0 ? (
        <h4>No Data</h4>
      ) : (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5} // Use pageSize instead of pageSizeOptions
            getRowId={getRowId} // Use getRowId to specify the unique identifier
        />
      )}
    </div>
  );
};

export default Tables;
