import axios from "axios";
import {
  DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
  DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
  DELETE_EMPLOYEE_TABLE_DATA_RESET,
  DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";

export const deleteEmployeeTableData =
  ({ tableRowId }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
      });

      const { data } = await axios.delete(
        `${baseURL}/deleteEmployee/${tableRowId}`
      );

      // console.log("Inside action response", data);

      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      dispatch({
        type: DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
        payload: error && error.response.data.error,
      });
    }
  };

export const deleteEmployeeTableReset = () => async (dispatch) => {
  dispatch({
    type: DELETE_EMPLOYEE_TABLE_DATA_RESET,
  });
};
