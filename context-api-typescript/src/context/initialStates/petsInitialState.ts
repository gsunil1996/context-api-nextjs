import { PetsStateType } from "@/types/petsTypes";

export const petsInitialState: PetsStateType = {
  petsData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
