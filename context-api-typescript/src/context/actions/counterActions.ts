// counterActions.ts
import {
  DecrementActionType,
  IncrementActionType,
  ResetCounterActionType,
} from "@/types/counterTypes";
import {
  DECREMENT,
  INCREMENT,
  RESET_COUNTER,
} from "../actionTypes/counterActionTypes";

export const increment = (num: number): IncrementActionType => ({
  type: INCREMENT,
  payload: num,
});

export const decrement = (num: number): DecrementActionType => ({
  type: DECREMENT,
  payload: num,
});

export const resetCounter = (): ResetCounterActionType => ({
  type: RESET_COUNTER,
});
