import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
  GET_EMPLOYEE_TABLE_DATA_REQUEST,
  GET_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";

///////////////// GET EMPLOYEE TABLE /////////////////////////////////////////////////////////

type Pagination = {
  count: number;
  pageCount: number;
};

type Employee = {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  gender: "male" | "female";
  status: "active" | "inactive";
  location: string;
  datecreated: string; // This should ideally be a Date type if you can parse it
  __v: number;
  dateUpdated?: string; // This property is optional as it's not present in all employee objects
};

type EmployeesData = {
  pagination: Pagination;
  employeesTableData: Employee[];
};

type GetEmployeeTableAPIResponse = {
  success: boolean;
  data: EmployeesData;
};

export type GetEmployeeTableDataRequestType = {
  type: typeof GET_EMPLOYEE_TABLE_DATA_REQUEST;
};

export type GetEmployeeTableSuccessType = {
  type: typeof GET_EMPLOYEE_TABLE_DATA_SUCCESS;
  payload: GetEmployeeTableAPIResponse;
};

/////////////////////////////////////////////////////////////////////////////////////////////

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
  data: null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;

  employeeProfileData: null;
  employeeProfileIsLoading: boolean;
  employeeProfileIsSuccess: boolean;
  employeeProfileIsError: boolean;
  employeeProfileError: string;

  employeeAddedData: AddSuccessPayloadType | null;
  employeeAddedDataIsSuccess: boolean;
  employeeAddDataLoading: boolean;
  employeeAddedDataIsError: boolean;
  employeeAddedDataError: string;

  employeeEditedData: null;
  employeeEditDataLoading: boolean;
  employeeEditDataIsSuccess: boolean;
  employeeEditDataIsError: boolean;
  employeeEditDataError: string;

  employeeDeletedData: null;
  employeeDeleteDataLoading: boolean;
  employeeDeleteDataIsSuccess: boolean;
  employeeDeleteDataIsError: boolean;
  employeeDeleteDataError: string;
};
