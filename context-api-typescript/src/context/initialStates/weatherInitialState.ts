// weatherInitialState.ts

import { WeatherState } from "@/types/weatherTypes";

export const weatherInitialState: WeatherState = {
  weatherData: { name: "", main: { temp: 0 } },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
