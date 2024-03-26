import { ReactNode } from "react";
import { CounterAction, CounterState } from "./counterTypes";
import { WeatherAction, WeatherState } from "./weatherTypes";
import { PetsActionsTypes, PetsStateType } from "./petsTypes";

// Define a union type for all possible action types
export type ActionType = WeatherAction | CounterAction | PetsActionsTypes;

// Define types for initial state
export type StateType = {
  weather: WeatherState;
  counter: CounterState;
  pets: PetsStateType;
};

export type RootReducerParams = {
  weather: WeatherState;
  counter: CounterState;
  pets: PetsStateType;
};

export type RootReducerAction =
  | WeatherAction
  | CounterAction
  | PetsActionsTypes;

export type ChildrenProps = { children: ReactNode };
