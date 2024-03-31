import {
  ADD_EMPLOYEE_TABLE_DATA_FAILURE,
  ADD_EMPLOYEE_TABLE_DATA_REQUEST,
  ADD_EMPLOYEE_TABLE_DATA_RESET,
  ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
  DELETE_EMPLOYEE_TABLE_DATA_FAILURE,
  DELETE_EMPLOYEE_TABLE_DATA_REQUEST,
  DELETE_EMPLOYEE_TABLE_DATA_RESET,
  DELETE_EMPLOYEE_TABLE_DATA_SUCCESS,
  EDIT_EMPLOYEE_TABLE_DATA_REQUEST,
  EDIT_EMPLOYEE_TABLE_DATA_RESET,
  EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
  GET_EMPLOYEE_PROFILE_FAILURE,
  GET_EMPLOYEE_PROFILE_REQUEST,
  GET_EMPLOYEE_PROFILE_SUCCESS,
  GET_EMPLOYEE_TABLE_DATA_REQUEST,
  GET_EMPLOYEE_TABLE_DATA_SUCCESS,
} from "@/context/actionTypes/crudActionTypes";
import { Dispatch, SetStateAction } from "react";

////////////////// Error Response Type //////////////////////////////////////////////////////
export type ErrorResponseType = {
  success: boolean;
  error: string;
};

///////////////// GET EMPLOYEE TABLE /////////////////////////////////////////////////////////

export type GetEmployeeTableDataProps = {
  search: string;
  gender: string;
  status: string;
  sort: string;
  page: number;
};

type Pagination = {
  count: number;
  pageCount: number;
};

export type Employee = {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  gender: string;
  status: string;
  location: string;
  datecreated: string; // This should ideally be a Date type if you can parse it
  __v: number;
  dateUpdated?: string; // This property is optional as it's not present in all employee objects
};

type EmployeesData = {
  pagination: Pagination;
  employeesTableData: Employee[];
};

export type GetEmployeeTableAPIResponse = {
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

export type GetEmployeeTableDataFailure = {
  type: typeof GET_EMPLOYEE_PROFILE_FAILURE;
  payload: string;
};

export type GetEmployeeActionType =
  | GetEmployeeTableDataRequestType
  | GetEmployeeTableSuccessType
  | GetEmployeeTableDataFailure;

///////////////// GET EMPLOYEE PROFILE /////////////////////////////////////////////////////////

export type GetEmployeeProfileProps = {
  id: string;
};

export type GetEmployeeProfileApiResponse = {
  success: boolean;
  data: Employee;
};

export type GetEmployeeProfileRequestType = {
  type: typeof GET_EMPLOYEE_PROFILE_REQUEST;
};

export type GetEmployeeProfileSuccessType = {
  type: typeof GET_EMPLOYEE_PROFILE_SUCCESS;
  payload: GetEmployeeProfileApiResponse;
};

export type GetEmployeeProfileFailureType = {
  type: typeof GET_EMPLOYEE_PROFILE_FAILURE;
  payload: string;
};

export type GetEmployeeProfileActionType =
  | GetEmployeeProfileRequestType
  | GetEmployeeProfileSuccessType
  | GetEmployeeProfileFailureType;

///////////////// DELETE EMPLOYEE ////////////////////////////////////////////////////////////

export type DeleteEmployeeProps = {
  tableRowId: string;
};

export type DeleteEmployeeProfileApiResponse = {
  success: boolean;
  data: Employee;
};

export type DeleteEmployeeRequestType = {
  type: typeof DELETE_EMPLOYEE_TABLE_DATA_REQUEST;
};

export type DeleteEmployeeSuccessType = {
  type: typeof DELETE_EMPLOYEE_TABLE_DATA_SUCCESS;
  payload: DeleteEmployeeProfileApiResponse;
};

export type DeleteEmployeeFailureType = {
  type: typeof DELETE_EMPLOYEE_TABLE_DATA_FAILURE;
  payload: string;
};

export type DeleteEmployeeResetType = {
  type: typeof DELETE_EMPLOYEE_TABLE_DATA_RESET;
};

export type DeleteEmployeeActionType =
  | DeleteEmployeeRequestType
  | DeleteEmployeeSuccessType
  | DeleteEmployeeFailureType;

///////////////// ADD EMPLOYEE ////////////////////////////////////////////////////////////////

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

///////////////// EDIT EMPLOYEE ////////////////////////////////////////////////////////////////

export type EditEmployeeProfileApiResponse = {
  success: boolean;
  data: Employee;
};

export type EditEmployeeTableProps = {
  tableRowId: string;
  data: InputDataType;
};

export type EditEmployeeRequestType = {
  type: typeof EDIT_EMPLOYEE_TABLE_DATA_REQUEST;
};

export type EditEmployeeSuccessType = {
  type: typeof EDIT_EMPLOYEE_TABLE_DATA_SUCCESS;
  payload: EditEmployeeProfileApiResponse;
};

export type EditEmployeeFailureType = {
  type: typeof EDIT_EMPLOYEE_TABLE_DATA_REQUEST;
  payload: string;
};

export type EditEmployeeResetType = {
  type: typeof EDIT_EMPLOYEE_TABLE_DATA_RESET;
};

export type EditEmployeeActionType =
  | EditEmployeeRequestType
  | EditEmployeeSuccessType
  | EditEmployeeFailureType;

////////////////////// COMBINE ALL ACITONS ////////////////////////////////////////////////////
export type CrudActions =
  | GetEmployeeActionType
  | GetEmployeeProfileActionType
  | DeleteEmployeeActionType
  | DeleteEmployeeResetType
  | AddEmployeeActionType
  | AddEmployeeResetAction
  | EditEmployeeActionType
  | EditEmployeeResetType;

///////////////// INITIAL STATE TYPE //////////////////////////////////////////////////////

export type CrudInitialState = {
  data: GetEmployeeTableAPIResponse | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string;

  employeeProfileData: GetEmployeeProfileApiResponse | null;
  employeeProfileIsLoading: boolean;
  employeeProfileIsSuccess: boolean;
  employeeProfileIsError: boolean;
  employeeProfileError: string;

  employeeAddedData: AddSuccessPayloadType | null;
  employeeAddedDataIsSuccess: boolean;
  employeeAddDataLoading: boolean;
  employeeAddedDataIsError: boolean;
  employeeAddedDataError: string;

  employeeEditedData: EditEmployeeProfileApiResponse | null;
  employeeEditDataLoading: boolean;
  employeeEditDataIsSuccess: boolean;
  employeeEditDataIsError: boolean;
  employeeEditDataError: string;

  employeeDeletedData: DeleteEmployeeProfileApiResponse | null;
  employeeDeleteDataLoading: boolean;
  employeeDeleteDataIsSuccess: boolean;
  employeeDeleteDataIsError: boolean;
  employeeDeleteDataError: string;
};

/////////////////// Component Types /////////////////////////////////////

export type Column = {
  id: string;
  label: string;
  minwidth: number;
  align: "left" | "right" | "center";
  background: string;
};

export type AddEmployeeComponentProps = {
  addEmployeeOpen: boolean;
  setAddEmployeeOpen: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
};

export type DeleteEmployeeComponentProps = {
  deleteEmployeeOpen: boolean;
  setDeleteEmployeeOpen: Dispatch<SetStateAction<boolean>>;
  tableRowId: string;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export type EditEmployeeComponentProps = {
  editEmployeeopen: boolean;
  setEditEmployeeOpen: Dispatch<SetStateAction<boolean>>;
  tableRowId: string;
};

export type GetSingleEmployeeParmsType = {
  params: {
    employee: string;
  };
};
