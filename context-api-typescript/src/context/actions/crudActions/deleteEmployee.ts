import axios, { AxiosError } from "axios";
import {
  DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
  DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
  DELETE_EMPLOYEE_TABLE_DATA_RESET,
  DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";
import {
  DeleteEmployeeActionType,
  DeleteEmployeeProfileApiResponse,
  DeleteEmployeeProps,
  DeleteEmployeeResetType,
  ErrorResponseType,
} from "@/types/crud.types";
import { Dispatch } from "react";

export const deleteEmployeeTableData =
  ({ tableRowId }: DeleteEmployeeProps) =>
  async (dispatch: Dispatch<DeleteEmployeeActionType>): Promise<void> => {
    try {
      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { data } = await axios.delete<DeleteEmployeeProfileApiResponse>(
        `${baseURL}/deleteEmployee/${tableRowId}`
      );

      // console.log("Inside action response", data);

      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      const errorMessage = axiosError.response?.data?.error || "Unknown error";
      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };

export const deleteEmployeeTableReset =
  () =>
  async (dispatch: Dispatch<DeleteEmployeeResetType>): Promise<void> => {
    dispatch({
      type: DELETE_EMPLOYEE_TABLE_DATA_RESET,
    });
  };
