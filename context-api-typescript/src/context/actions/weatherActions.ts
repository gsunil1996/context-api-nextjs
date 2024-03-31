// weatherActions.ts
import axios, { AxiosError } from "axios";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherActionTypes";
import {
  WeatherAction,
  WeatherData,
  WeatherErrorResponse,
} from "@/types/weather.types";
import { Dispatch } from "react";

export const getWeatherData =
  (city: string) =>
  async (dispatch: Dispatch<WeatherAction>): Promise<void> => {
    try {
      dispatch({
        type: GET_WEATHER_REQUEST,
      });

      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=045875faf6500e2b08e352de604e5d85`
      );

      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const axiosError = error as AxiosError<WeatherErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message || "Unknown error";

      dispatch({
        type: GET_WEATHER_FAILURE,
        payload: errorMessage,
      });
    }
  };
