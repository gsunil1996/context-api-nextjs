// weatherInitialState.ts

import { WeatherState } from "@/types/weather.types";

export const weatherInitialState: WeatherState = {
  weatherData: { name: "", main: { temp: 0 } },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
