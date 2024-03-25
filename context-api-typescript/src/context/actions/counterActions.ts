// counterActions.ts
import { DecrementAction, IncrementAction } from "@/types/counterTypes";
import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes";

export const increment = (num: number): IncrementAction => ({
  type: INCREMENT,
  payload: num,
});

export const decrement = (num: number): DecrementAction => ({
  type: DECREMENT,
  payload: num,
});
