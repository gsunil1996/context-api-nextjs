"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { getWeatherData } from "@/context/actions/weatherActions";
import { Box, Button, LinearProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const WeatherApi = () => {
  const { weatherState, weatherDispatch } = useGlobalContext()
  const {
    weatherData, isLoading, isSuccess, isError, error
  } = weatherState;

  // console.log("checking", weatherData);

  const [city, setCity] = useState("");

  const handleClick = () => {
    getWeatherData(city)(weatherDispatch)
    setCity("");
  }

  useEffect(() => {
    getWeatherData("kurnool")(weatherDispatch);
  }, []);


  return (
    <>
      {isLoading ? (
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <LinearProgress style={{ width: "100%", marginTop: "20px" }} />
        </Box>
      ) : isError ? (
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1>{error}</h1>
        </Box>
      ) : isSuccess ? (
        <div style={{ display: "flex", justifyContent: "center" }} >
          <div>
            <h1 style={{ marginBottom: "10px" }} >Weather Api</h1>

            <TextField id="outlined-basic" label="Enter City Name" variant="outlined" onChange={(e) => setCity(e.target.value)} value={city} />
            <br />
            <br />
            <Button variant="contained" onClick={handleClick} >Submit</Button>
            <br />
            <h1>City: {weatherData?.name}</h1>
            <h2>Temperature: {weatherData?.main?.temp}°C</h2>
          </div>
        </div>
      ) : ""
      }
    </>
  );
};

export default WeatherApi;
