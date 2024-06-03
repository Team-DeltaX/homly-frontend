import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Input } from "@mui/base/Input";
import TextArea from "../Common/TextArea";
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorSnackbar from "../User/ErrorSnackbar";
import ConfirmPopup from "../PrimaryAdmin/ConfirmPopup";
import AxiosClient from "../../services/AxiosClient";
import { SocketioContext } from "../../Contexts/SocketioContext";

export default function AddComplainPopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [reason, setReason] = React.useState("");
  const { socket } = React.useContext(SocketioContext);
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
      ServiceNo: props.reservation.reservation.ServiceNO,
      ReservationNo: props.reservation.reservation.ReservationId,
      AdminNo: props.reservation.holidayHome.AdminNo,
      Reason: reason,
    };
    AxiosClient.post(`/admin/auth/reservation/AddComplaint`, data)
      .then((res) => {
        setOpen(false);
        setOpened(false);
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "complaint added successfully",
        });
        socket.emit("newNotification", {
          senderId: res.data.adminNo,
          receiverId: "HomlyPriAdmin",
          data: `New Complain against ${props.reservation.reservation.ServiceNO} about his/her reservation (${props.reservation.reservation.ReservationId}). Please check it out.`,
          type: "New Complain",
          time: new Date(),
        });
      })
      .catch((error) => {
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
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Complain
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
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
            value={props.reservation.reservation.ServiceNO}
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
            value={props.reservation.reservation.ReservationId}
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
            disabled={true}
            value={props.reservation.holidayHome.Name}
            required
            margin="dense"
            id="holidayhome"
            name="holidayhome"
            label="Holiday Home"
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
