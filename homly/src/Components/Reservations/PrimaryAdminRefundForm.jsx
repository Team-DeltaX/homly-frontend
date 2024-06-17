import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosClient from "../../services/AxiosClient";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from '@mui/icons-material/Delete';
import UploadImageCloudinary from "../Common/UploadImageCloudinary";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Grid,
  Divider,
  Collapse,
  Typography,
} from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PrimaryAdminRefundForm = ({
  open,
  setOpen,
  refundId,
  reservationId,
  serviceNo,
  CancelledBy,
  accountHolderName,
  accountNumber,
  bankName,
  branchName,
  payment,
  contactNo,
}) => {
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [reason, setReason] = useState("");
  const [refundAmount, setRefundAmount] = useState(0);
  const [slip, setSlip] = useState("string");

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      refundId: refundId,
      reservationNo: reservationId,
      serviceNo: serviceNo,
      contactNumber: contactNo,
      cancelledBy: CancelledBy,
      status: "Refunded",
      accountHolder: accountHolderName,
      accountNumber: accountNumber,
      bank: bankName,
      branch: branchName,
      reason: reason,
      refundAmount: refundAmount,
      bankSlip: slip,
    };

    AxiosClient.put("/admin/auth/reservation/updateRefundByAdmin", formData, {
        withCredentials: true,
        })
        .then((response) => {
            console.log(response.data);
            handleClose();
        })
        .catch((error) => {
            console.error("Error adding refund:", error);
        });

    handleClose();
  };

  const toggleGrid = () => {
    setIsGridCollapsed(!isGridCollapsed);
  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle sx={{ fontWeight: "600" }}>Refund Form</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          "&:hover": {
            color: "#823",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={2} justifyContent="flex-end" mb={1}>
            <Grid item xs={11}>
              <TextField
                fullWidth
                label="Reservation ID"
                name="reservationId"
                variant="filled"
                size="small"
                defaultValue={reservationId}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          <Grid item xs={1}>
            <IconButton onClick={toggleGrid} sx={{ mb: 2 }}>
              {isGridCollapsed ? <ExpandMoreIcon sx={{"&:hover": {
            color: "#823",
          },}} /> : <ExpandLessIcon sx={{"&:hover": {
            color: "#823",
          },}} />}
            </IconButton>
          </Grid>
        </Grid>
        <Collapse in={!isGridCollapsed}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                size="small"
                label="Service No"
                name="serviceNo"
                defaultValue={serviceNo}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                size="small"
                label="Employee Name"
                name="employeeName"
                defaultValue="John Doe"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid> */}
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                variant="filled"
                size="small"
                type="number"
                label="Contact No"
                name="contactNo"
                defaultValue={contactNo}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Payment Amount"
                name="payment"
                variant="filled"
                size="small"
                defaultValue={payment}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                size="small"
                label="Cancelled By"
                name="cancelledBy"
                defaultValue={CancelledBy === "User" ? "You" : "Primary Admin"}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                variant="filled"
                size="small"
                label="Account Holder Name"
                name="accountHolderName"
                defaultValue={accountHolderName}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                variant="filled"
                size="small"
                defaultValue={accountNumber}
                InputProps={{
                  readOnly: true,
                }}
                label="Account No"
                name="accountNo"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                required
                variant="filled"
                size="small"
                defaultValue={bankName}
                InputProps={{
                  readOnly: true,
                }}
                label="Bank"
                name="bank"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                required
                variant="filled"
                size="small"
                defaultValue={branchName}
                InputProps={{
                  readOnly: true,
                }}
                label="Branch"
                name="branch"
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
        </Collapse>
        <Grid container spacing={2}>
        <Grid item xs={6}>
              <TextField
                fullWidth
                required
                variant="outlined"
                size="normal"
                type="number"
                label="Refund Amount"
                name="Amount"
                defaultValue={0}
                onChange={(e) => setRefundAmount(e.target.value)}                
              />
            </Grid>
            

          <Grid item xs={6} justifyContent="flex-end">
            <Typography variant="caption" display="block" gutterBottom>
                Attach the bank slip evidence in here.*
            </Typography>

                <UploadImageCloudinary
                          folderName="bank-slips"
                          setImage={setSlip}
                          isMultiple={false}
                          limit={1}
                          buttonName="Upload bank slip"
                          buttonVariant="outlined"
                          isDisplayImageName={false}
                          isDisabled={false}
                />
          </Grid>
          <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                size="normal"
                placeholder="Reason if any"
                label="Reason"
                name="reason"
                multiline
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type="submit">Confirm Refund</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrimaryAdminRefundForm;
