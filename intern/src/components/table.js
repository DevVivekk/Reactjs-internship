import React, { useCallback } from "react";

function Table({ callApi, value }) {
 useCallback(()=>{
callApi();
console.log('im table')
 },[callApi])

  return (
    <div className="main" style={{marginTop:"5rem"}}>
      <div className="inputs">
        <div className="api-data">
          <table
            cellSpacing="0"
            style={{
              width: "100vw",
              backgroundColor: "whitesmoke",
              textAlign: "center",
              margin: "1px",
              boxSizing: "border-box",
              fontFamily: "sans-serif",
              fontSize: "1.1rem",
            }}
            border=""
          >
            <tbody>
              <tr
                style={{
                  fontFamily: "monospace",
                  fontSize: "1.1rem",
                  fontWeight: "bolds",
                }}
              >
                <td>Id</td>
                <td>Name</td>
                <td>Phone</td>
                <td>Username</td>
                <td>Website</td>
                <td>Email</td>
                <td>
                  <h2>Address</h2>
                  <table
                    cellPadding="12"
                    cellSpacing="0"
                    border=""
                    style={{ border: "2px solid green", width: "40rem",height:"6rem" }}
                  >
                    <tbody>
                      <tr>
                        <td colSpan="10">Street</td>
                        <td>City</td>
                        <td>zipcode</td>
                        <td>geo latitude</td>
                        <td>geo longitude</td>
                        <td>Suite</td>
                      </tr>
                    </tbody>
                  </table>
                </td>

                <td>
                  <h2>Company</h2>
                  <table
                    cellPadding="4"
                    style={{
                      marginLeft: "0rem",
                      width: "40rem",
                      border: "2px solid purple",
                      height: "6rem",
                    }}
                    cellSpacing="0"
                    border="1"
                  >
                    <tbody>
                      <tr>
                        <td>name</td>
                        <td>bs</td>
                        <td>catchPhrase</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              {value.map((item) => {
                return (
                  <tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.website}</td>
                    <td>{item.email}</td>
                    <td>
                      <table
                        cellPadding="4"
                        border=""
                        style={{ border: "2px solid green", width: "40rem" }}
                        cellSpacing="2"
                      >
                        <tbody>
                          <tr key={item.id}>
                            <td>{item.address.street}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                            <td>{item.address.geo.lat}</td>
                            <td>{item.address.geo.lng}</td>
                            <td>{item.address.suite}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>

                    <td>
                      <table
                        cellPadding="4"
                        border=""
                        style={{ width: "40rem", border: "2px solid purple" }}
                        cellSpacing="2"
                      >
                        <tbody>
                          <tr key={item.id}>
                            <td>{item.company.name}</td>
                            <td>{item.company.bs}</td>
                            <td>{item.company.catchPhrase}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
