// GlobalContext.tsx

"use client"
import React, { Dispatch, ReactNode, createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { WeatherAction, WeatherState } from '@/types/weatherTypes';
import { CounterAction, CounterState } from '@/types/counterTypes';

// Define a union type for all possible action types
type ActionType = WeatherAction | CounterAction;

// Define types for initial state
type StateType = {
  weather: WeatherState;
  counter: CounterState;
};


// Combine the reducers
const rootReducer = ({ weather, counter }: { weather: WeatherState; counter: CounterState }, action: WeatherAction | CounterAction) => ({
  weather: weatherReducer(weather, action as WeatherAction),
  counter: counterReducer(counter, action as CounterAction)
});


// Combine the initial states
const initialState: StateType = {
  weather: weatherInitialState,
  counter: counterInitialState
};

// Create context with initial state as default value
export const GlobalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};