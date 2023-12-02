import React, { useState, useEffect } from "react";
import { databases, DatabaseId, collectionId } from "../config";
import '../pages/tables.css'
import { Query } from "appwrite";


const Tables = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await databases.listDocuments(DatabaseId, collectionId, [
          Query.limit(1000),
         
      ]);
      setData(response.documents);
    } catch {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div style={{ width: '100%', padding: "20px"}}>
    <h1 style={{marginBottom: "10px"}}>All Data from Charity Voting</h1>
      {data.length === 0 ? (
        <h4>No Data</h4>
      ) : data.map((eachData) => 
      (
        <div key={eachData.$id} className="table">
          <p>Name: <span>{eachData.Name}</span></p>
          <p>password: <span>{eachData.Password}</span> </p>
          <p>country: <span> {eachData.country} </span></p>
        </div>
      )
      )
      }
      {/* <div className="buttonContainer" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
      <button>prev</button>
      <button>next</button>
      </div> */}
      </div>
  );
};

export default Tables;
