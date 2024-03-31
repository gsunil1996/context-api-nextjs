import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";

// export interface InputDataType {
//   fname: string;
//   lname: string;
//   email: string;
//   mobile: string;
//   gender: string;
//   location: string;
//   status: string;
// }

// export interface AddSuccessPayloadType extends InputDataType {
//   datecreated: string;
//   _id: string;
//   __v: number;
// }

///////////////// ADD EMPLOYEE /////////////////////////////////////////////////////////
export type InputDataType = {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  gender: string;
  location: string;
  status: string;
};

export type AddSuccessPayloadType = InputDataType & {
  datecreated: string;
  _id: string;
  __v: number;
};

export type AddEmployeeRequestAction = {
  type: typeof ADD_EMPLOYEE_TABLE_DATA_REQUEST;
};

export type AddEmployeeSuccessAction = {
  type: typeof ADD_EMPLOYEE_TABLE_DATA_SUCCESS;
  payload: AddSuccessPayloadType;
};

export type AddEmployeeErrorResponseType = {
  success: boolean;
  error: string;
};

export type AddEmployeeFailureAction = {
  type: typeof ADD_EMPLOYEE_TABLE_DATA_FAILURE;
  payload: string;
};

export type AddEmployeeResetAction = {
  type: typeof ADD_EMPLOYEE_TABLE_DATA_RESET;
};

export type AddEmployeeActionType =
  | AddEmployeeRequestAction
  | AddEmployeeSuccessAction
  | AddEmployeeFailureAction;

export type CrudInitialState = {
  data: Record<string, any>;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;

  employeeProfileData: Record<string, any>;
  employeeProfileIsLoading: boolean;
  employeeProfileIsSuccess: boolean;
  employeeProfileIsError: boolean;
  employeeProfileError: string;

  employeeAddedData: AddSuccessPayloadType | object;
  employeeAddedDataIsSuccess: boolean;
  employeeAddDataLoading: boolean;
  employeeAddedDataIsError: boolean;
  employeeAddedDataError: string;

  employeeEditedData: Record<string, any>;
  employeeEditDataLoading: boolean;
  employeeEditDataIsSuccess: boolean;
  employeeEditDataIsError: boolean;
  employeeEditDataError: string;

  employeeDeletedData: Record<string, any>;
  employeeDeleteDataLoading: boolean;
  employeeDeleteDataIsSuccess: boolean;
  employeeDeleteDataIsError: boolean;
  employeeDeleteDataError: string;
};
