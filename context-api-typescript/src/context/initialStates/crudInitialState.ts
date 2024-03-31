import { CrudInitialState } from "@/types/crud.types";

export const crudInitialState: CrudInitialState = {
  // get employee table data
  data: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",

  // get employee profile
  employeeProfileData: null,
  employeeProfileIsLoading: false,
  employeeProfileIsSuccess: false,
  employeeProfileIsError: false,
  employeeProfileError: "",

  // add employee table data
  employeeAddedData: null,
  employeeAddedDataIsSuccess: false,
  employeeAddDataLoading: false,
  employeeAddedDataIsError: false,
  employeeAddedDataError: "",

  // edit employee table data
  employeeEditedData: null,
  employeeEditDataLoading: false,
  employeeEditDataIsSuccess: false,
  employeeEditDataIsError: false,
  employeeEditDataError: "",

  // delete employee table data
  employeeDeletedData: null,
  employeeDeleteDataLoading: false,
  employeeDeleteDataIsSuccess: false,
  employeeDeleteDataIsError: false,
  employeeDeleteDataError: "",
};
