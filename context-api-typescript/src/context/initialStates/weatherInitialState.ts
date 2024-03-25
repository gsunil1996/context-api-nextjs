import { WeatherState } from "@/types/weatherTypes";

// weatherInitialState.js
export const weatherInitialState: WeatherState = {
  weatherData: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
