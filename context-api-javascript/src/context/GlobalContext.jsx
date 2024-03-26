// GlobalContext.js

"use client"
import React, { createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { petsReducer } from './reducers/petsReducer';
import { petsInitialState } from './initialStates/petsInitialState';


// Combine the reducers
const rootReducer = ({ weather, counter, pets }, action) => ({
  weather: weatherReducer(weather, action),
  counter: counterReducer(counter, action),
  pets: petsReducer(pets, action)
});


// Combine the initial states
const initialState = {
  weather: weatherInitialState,
  counter: counterInitialState,
  pets: petsInitialState
};

// Create context with initial state as default value
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};