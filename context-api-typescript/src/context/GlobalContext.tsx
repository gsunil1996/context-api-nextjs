// GlobalContext.tsx

"use client"
import React, { Dispatch, createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { WeatherAction } from '@/types/weatherTypes';
import { CounterAction } from '@/types/counterTypes';
import { ActionType, ChildrenProps, RootReducerAction, RootReducerParams, StateType } from '@/types/contextTypes';


// Combine the reducers
const rootReducer = ({ weather, counter }: RootReducerParams, action: RootReducerAction) => ({
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

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};