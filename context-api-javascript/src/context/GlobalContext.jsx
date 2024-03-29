// GlobalContext.js

"use client"

import React, { createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { petsReducer } from './reducers/petsReducer';
import { petsInitialState } from './initialStates/petsInitialState';
import { todoInitialState } from './initialStates/todoInitialState';
import todoReducer from './reducers/todoReducer';
import { crudInitialState } from './initialStates/crudInitialState';
import crudReducer from './reducers/crudReducer';


// Create context with initial state as default value
export const GlobalContext = createContext({
  counterState: counterInitialState,
  counterDispatch: () => null,
  todoState: todoInitialState,
  todoDispatch: () => null,
  weatherState: weatherInitialState,
  weatherDispatch: () => null,
  petsState: petsInitialState,
  petsDispatch: () => null,
  crudState: crudInitialState,
  crudDispatch: () => null
});

export const GlobalProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);
  const [weatherState, weatherDispatch] = useReducer(weatherReducer, weatherInitialState);
  const [petsState, petsDispatch] = useReducer(petsReducer, petsInitialState);
  const [crudState, crudDispatch] = useReducer(crudReducer, crudInitialState);

  return (
    <GlobalContext.Provider
      value={{
        counterState,
        counterDispatch,
        todoState,
        todoDispatch,
        weatherState,
        weatherDispatch,
        petsState,
        petsDispatch,
        crudState,
        crudDispatch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};