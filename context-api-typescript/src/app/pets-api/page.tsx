"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { getPetsData } from "@/context/actions/petsActions";
import React, { useEffect, useState } from "react";

const PetsApi = () => {
  const { petsState, petsDispatch } = useGlobalContext()

  const { petsData, isLoading, isSuccess, isError, error } = petsState;

  const [num, setNum] = useState<number>(10);

  const handleFetchDogs = () => {
    getPetsData(num)(petsDispatch);
  };

  useEffect(() => {
    getPetsData(num)(petsDispatch);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>Pets Api</h1>
          <div>
            <p>Pets to fetch</p>
            <input
              type="number"
              value={num}
              onChange={(e) => setNum(parseInt(e.target.value))}
              placeholder="enter number of dogs to fetch"
            />
            <button onClick={() => handleFetchDogs()}>Fetch</button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Loading...
        </div>
      ) : isError ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h4>{error}</h4>
        </div>
      ) : petsData?.length == 0 ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1>No Data Found</h1>
        </div>
      ) : isSuccess ? (
        <>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>Number of dogs Fetched : {petsData?.length}</p>
            </div>
            <table style={{ margin: "auto" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {petsData?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image.url}
                        alt={item.name}
                        style={{ width: "100px" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PetsApi;
