// weatherReducer.ts

import {
  GetWeatherFailureAction,
  GetWeatherSuccessAction,
  WeatherAction,
  WeatherData,
  WeatherState,
} from "@/types/weatherTypes";
import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherActionTypes";
import { weatherInitialState } from "../initialStates/weatherInitialState";

const weatherReducer = (
  state: WeatherState = weatherInitialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        weatherData: { name: "", main: { temp: 0 } },
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: "",
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: (action as GetWeatherSuccessAction).payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        weatherData: { name: "", main: { temp: 0 } },
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: (action as GetWeatherFailureAction).payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
