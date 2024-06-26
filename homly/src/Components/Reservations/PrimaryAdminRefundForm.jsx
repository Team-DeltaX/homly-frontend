import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
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
  FormHelperText,
} from "@mui/material";
import UploadImageCloudinary from "../Common/UploadImageCloudinary";
import AxiosClient from "../../services/AxiosClient";

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
  const [refundAmount, setRefundAmount] = useState("");
  const [slip, setSlip] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [imgName, setImgName] = useState("");
  const [refundAmountError, setRefundAmountError] = useState(false);
  const [slipError, setSlipError] = useState(false);

  useEffect(() => {
    const fetchRefund = async () => {
      setIsFilled(false);
      setReason("");
      setRefundAmount("");
      setSlip("");
      try {
        const response = await AxiosClient.get(
          `/admin/auth/reservation/getRefundById/${reservationId}`
        );
        if (response.data.length > 0 && response.data[0].bankSlip !== null) {
          setIsFilled(true);
          setReason(response.data[0].reason);
          setRefundAmount(response.data[0].refundAmount);
          setSlip(response.data[0].bankSlip);
          setStatus(response.data[0].status || "Pending");
        } else {
          setIsFilled(false);
        }
      } catch (error) {}
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
      refundAmount: parseFloat(refundAmount),
      bankSlip: slip,
    };
    try {
      const response = await AxiosClient.put(
        "/admin/auth/reservation/updateRefundByAdmin",
        formData,
        {
          withCredentials: true,
        }
      );
      handleClose();
    } catch (error) {}
  };
  const toggleGrid = () => {
    setIsGridCollapsed(!isGridCollapsed);
  };
  const handleSlipUpload = (fileName) => {
    setSlip(fileName);
    setSlipError(false);
  };
  const handleRefundAmountChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    const isValidNumber = value === "" || /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
    if (isValidNumber && (value === "" || parseFloat(value) <= payment)) {
      setRefundAmount(value);
      setRefundAmountError(false);
    } else {
      setRefundAmountError(true);
    }
  };
  const handleChipClick = (url) => {
    window.open(url, "_blank");
  };
  const isConfirmDisabled = () => {
    return (
      isFilled ||
      (status === "Refunded" &&
        (slip === "" || refundAmount === "" || refundAmount <= 0)) ||
      (status === "Rejected" &&
        (reason === "" ||
          reason.trim().length === 0 ||
          slip !== "" ||
          refundAmount !== "")) ||
      (status === "Pending" && (slip !== "" || refundAmount !== ""))
    );
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
              error={refundAmountError}
            />
            {refundAmountError && (
              <FormHelperText error>
                Refund amount must be a valid number less than or equal to{" "}
                {payment}.
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={6} alignItems="flex-end">
            <Typography variant="caption" display="block" gutterBottom>
              Attach an image of the bank slip evidence here.*
            </Typography>
            {slip ? (
              <Tooltip
                title={
                  <img
                    src={slip}
                    alt="Bank Slip"
                    style={{ maxWidth: "20vw", maxHeight: "20vh" }}
                  />
                }
                placement="top"
              >
                <Chip
                  label={slip}
                  onClick={() => handleChipClick(slip)}
                  onDelete={
                    status !== "Refunded" ? handleDeleteSlip : undefined
                  }
                  deleteIcon={
                    status !== "Refunded" ? (
                      <DeleteIcon sx={{ "&:hover": { color: "primary" } }} />
                    ) : null
                  }
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
            {slipError && (
              <FormHelperText error>
                Please upload the bank slip for a refund.
              </FormHelperText>
            )}
          </Grid>          
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              size="normal"
              placeholder="Reason for rejection if applicable"
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
        <Button disabled={isConfirmDisabled()} type="submit">
          Confirm Refund
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrimaryAdminRefundForm;
