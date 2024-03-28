// counterReducer.js

import {
  CounterAction,
  CounterState,
  DecrementActionType,
  IncrementActionType,
} from "@/types/counter.types";
import {
  DECREMENT,
  INCREMENT,
  RESET_COUNTER,
} from "../actionTypes/counterActionTypes";
import { counterInitialState } from "../initialStates/counterInitialState";

const counterReducer = (
  state: CounterState = counterInitialState,
  action: CounterAction
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + (action as IncrementActionType).payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - (action as DecrementActionType).payload,
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
