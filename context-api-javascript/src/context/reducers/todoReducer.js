import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "../actionTypes/todoActionTypes";
import { todoInitialState } from "../initialStates/todoInitialState";

const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          // console.log("checkTodo", todo, action.payload);
          return todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
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
