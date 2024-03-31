// weatherInitialState.ts

import { WeatherState } from "@/types/weather.types";

export const weatherInitialState: WeatherState = {
  weatherData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
