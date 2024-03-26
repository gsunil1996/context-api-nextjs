// GlobalContext.tsx

"use client"
import React, { Dispatch, createContext, useReducer } from 'react';
import weatherReducer from './reducers/weatherReducer';
import counterReducer from './reducers/counterReducer';
import { weatherInitialState } from './initialStates/weatherInitialState';
import { counterInitialState } from './initialStates/counterInitialState';
import { WeatherAction } from '@/types/weatherTypes';
import { CounterAction } from '@/types/counterTypes';
import { ActionType, ChildrenProps, StateType } from '@/types/contextTypes';
import { petsReducer } from './reducers/petsReducer';
import { PetsActionsTypes } from '@/types/petsTypes';
import { petsInitialState } from './initialStates/petsInitialState';


// Combine the reducers
const rootReducer = ({ weather, counter, pets }: StateType, action: ActionType): StateType => ({
  weather: weatherReducer(weather, action as WeatherAction),
  counter: counterReducer(counter, action as CounterAction),
  pets: petsReducer(pets, action as PetsActionsTypes)
});


// Combine the initial states
const initialState: StateType = {
  weather: weatherInitialState,
  counter: counterInitialState,
  pets: petsInitialState
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