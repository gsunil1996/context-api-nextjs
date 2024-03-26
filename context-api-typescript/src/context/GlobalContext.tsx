// GlobalContext.tsx

"use client"
import React, { Dispatch, createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { WeatherAction } from '@/types/weatherTypes';
import { CounterAction } from '@/types/counterTypes';
import { ChildrenProps, StateType } from '@/types/contextTypes';
import { petsReducer } from './reducers/petsReducer';
import { PetsActionsTypes } from '@/types/petsTypes';
import { petsInitialState } from './initialStates/petsInitialState';


// Create context with initial state as default value
export const GlobalContext = createContext<{
  counterState: StateType['counter'];
  counterDispatch: Dispatch<CounterAction>;
  weatherState: StateType['weather'];
  weatherDispatch: Dispatch<WeatherAction>;
  petsState: StateType['pets'];
  petsDispatch: Dispatch<PetsActionsTypes>;
}>({
  counterState: counterInitialState,
  counterDispatch: () => null,
  weatherState: weatherInitialState,
  weatherDispatch: () => null,
  petsState: petsInitialState,
  petsDispatch: () => null,
});

export const GlobalProvider = ({ children }: ChildrenProps): JSX.Element => {
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);
  const [weatherState, weatherDispatch] = useReducer(weatherReducer, weatherInitialState);
  const [petsState, petsDispatch] = useReducer(petsReducer, petsInitialState);

  return (
    <GlobalContext.Provider
      value={{
        counterState,
        counterDispatch,
        weatherState,
        weatherDispatch,
        petsState,
        petsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};