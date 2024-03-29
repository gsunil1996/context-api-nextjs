import {
  AddTodoActionType,
  EditTodoActionType,
  TodoAction,
  TodoState,
} from "@/types/todo.types";
import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../actionTypes/todoActionTypes";
import { todoInitialState } from "../initialStates/todoInitialState";

const todoReducer = (
  state: TodoState = todoInitialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload as AddTodoActionType["payload"]],
      };
    case EDIT_TODO:
      const editTodoPayload = action.payload as EditTodoActionType["payload"];
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === editTodoPayload.id
            ? { ...todo, name: editTodoPayload.name }
            : todo;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
