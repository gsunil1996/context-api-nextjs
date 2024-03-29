import {
  AddTodoActionType,
  EditTodoActionType,
  EditTodoProps,
  RemoveTodoActionType,
} from "@/types/todo.types";
import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../actionTypes/todoActionTypes";

let nextTodoId = 1;

export const addTodo = (name: string): AddTodoActionType => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    name,
  },
});

export const editTodo = (payload: EditTodoProps): EditTodoActionType => ({
  type: EDIT_TODO,
  payload: payload,
});

export const removeTodo = (id: number): RemoveTodoActionType => ({
  type: REMOVE_TODO,
  payload: id,
});
