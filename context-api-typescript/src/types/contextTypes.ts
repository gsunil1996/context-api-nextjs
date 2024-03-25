import { ReactNode } from "react";
import { CounterAction, CounterState } from "./counterTypes";
import { WeatherAction, WeatherState } from "./weatherTypes";

// Define a union type for all possible action types
export type ActionType = WeatherAction | CounterAction;

// Define types for initial state
export type StateType = {
  weather: WeatherState;
  counter: CounterState;
};

export type RootReducerParams = {
  weather: WeatherState;
  counter: CounterState;
};

export type RootReducerAction = WeatherAction | CounterAction;

export type ChildrenProps = { children: ReactNode };
