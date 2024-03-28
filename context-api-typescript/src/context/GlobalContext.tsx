// GlobalContext.tsx

"use client"
import React, { Dispatch, createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { WeatherAction, WeatherState } from '@/types/weather.types';
import { CounterAction, CounterState } from '@/types/counter.types';
import { petsReducer } from './reducers/petsReducer';
import { PetsActionsTypes, PetsStateType } from '@/types/pets.types';
import { petsInitialState } from './initialStates/petsInitialState';
import { ChildrenProps } from '@/types/common.types';


// Create context with initial state as default value
export const GlobalContext = createContext<{
  counterState: CounterState;
  counterDispatch: Dispatch<CounterAction>;
  weatherState: WeatherState;
  weatherDispatch: Dispatch<WeatherAction>;
  petsState: PetsStateType;
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