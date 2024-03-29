import axios from "axios";

import {
  GET_EMPLOYEE_TABLE_DATA_FAILURE,
  GET_EMPLOYEE_TABLE_DATA_REQUEST,
  GET_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";

import { baseURL } from "@/context/actions/baseURL/baseUrl";

export const getEmployeeTableData =
  ({ search, gender, status, sort, page }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { data } = await axios.get(
        `${baseURL}/employeesTable?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`
      );

      //  console.log("inside action", data)

      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: error && error.response.data.error,
      });
    }
  };
