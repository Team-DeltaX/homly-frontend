import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import dayjs from "dayjs";
import AxiosClient from "../../services/AxiosClient";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Grid,
  Autocomplete,
  Typography,
} from "@mui/material";
import ErrorSnackbar from "../User/ErrorSnackbar";

const RequestRefundPopup = ({
  open,
  setOpen,
  reservationId,
  ServiceNo,
  EmpName,
  Amount,
  CancelledBy,
}) => {
  const phoneRegex = /^(0|\+94)[0-9]{9}$/;
  const nameRegex = /^[a-zA-Z. ]+$/;
  const accountNumberRegex = /^[0-9]+$/;
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchAutocompleteDisabled, setBranchAutocompleteDisabled] =
    useState(true);
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [status, setStatus] = useState("");
  const [refundDate, setRefundDate] = useState(dayjs());
  const [isFilled, setIsFilled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const checkContactNo = (contactNumber) => {
    return contactNumber.length > 0 && !phoneRegex.test(contactNumber);
  };
  const checkAccountHolder = (accountHolder) => {
    return accountHolder.length > 0 && !nameRegex.test(accountHolder);
  };
  const checkAccountNumber = (accountNumber) => {
    return accountNumber.length > 0 && !accountNumberRegex.test(accountNumber);
  };
  useEffect(() => {
    if (
      !checkContactNo(contactNumber) &&
      !checkAccountNumber(accountNumber) &&
      !checkAccountHolder(accountHolder) &&
      contactNumber.length > 0 &&
      accountNumber.length > 0 &&
      accountHolder.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [contactNumber, accountNumber, accountHolder]);
  useEffect(() => {
    setIsFilled(false);
    setAccountHolder("");
    setAccountNumber("");
    setBank("");
    setBranch("");
    setContactNumber("");
    setStatus("");
    setRefundDate(dayjs().format("DD-MM-YYYY"));
    const fetchRefund = async () => {
      AxiosClient.get(`/user/auth/reservation/getRefundById/${reservationId}`)
        .then((response) => {
          setIsFilled(response.data.length > 0);
          setAccountHolder(response.data[0].accountHolder);
          setAccountNumber(response.data[0].accountNumber);
          setBank(response.data[0].bank);
          setBranch(response.data[0].branch);
          setContactNumber(response.data[0].contactNumber);
          setStatus(response.data[0].status);
          setRefundDate(
            dayjs(response.data[0].refundDate).format("DD-MM-YYYY")
          );
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "success",
            message: "Already requested for refund!",
          });
        })
        .catch((error) => {
          setErrorStatus({
            ...errorStatus,
            isOpen: true,
            type: "warning",
            message: "Fill this form to request for refund!",
          });
        });
    };
    if (open) {
      fetchRefund();
    }
  }, [reservationId, open]);
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/samma89/Sri-Lanka-Bank-and-Branch-List/master/banks.json"
        );
        setBanks(response.data);
      } catch (error) {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Failed to fetch bank details!",
        });
      }
    };

    fetchBanks();
  }, []);
  useEffect(() => {
    const fetchBranches = async () => {
      if (!selectedBank) return;

      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/samma89/Sri-Lanka-Bank-and-Branch-List/master/branches.json`
        );
        const branchesData = response.data[selectedBank.ID.toString()];
        setBranches(branchesData || []);
        setBranchAutocompleteDisabled(false);
      } catch (error) {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Failed to fetch branch details!",
        });
      }
    };

    if (!selectedBank) {
      setBranches([]);
      setBranchAutocompleteDisabled(true);
      setSelectedBranch(null); // Deselect the branch if the bank is deselected
    } else {
      fetchBranches();
    }
  }, [selectedBank]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      reservationNo: reservationId,
      serviceNo: ServiceNo,
      contactNumber: event.target.contactNo.value,
      cancelledBy: CancelledBy,
      payment: Amount,
      status: "Pending",
      accountHolder: event.target.accountHolderName.value,
      accountNumber: event.target.accountNo.value,
      bank: selectedBank.name,
      branch: selectedBranch.name,
    };
    AxiosClient.post("/user/auth/reservation/addRefundByUser", formData, {
      withCredentials: true,
    })
      .then((response) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "success",
          message: "Refund details submitted successfully!",
        });
        handleClose();
      })
      .catch((error) => {
        setErrorStatus({
          ...errorStatus,
          isOpen: true,
          type: "error",
          message: "Failed to submit refund details!",
        });
      });
  };

  return (
    <Fragment>
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
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                size="small"
                label="Employee Name"
                name="employeeName"
                defaultValue={EmpName}
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
                label="Payment Amount"
                name="payment"
                defaultValue={Amount}
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
                defaultValue={CancelledBy}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            {isFilled ? (
              ""
            ) : (
              <Grid item xs={12}>
                <DialogContentText sx={{ m: 1 }}>
                  Please fill out the form below to process your refund.
                </DialogContentText>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Account Holder Name"
                name="accountHolderName"
                value={accountHolder}
                onChange={(e) => {
                  setAccountHolder(e.target.value);
                }}
                error={checkAccountHolder(accountHolder)}
                helperText={
                  checkAccountHolder(accountHolder)
                    ? "invalid account holder name"
                    : ""
                }
                InputProps={{
                  readOnly: isFilled,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Account No"
                name="accountNo"
                value={accountNumber}
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                error={checkAccountNumber(accountNumber)}
                helperText={
                  checkAccountNumber(accountNumber)
                    ? "invalid account number"
                    : ""
                }
                InputProps={{
                  readOnly: isFilled,
                }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {isFilled ? (
                <TextField
                  fullWidth
                  required
                  label="Bank"
                  name="bank"
                  value={bank}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <Autocomplete
                  options={banks}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, newValue) => {
                    setSelectedBank(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      required
                      label="Bank"
                      name="bank"
                    />
                  )}
                />
              )}
            </Grid>
            <Grid item sm={6} xs={12}>
              {isFilled ? (
                <TextField
                  fullWidth
                  required
                  label="Branch"
                  name="branch"
                  value={branch}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <Autocomplete
                  options={branches}
                  getOptionLabel={(option) => option.name}
                  value={selectedBranch}
                  onChange={(event, newValue) => {
                    setSelectedBranch(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      required
                      label="Branch"
                      name="branch"
                      disabled={branchAutocompleteDisabled}
                    />
                  )}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="text"
                label="Contact No"
                name="contactNo"
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
                error={checkContactNo(contactNumber)}
                helperText={
                  checkContactNo(contactNumber) ? "invalid contact number" : ""
                }
                placeholder="07XXXXXXXX"
                InputProps={{
                  readOnly: isFilled,
                }}
              />
            </Grid>
            {isFilled && (
              <>
                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    fullWidth
                    required
                    margin="dense"
                    variant="filled"
                    size="small"
                    label="Status"
                    name="status"
                    value={status}
                  />
                </Grid>
                {status === "Refunded" || status === "Rejected" ? (
                  <Grid item xs={6}>
                    <TextField
                      autoFocus
                      fullWidth
                      required
                      margin="dense"
                      variant="filled"
                      size="small"
                      label={
                        status === "Refunded" ? "Refunded Date" : "Rejected Date"
                      }
                      name="date"
                      value={refundDate}
                    />
                  </Grid>
                ) : (
                  ""
                )}
              </>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          {isFilled ? (
            <Typography
              variant="h6"
              textTransform="capitalize"
              textAlign="center"
              color={
                status === "Refunded"
                  ? "green"
                  : status === "Rejected"
                  ? "red"
                  : "black"
              }
            >
              {status === "Pending"
                ? "Your Refund Request is ongoing. The primary admin will get back to you soon."
                : status === "Rejected"
                ? "Your Refund Request is rejected!"
                : status === "Refunded"
                ? "Your Refund is done! Any clarification contact welfare department."
                : ""}
            </Typography>
          ) : (
            <Button disabled={isDisabled} type="submit">
              Request Refund
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(val) => setErrorStatus({ ...errorStatus, isOpen: val })}
      />
    </Fragment>
  );
};

export default RequestRefundPopup;
