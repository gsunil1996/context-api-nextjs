import axios, { AxiosError } from "axios";
import {
  GET_PETS_FAILURE,
  GET_PETS_REQUEST,
  GET_PETS_SUCCESS,
} from "../actionTypes/petsActionTypes";
import { Dispatch } from "react";
import { PetsActionsTypes, PetsErrorResponse } from "@/types/petsTypes";

export const getPetsData =
  (limit: number) =>
  async (dispatch: Dispatch<PetsActionsTypes>): Promise<void> => {
    try {
      dispatch({
        type: GET_PETS_REQUEST,
      });

      const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

      const headers = {
        "Content-Type": "application/json",
        "x-api-key": DOGS_API_KEY,
      };

      const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds?limit=${limit}`,
        { headers }
      );

      dispatch({
        type: GET_PETS_SUCCESS,
        payload: data || [],
      });
    } catch (error) {
      // console.log("errorssss", error?.response?.data?.message);

      const axiosError = error as AxiosError<PetsErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message || "Unknown error";

      dispatch({
        type: GET_PETS_FAILURE,
        payload: errorMessage,
      });
    }
  };
