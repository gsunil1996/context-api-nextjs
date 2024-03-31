import { CrudInitialState } from "@/types/crud.types";

export const crudInitialState: CrudInitialState = {
  // get employee table data
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",

  // get employee profile
  employeeProfileData: {},
  employeeProfileIsLoading: false,
  employeeProfileIsSuccess: false,
  employeeProfileIsError: false,
  employeeProfileError: "",

  // add employee table data
  employeeAddedData: {},
  employeeAddedDataIsSuccess: false,
  employeeAddDataLoading: false,
  employeeAddedDataIsError: false,
  employeeAddedDataError: "",

  // edit employee table data
  employeeEditedData: {},
  employeeEditDataLoading: false,
  employeeEditDataIsSuccess: false,
  employeeEditDataIsError: false,
  employeeEditDataError: "",

  // delete employee table data
  employeeDeletedData: {},
  employeeDeleteDataLoading: false,
  employeeDeleteDataIsSuccess: false,
  employeeDeleteDataIsError: false,
  employeeDeleteDataError: "",
};
