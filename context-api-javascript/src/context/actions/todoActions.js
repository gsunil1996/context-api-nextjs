import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../actionTypes/todoActionTypes";

let nextTodoId = 1;

export const addTodo = (name) => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    name,
  },
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
