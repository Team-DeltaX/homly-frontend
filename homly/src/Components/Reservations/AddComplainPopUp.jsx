import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/base/Input';
import TextArea from '../Common/TextArea';
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorSnackbar from '../User/ErrorSnackbar';
import ConfirmPopup from "../PrimaryAdmin/ConfirmPopup";
import AxiosClient from '../../services/AxiosClient';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddComplainPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handlesubmit = (e) => {
    const data = {
      ServiceNo: props.reservation.ServiceNO,
      ReservationNo: props.reservation.ReservationId,
      Reason: reason
    };
    console.log("aruna", data);
    // axios
    //   .post("http://localhost:8080/user/reservation/AddComplaint", data)
    AxiosClient.post(`/admin/auth/reservation/AddComplaint`,data)
      .then((res) => {
        console.log("add complaint successfully");
        setOpen(false);
        setOpened(false);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "complaint added successfully",
        });
      })
      .catch((error) => {
        console.log(`error is  nm ${error}`);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "complaint add failed",
        });
      });
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Complain
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">Add Complain</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <TextField
            autoFocus
            disabled={true}
            value={props.reservation.ServiceNO}
            required
            margin="dense"
            id="serviceno"
            name="serviceno"
            label="Employees Service No"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            disabled={true}
            value={props.reservation.ReservationId}
            required
            margin="dense"
            id="reservationno"
            name="reservationno"
            label="Reservation No"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            label=""
            disabled
            type="date"
            fullWidth
            variant="outlined"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />
          <TextField
            margin="dense"
            label="Reason"
            required
            multiline
            fullWidth
            placeholder="Reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
            
            maxLength="parent.maxLength"
          />
        </DialogContent>
        <DialogActions>
        <ConfirmPopup
            open={opened}
            setOpen={setOpened}
            title={" Are you sure you want to confirm this Complain?"}
            text={["Reason :  ", reason]}
            controlfunction={handlesubmit}
          />
          <Button 
            autoFocus
            disabled={reason === ""} 
            onClick={() => {
              setOpened(true);
            }}
            type="submit"
          >
            Add Complain
          </Button>
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
      />
    </React.Fragment>
  );
}
