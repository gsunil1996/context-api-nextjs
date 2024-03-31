"use client"

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { deleteEmployeeTableData, deleteEmployeeTableReset } from "@/context/actions/crudActions/deleteEmployee";
import { getEmployeeTableData } from "@/context/actions/crudActions/getEmployeeTable";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteEmployee = (props) => {
  const {
    deleteEmployeeOpen,
    setDeleteEmployeeOpen,
    tableRowId,
    page,
    setPage,
  } = props;

  const { crudState, crudDispatch } = useGlobalContext()

  const { employeeDeleteDataLoading } = crudState

  const handleDeleteEmployeeClose = () => {
    setDeleteEmployeeOpen(false);
  };

  const handleUserDelete = () => {
    const employeeData = {
      search: sessionStorage.getItem("search"),
      gender: sessionStorage.getItem("gender"),
      status: sessionStorage.getItem("status"),
      sort: sessionStorage.getItem("sort"),
      page,
    };

    const payload = {
      tableRowId,
    };

    deleteEmployeeTableData(payload)(crudDispatch).then(() => {
      handleDeleteEmployeeClose();
      sessionStorage.setItem("page", page);
      setPage(page);
      toast("User Deleted Successully", {
        autoClose: 2000,
        type: "success",
      });
      deleteEmployeeTableReset()(crudDispatch)
      getEmployeeTableData(employeeData)(crudDispatch)
    })
      .catch((error) => {
        // console.log("checking now", error.message)
        toast(error.message, { autoClose: 2000, type: "error" });
        deleteEmployeeTableReset()(crudDispatch)
      });
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={deleteEmployeeOpen}
        onClose={handleDeleteEmployeeClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ marginTop: "0px" }}>
              Are you sure to delete this user
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleDeleteEmployeeClose}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleUserDelete}
            >
              {employeeDeleteDataLoading ? (
                <CircularProgress style={{ color: "#fff" }} />
              ) : (
                "Yes"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteEmployee;