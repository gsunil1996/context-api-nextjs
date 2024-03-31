// weatherReducer.js

import {
  GET_WEATHER_FAILURE,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
} from "../actionTypes/weatherActionTypes";
import { weatherInitialState } from "../initialStates/weatherInitialState";

const weatherReducer = (state = weatherInitialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        weatherData: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: "",
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      };
    case GET_WEATHER_FAILURE:
      return {
        ...state,
        weatherData: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
