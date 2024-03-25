// counterTypes.ts
import { DECREMENT, INCREMENT } from "@/context/actionTypes/counterActionTypes";

export type IncrementAction = {
  type: typeof INCREMENT;
  payload: number;
};

export type DecrementAction = {
  type: typeof DECREMENT;
  payload: number;
};

export type CounterState = {
  count: number;
};

export type CounterAction = IncrementAction | DecrementAction;
