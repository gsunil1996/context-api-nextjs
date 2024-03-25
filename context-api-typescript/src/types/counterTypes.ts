// counterTypes.ts
import {
  DECREMENT,
  INCREMENT,
  RESET_COUNTER,
} from "@/context/actionTypes/counterActionTypes";

export type IncrementActionType = {
  type: typeof INCREMENT;
  payload: number;
};

export type DecrementActionType = {
  type: typeof DECREMENT;
  payload: number;
};

export type ResetCounterActionType = {
  type: typeof RESET_COUNTER;
};

export type CounterState = {
  count: number;
};

export type CounterAction =
  | IncrementActionType
  | DecrementActionType
  | ResetCounterActionType;
