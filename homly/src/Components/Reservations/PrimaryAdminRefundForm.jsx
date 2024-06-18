import React, { useEffect, useState } from "react";
import AxiosClient from "../../services/AxiosClient";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from '@mui/icons-material/Delete';
import UploadImageCloudinary from "../Common/UploadImageCloudinary";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Divider,
  Collapse,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  const [slip, setSlip] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [imgName, setImgName] = useState("");

  useEffect(() => {
    const fetchRefund = async () => {
      setIsFilled(false);
      setReason("");
      setRefundAmount(0);
      setSlip("");

      try {
        const response = await AxiosClient.get(`/admin/auth/reservation/getRefundById/${reservationId}`);
        if (response.data.length > 0 && response.data[0].bankSlip !== null) {
          setIsFilled(true);
          setReason(response.data[0].reason);
          setRefundAmount(response.data[0].refundAmount);
          setSlip(response.data[0].bankSlip);
          setStatus(response.data[0].status || "Pending");
        } else {
          setIsFilled(false);
        }
      } catch (error) {
        console.error("Error fetching refund:", error);
      }
    };

    fetchRefund();
  }, [reservationId]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteSlip = () => {
    setSlip("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      refundId: refundId,
      reservationNo: reservationId,
      serviceNo: serviceNo,
      contactNumber: contactNo,
      cancelledBy: CancelledBy,
      status: status,
      accountHolder: accountHolderName,
      accountNumber: accountNumber,
      bank: bankName,
      branch: branchName,
      reason: reason || "no special reason",
      refundAmount: refundAmount,
      bankSlip: slip,
    };

    try {
      const response = await AxiosClient.put("/admin/auth/reservation/updateRefundByAdmin", formData, {
        withCredentials: true,
      });
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error adding refund:", error);
    }
  };

  const toggleGrid = () => {
    setIsGridCollapsed(!isGridCollapsed);
  };

  const handleSlipUpload = (fileName) => {
    setSlip(fileName); // Set the uploaded file name to state
  };

  const handleRefundAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value <= payment) {
      setRefundAmount(value);
    } else {
      setRefundAmount("");
    }
  };

  const handleChipClick = (url) => {
    window.open(url, "_blank");
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
              {isGridCollapsed ? (
                <ExpandMoreIcon sx={{ "&:hover": { color: "#823" } }} />
              ) : (
                <ExpandLessIcon sx={{ "&:hover": { color: "#823" } }} />
              )}
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
              value={refundAmount}
              onChange={handleRefundAmountChange}
              InputProps={{
                readOnly: isFilled,
              }}
            />
          </Grid>
          <Grid item xs={6} alignItems="flex-end">
            <Typography variant="caption" display="block" gutterBottom>
              Attach the bank slip evidence in here.*
            </Typography>
            {slip ? (
              <Tooltip
              title={<img src={slip} alt="Bank Slip" style={{ maxWidth: "20vw", maxHeight: "20vh" }} />}
              placement="top"
              >
              <Chip
                label={slip}
                onClick={() => handleChipClick(slip)}
                onDelete={status !== "Refunded" ? handleDeleteSlip : undefined}
                deleteIcon={status !== "Refunded" ? <DeleteIcon sx={{ "&:hover": { color: "primary" } }} /> : null}
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
              />
              </Tooltip>

            ) : (
              <UploadImageCloudinary
                folderName="bank-slips"
                setImage={handleSlipUpload}
                isMultiple={false}
                limit={1}
                buttonName="Upload bank slip"
                buttonVariant="outlined"
                isDisplayImageName={false}
                isDisabled={false}
                setImageName={setImgName}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" size="normal">
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                disabled={isFilled}
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Refunded">Refunded</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="normal"
              placeholder="refund half of the payment because..."
              label="Reason if any"
              multiline
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              InputProps={{
                readOnly: isFilled,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button disabled={isFilled} type="submit">Confirm Refund</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrimaryAdminRefundForm;
