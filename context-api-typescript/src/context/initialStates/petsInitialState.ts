import { PetsStateType } from "@/types/pets.types";

export const petsInitialState: PetsStateType = {
  petsData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};
