import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "@/context/actionTypes/todoActionTypes";

export type AddTodoActionType = {
  type: typeof ADD_TODO;
  payload: {
    id: number;
    name: string;
  };
};

export type EditTodoProps = {
  id: number;
  name: string;
};

export type EditTodoActionType = {
  type: typeof EDIT_TODO;
  payload: EditTodoProps;
};

export type RemoveTodoActionType = {
  type: typeof REMOVE_TODO;
  payload: number;
};

export type TodoState = {
  todos: { id: number; name: string }[];
};

export type TodoAction =
  | AddTodoActionType
  | EditTodoActionType
  | RemoveTodoActionType;
