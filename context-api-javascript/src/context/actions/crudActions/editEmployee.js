import {
  EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
  EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
  EDIT_EMPLOYEE_TABLE_DATA_RESET,
  EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";
import axios from "axios";

export const editEmployeeTableData = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
    });

    const { tableRowId, data } = payload;

    const response = await axios.patch(
      `${baseURL}/updateEmployeeDetails/${tableRowId}`,
      data
    );

    // console.log("inside action", response.data)

    dispatch({
      type: EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
      payload: response.data || {},
    });
  } catch (error) {
    dispatch({
      type: EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
      payload: error && error.response.data.error,
    });
  }
};

export const editEmployeeTableReset = () => async (dispatch) => {
  dispatch({
    type: EDIT_EMPLOYEE_TABLE_DATA_RESET,
  });
};
