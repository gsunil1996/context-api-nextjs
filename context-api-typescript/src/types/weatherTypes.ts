// weatherTypes.ts

import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "@/context/actionTypes/weatherActionTypes";

export type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
};

export type GetWeatherRequestAction = {
  type: typeof GET_WEATHER_REQUEST;
};

export type GetWeatherSuccessAction = {
  type: typeof GET_WEATHER_SUCCESS;
  payload: WeatherData;
};

export type GetWeatherFailureAction = {
  type: typeof GET_WEATHER_FAILURE;
  payload: string; // Assuming error message is a string
};

export type WeatherErrorResponse = {
  message: string; // Assuming error message is a string
};

export type WeatherState = {
  weatherData: WeatherData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

export type WeatherAction =
  | GetWeatherRequestAction
  | GetWeatherSuccessAction
  | GetWeatherFailureAction;
