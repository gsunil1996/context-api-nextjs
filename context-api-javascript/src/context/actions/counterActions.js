// counterActions.js

import { DECREMENT, INCREMENT } from "../actionTypes/counterActionTypes";

export const increment = (num) => ({
  type: INCREMENT,
  payload: num,
});

export const decrement = (num) => ({
  type: DECREMENT,
  payload: num,
});
