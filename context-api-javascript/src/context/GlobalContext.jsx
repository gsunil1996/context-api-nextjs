// GlobalContext.js

"use client"
import React, { createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { petsReducer } from './reducers/petsReducer';
import { petsInitialState } from './initialStates/petsInitialState';


// Create context with initial state as default value
export const GlobalContext = createContext({
  counterState: counterInitialState,
  counterDispatch: () => null,
  weatherState: weatherInitialState,
  weatherDispatch: () => null,
  petsState: petsInitialState,
  petsDispatch: () => null,
});

export const GlobalProvider = ({ children }) => {
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