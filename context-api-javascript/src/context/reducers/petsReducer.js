import {
  GET_PETS_FAILURE,
  GET_PETS_REQUEST,
  GET_PETS_SUCCESS,
} from "../actionTypes/petsActionTypes";
import { petsInitialState } from "../initialStates/petsInitialState";

export const petsReducer = (state = petsInitialState, action) => {
  switch (action.type) {
    case GET_PETS_REQUEST:
      return {
        ...state,
        petsData: null,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: "",
      };
    case GET_PETS_SUCCESS:
      return {
        ...state,
        petsData: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      };
    case GET_PETS_FAILURE:
      return {
        ...state,
        petsData: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
