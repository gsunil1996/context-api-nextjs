// counterReducer.js

import { CounterAction, CounterState } from "@/types/counterTypes";
import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes";
import { counterInitialState } from "../initialStates/counterInitialState";

const counterReducer = (
  state: CounterState = counterInitialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
