"use client"

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { addEmployeeTableData, addEmployeeTableReset } from "@/context/actions/crudActions/addEmployee";
import { useGlobalContext } from "@/context/GlobalContext";
import { getEmployeeTableData } from "@/context/actions/crudActions/getEmployeeTable";
import { toast } from "react-toastify";
import { TransitionProps } from '@mui/material/transitions';
import { AddEmployeeComponentProps } from "@/types/crud.types";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddEmployee = (props: AddEmployeeComponentProps) => {
  const { addEmployeeOpen, setAddEmployeeOpen, setPage } = props;
  const { crudState, crudDispatch } = useGlobalContext()

  const { employeeAddDataLoading } = crudState;

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
    status: "active",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };



  const handleAddEmployeeClose = () => {
    setAddEmployeeOpen(false);

    setInputData({
      ...inputdata,
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      gender: "",
      location: "",
      status: "active",
    });
  };

  const submitEmployeeData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("inputData", inputdata)

    const employeeData = {
      search: sessionStorage.getItem("search") || "",
      gender: sessionStorage.getItem("gender") || "all",
      status: sessionStorage.getItem("status") || "all",
      sort: sessionStorage.getItem("sort") || "new",
      page: 1,
    };

    addEmployeeTableData(inputdata)(crudDispatch).then(() => {
      handleAddEmployeeClose();
      setPage(1);
      sessionStorage.setItem("page", "1");
      toast("User Added Successully", { autoClose: 2000, type: "success" });
      addEmployeeTableReset()(crudDispatch)
      getEmployeeTableData(employeeData)(crudDispatch)
    })
      .catch((error) => {
        // console.log("checking now", error.message)
        toast(error.message, { autoClose: 2000, type: "error" });
        addEmployeeTableReset()(crudDispatch)
      });
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={addEmployeeOpen}
        onClose={handleAddEmployeeClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="customized-dialog-title">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Add User</div>
            <div>
              <CancelIcon
                onClick={handleAddEmployeeClose}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "#3F51B5",
                }}
              />
            </div>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={submitEmployeeData}>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter FirstName"
                  variant="outlined"
                  fullWidth
                  name="fname"
                  value={inputdata.fname}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter LastName"
                  variant="outlined"
                  fullWidth
                  name="lname"
                  value={inputdata.lname}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={inputdata.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Mobile"
                  variant="outlined"
                  fullWidth
                  name="mobile"
                  type="number"
                  onInput={(e) => {
                    const inputElement = e.target as HTMLInputElement;
                    inputElement.value = Math.max(0, parseInt(inputElement.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  value={inputdata.mobile}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="gender"
                    value={inputdata.gender}
                    onChange={handleSelectChange}
                    label="Select Gender"
                  >
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <FormControl variant="outlined" fullWidth required>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="status"
                    value={inputdata.status}
                    onChange={handleSelectChange}
                    label="Select Status"
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ marginBottom: "15px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Your Location"
                  variant="outlined"
                  fullWidth
                  name="location"
                  value={inputdata.location}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              {employeeAddDataLoading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEmployee;