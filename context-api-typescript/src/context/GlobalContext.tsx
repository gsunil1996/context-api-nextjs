// GlobalContext.tsx

"use client"
import React, { Dispatch, createContext, useContext, useReducer } from 'react';
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
import { todoInitialState } from './initialStates/todoInitialState';
import { TodoAction, TodoState } from '@/types/todo.types';
import todoReducer from './reducers/todoReducer';

type GlobalContextType = {
  counterState: CounterState;
  counterDispatch: Dispatch<CounterAction>;
  todoState: TodoState;
  todoDispatch: Dispatch<TodoAction>,
  weatherState: WeatherState;
  weatherDispatch: Dispatch<WeatherAction>;
  petsState: PetsStateType;
  petsDispatch: Dispatch<PetsActionsTypes>;
}

// Create context with initial state as default value

const defaultContextValues: GlobalContextType = {
  counterState: counterInitialState,
  counterDispatch: () => null,
  todoState: todoInitialState,
  todoDispatch: () => null,
  weatherState: weatherInitialState,
  weatherDispatch: () => null,
  petsState: petsInitialState,
  petsDispatch: () => null,
};

export const GlobalContext = createContext<GlobalContextType>(defaultContextValues);


export const GlobalProvider = ({ children }: ChildrenProps): JSX.Element => {
  const [counterState, counterDispatch] = useReducer(counterReducer, counterInitialState);
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState);
  const [weatherState, weatherDispatch] = useReducer(weatherReducer, weatherInitialState);
  const [petsState, petsDispatch] = useReducer(petsReducer, petsInitialState);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


// create a custom hook
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalContext must be used within the GlobalProvider');
  return context;
}