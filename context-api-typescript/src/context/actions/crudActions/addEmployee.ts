import axios, { AxiosError } from "axios";
import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";
import {
  AddEmployeeActionType,
  AddEmployeeErrorResponseType,
  AddEmployeeResetAction,
  InputDataType,
} from "@/types/crud.types";
import { Dispatch } from "react";

export const addEmployeeTableData =
  (payload: InputDataType) =>
  async (dispatch: Dispatch<AddEmployeeActionType>): Promise<void> => {
    try {
      dispatch({
        type: ADD_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { data } = await axios.post(`${baseURL}/addEmployee`, payload);

      // console.log("inside action", data)

      dispatch({
        type: ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      const axiosError = error as AxiosError<AddEmployeeErrorResponseType>;
      const errorMessage = axiosError.response?.data?.error || "Unknown error";

      dispatch({
        type: ADD_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };

export const addEmployeeTableReset =
  () =>
  async (dispatch: Dispatch<AddEmployeeResetAction>): Promise<void> => {
    dispatch({
      type: ADD_EMPLOYEE_TABLE_DATA_RESET,
    });
  };
