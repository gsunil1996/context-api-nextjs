import axios, { AxiosError } from "axios";
import {
  GET_EMPLOYEE_PROFILE_FAILURE,
  GET_EMPLOYEE_PROFILE_REQUEST,
  GET_EMPLOYEE_PROFILE_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";
import {
  ErrorResponseType,
  GetEmployeeProfileActionType,
  GetEmployeeProfileApiResponse,
  GetEmployeeProfileProps,
} from "@/types/crud.types";
import { Dispatch } from "react";

export const getEmployeeProfileData =
  ({ id }: GetEmployeeProfileProps) =>
  async (dispatch: Dispatch<GetEmployeeProfileActionType>): Promise<void> => {
    try {
      dispatch({
        type: GET_EMPLOYEE_PROFILE_REQUEST,
      });

      const { data } = await axios.get<GetEmployeeProfileApiResponse>(
        `${baseURL}/employeesTable/${id}`
      );

      //  console.log("inside action", data)

      dispatch({
        type: GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      const errorMessage = axiosError.response?.data?.error || "Unknown error";
      dispatch({
        type: GET_EMPLOYEE_PROFILE_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };
