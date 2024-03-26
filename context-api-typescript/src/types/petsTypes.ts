import {
  GET_PETS_FAILURE,
  GET_PETS_REQUEST,
  GET_PETS_SUCCESS,
} from "@/context/actionTypes/petsActionTypes";

export type petsDataType = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};

export type GetPetsRequestType = {
  type: typeof GET_PETS_REQUEST;
};

export type GetPetsSuccessType = {
  type: typeof GET_PETS_SUCCESS;
  payload: Array<petsDataType>;
};

export type GetPetsFailureType = {
  type: typeof GET_PETS_FAILURE;
  payload: string;
};

export type PetsErrorResponse = {
  message: string;
};

export type PetsStateType = {
  petsData: Array<petsDataType> | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;
};

export type PetsActionsTypes =
  | GetPetsRequestType
  | GetPetsSuccessType
  | GetPetsFailureType;
