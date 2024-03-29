import axios from "axios";
import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";

export const addEmployeeTableData = (payload) => async (dispatch) => {
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
    dispatch({
      type: ADD_EMPLOYEE_TABLE_DATA_FAILURE,
      payload: error && error.response.data.error,
    });
  }
};

export const addEmployeeTableReset = () => async (dispatch) => {
  dispatch({
    type: ADD_EMPLOYEE_TABLE_DATA_RESET,
  });
};
