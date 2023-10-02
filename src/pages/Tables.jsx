import React, { useState, useEffect } from "react";
import { databases, DatabaseId, collectionId } from "../config";

const Tables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(DatabaseId, collectionId), [
        Query.limit(100),
        Query.offset(0)
    ];
        setData(response.documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);




  return (
    <div style={{ width: '100%' }}>
      {data.length === 0 ? (
        <h4>No Data</h4>
      ) : data.map((eachData) => 
      (
        <div key={eachData.$id} className="table">
          <p>Name: {eachData.Name}</p>
          <p>password: {eachData.Password}</p>
          <p>country: {eachData.country}</p>
        </div>
      )
      )
      }
      </div>
  );
};

export default Tables;
