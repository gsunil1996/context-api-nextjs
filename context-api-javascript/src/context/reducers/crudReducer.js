import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
  DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
  DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
  DELETE_EMPLOYEE_TABLE_DATA_RESET,
  DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
  EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
  EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
  EDIT_EMPLOYEE_TABLE_DATA_RESET,
  EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
  GET_EMPLOYEE_PROFILE_FAILURE,
  GET_EMPLOYEE_PROFILE_REQUEST,
  GET_EMPLOYEE_PROFILE_SUCCESS,
  GET_EMPLOYEE_TABLE_DATA_FAILURE,
  GET_EMPLOYEE_TABLE_DATA_REQUEST,
  GET_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "../actionTypes/crudActionTypes";
import { crudInitialState } from "../initialStates/crudInitialState";

const crudReducer = (state = crudInitialState, action) => {
  switch (action.type) {
    // get employee table
    case GET_EMPLOYEE_TABLE_DATA_REQUEST:
      return {
        ...state,
        data: {},
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: "",
      };
    case GET_EMPLOYEE_TABLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: "",
      };
    case GET_EMPLOYEE_TABLE_DATA_FAILURE:
      return {
        ...state,
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload,
      };

    // get employee profile
    case GET_EMPLOYEE_PROFILE_REQUEST:
      return {
        ...state,
        employeeProfileData: {},
        employeeProfileIsLoading: true,
        employeeProfileIsSuccess: false,
        employeeProfileIsError: false,
        employeeProfileError: "",
      };
    case GET_EMPLOYEE_PROFILE_SUCCESS:
      return {
        ...state,
        employeeProfileData: action.payload,
        employeeProfileIsLoading: false,
        employeeProfileIsSuccess: true,
        employeeProfileIsError: false,
        employeeProfileError: "",
      };
    case GET_EMPLOYEE_PROFILE_FAILURE:
      return {
        ...state,
        employeeProfileData: {},
        employeeProfileIsLoading: false,
        employeeProfileIsSuccess: false,
        employeeProfileIsError: true,
        employeeProfileError: action.payload,
      };

    // add new employee to the table
    case ADD_EMPLOYEE_TABLE_DATA_REQUEST:
      return {
        ...state,
        employeeAddedData: {},
        employeeAddDataLoading: true,
        employeeAddedDataIsSuccess: false,
        employeeAddedDataIsError: false,
        employeeAddedDataError: "",
      };
    case ADD_EMPLOYEE_TABLE_DATA_SUCCESS:
      return {
        ...state,
        employeeAddedData: action.payload,
        employeeAddDataLoading: false,
        employeeAddedDataIsSuccess: true,
        employeeAddedDataIsError: false,
        employeeAddedDataError: "",
      };
    case ADD_EMPLOYEE_TABLE_DATA_FAILURE:
      return {
        ...state,
        employeeAddedData: {},
        employeeAddDataLoading: false,
        employeeAddedDataIsSuccess: false,
        employeeAddedDataIsError: true,
        employeeAddedDataError: action.payload,
      };
    case ADD_EMPLOYEE_TABLE_DATA_RESET:
      return {
        ...state,
        employeeAddedData: {},
        employeeAddDataLoading: false,
        employeeAddedDataIsSuccess: false,
        employeeAddedDataIsError: false,
        employeeAddedDataError: "",
      };

    // edit new employee to the table
    case EDIT_EMPLOYEE_TABLE_DATA_REQUEST:
      return {
        ...state,
        employeeEditedData: {},
        employeeEditDataLoading: true,
        employeeEditDataIsSuccess: false,
        employeeEditDataIsError: false,
        employeeEditDataError: "",
      };
    case EDIT_EMPLOYEE_TABLE_DATA_SUCCESS:
      return {
        ...state,
        employeeEditedData: action.payload,
        employeeEditDataLoading: false,
        employeeEditDataIsSuccess: true,
        employeeEditDataIsError: false,
        employeeEditDataError: "",
      };
    case EDIT_EMPLOYEE_TABLE_DATA_FAILURE:
      return {
        ...state,
        employeeEditedData: {},
        employeeEditDataLoading: false,
        employeeEditDataIsSuccess: false,
        employeeEditDataIsError: true,
        employeeEditDataError: action.payload,
      };
    case EDIT_EMPLOYEE_TABLE_DATA_RESET:
      return {
        ...state,
        employeeEditedData: {},
        employeeEditDataLoading: false,
        employeeEditDataIsSuccess: false,
        employeeEditDataIsError: false,
        employeeEditDataError: "",
      };

    // delete new employee to the table
    case DELETE_EMPLOYEE_TABLE_DATA_REQUEST:
      return {
        ...state,
        employeeDeletedData: {},
        employeeDeleteDataLoading: true,
        employeeDeleteDataIsSuccess: false,
        employeeDeleteDataIsError: false,
        employeeDeleteDataError: "",
      };
    case DELETE_EMPLOYEE_TABLE_DATA_SUCCESS:
      return {
        ...state,
        employeeDeletedData: action.payload,
        employeeDeleteDataLoading: false,
        employeeDeleteDataIsSuccess: true,
        employeeDeleteDataIsError: false,
        employeeDeleteDataError: "",
      };
    case DELETE_EMPLOYEE_TABLE_DATA_FAILURE:
      return {
        ...state,
        employeeDeletedData: {},
        employeeDeleteDataLoading: false,
        employeeDeleteDataIsSuccess: false,
        employeeDeleteDataIsError: true,
        employeeDeleteDataError: action.payload,
      };
    case DELETE_EMPLOYEE_TABLE_DATA_RESET:
      return {
        ...state,
        employeeDeletedData: {},
        employeeDeleteDataLoading: false,
        employeeDeleteDataIsSuccess: false,
        employeeDeleteDataIsError: false,
        employeeDeleteDataError: "",
      };

    default:
      return state;
  }
};

export default crudReducer;
