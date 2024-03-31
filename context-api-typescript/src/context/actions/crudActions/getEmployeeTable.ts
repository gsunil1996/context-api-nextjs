import axios, { AxiosError } from "axios";

import {
  GET_EMPLOYEE_TABLE_DATA_FAILURE,
  GET_EMPLOYEE_TABLE_DATA_REQUEST,
  GET_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";

import { baseURL } from "@/context/actions/baseURL/baseUrl";
import {
  ErrorResponseType,
  GetEmployeeActionType,
  GetEmployeeTableAPIResponse,
  GetEmployeeTableDataProps,
} from "@/types/crud.types";
import { Dispatch } from "react";

export const getEmployeeTableData =
  ({ search, gender, status, sort, page }: GetEmployeeTableDataProps) =>
  async (dispatch: Dispatch<GetEmployeeActionType>): Promise<void> => {
    try {
      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { data } = await axios.get<GetEmployeeTableAPIResponse>(
        `${baseURL}/employeesTable?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`
      );

      //  console.log("inside action", data)

      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponseType>;
      const errorMessage = axiosError.response?.data?.error || "Unknown error";

      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: errorMessage,
      });
      throw new Error(errorMessage);
    }
  };
