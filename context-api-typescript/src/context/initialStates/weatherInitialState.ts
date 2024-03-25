import { WeatherState } from "@/types/weatherTypes";

// weatherInitialState.js
export const weatherInitialState: WeatherState = {
  weatherData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
