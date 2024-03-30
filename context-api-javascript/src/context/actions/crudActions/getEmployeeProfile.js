import axios from "axios";
import {
  GET_EMPLOYEE_PROFILE_FAILURE,
  GET_EMPLOYEE_PROFILE_REQUEST,
  GET_EMPLOYEE_PROFILE_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { baseURL } from "@/context/actions/baseURL/baseUrl";

export const getEmployeeProfileData =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_EMPLOYEE_PROFILE_REQUEST,
      });

      const { data } = await axios.get(`${baseURL}/employeesTable/${id}`);

      //  console.log("inside action", data)

      dispatch({
        type: GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: data || {},
      });
    } catch (error) {
      dispatch({
        type: GET_EMPLOYEE_PROFILE_FAILURE,
        payload: error && error.response.data.error,
      });
      throw new Error(error.response.data.error);
    }
  };
