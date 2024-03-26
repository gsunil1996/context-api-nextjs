import { PetsStateType } from "@/types/petsTypes";

export const petsInitialState: PetsStateType = {
  petsData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
