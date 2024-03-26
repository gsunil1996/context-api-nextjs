import { ReactNode } from "react";
import { CounterState } from "./counterTypes";
import { WeatherState } from "./weatherTypes";
import { PetsStateType } from "./petsTypes";

// Define types for initial state
export type StateType = {
  weather: WeatherState;
  counter: CounterState;
  pets: PetsStateType;
};

export type ChildrenProps = { children: ReactNode };
