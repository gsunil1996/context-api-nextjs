import {
  GetPetsFailureType,
  GetPetsSuccessType,
  PetsActionsTypes,
  PetsStateType,
} from "@/types/pets.types";
import {
  GET_PETS_FAILURE,
  GET_PETS_REQUEST,
  GET_PETS_SUCCESS,
} from "../actionTypes/petsActionTypes";
import { petsInitialState } from "../initialStates/petsInitialState";

export const petsReducer = (
  state: PetsStateType = petsInitialState,
  action: PetsActionsTypes
): PetsStateType => {
  switch (action.type) {
    case GET_PETS_REQUEST:
      return {
        ...state,
        petsData: [],
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: "",
      };
    case GET_PETS_SUCCESS:
      return {
        ...state,
        petsData: (action as GetPetsSuccessType).payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      };
    case GET_PETS_FAILURE:
      return {
        ...state,
        petsData: [],
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: (action as GetPetsFailureType).payload,
      };
    default:
      return state;
  }
};
