import {
  EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
  EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
  EDIT_EMPLOYEE_TABLE_DATA_RESET,
  EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";
import {
  EditEmployeeActionType,
  EditEmployeeProfileApiResponse,
  EditEmployeeResetType,
  EditEmployeeTableProps,
  ErrorResponseType,
} from "@/types/crud.types";
import axios, { AxiosError } from "axios";
import { Dispatch } from "react";

export const editEmployeeTableData =
  (payload: EditEmployeeTableProps) =>
  async (dispatch: Dispatch<EditEmployeeActionType>): Promise<void> => {
    try {
      dispatch({
        type: EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { tableRowId, data } = payload;

      const response = await axios.patch<EditEmployeeProfileApiResponse>(
        `${baseURL}/updateEmployeeDetails/${tableRowId}`,
        data
      );

      // console.log("inside action", response.data)

      dispatch({
        type: EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      const errorMessage = axiosError.response?.data?.error || "Unknown error";
      dispatch({
        type: EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };

export const editEmployeeTableReset =
  () => async (dispatch: Dispatch<EditEmployeeResetType>) => {
    dispatch({
      type: EDIT_EMPLOYEE_TABLE_DATA_RESET,
    });
  };
