import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
} from '@mui/material';

const RequestRefundPopup = ({ open, setOpen, reservationId, ServiceNo, CancelledBy }) => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchAutocompleteDisabled, setBranchAutocompleteDisabled] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/samma89/Sri-Lanka-Bank-and-Branch-List/master/banks.json');
        setBanks(response.data);
      } catch (error) {
        console.error('Error fetching banks data:', error);
      }
    };

    fetchBanks();
  }, []);
  useEffect(() => {
    const fetchBranches = async () => {
      if (!selectedBank) return;

      try {
        const response = await axios.get(`https://raw.githubusercontent.com/samma89/Sri-Lanka-Bank-and-Branch-List/master/branches.json`);
        const branchesData = response.data[selectedBank.ID.toString()];
        setBranches(branchesData || []);
        setBranchAutocompleteDisabled(false); 
      } catch (error) {
        console.error('Error fetching branches data:', error);
      }
    };

    if (!selectedBank) {
      setBranches([]); 
      setBranchAutocompleteDisabled(true);
    } else {
      fetchBranches();
    }
  }, [selectedBank]);
  const handleSubmit = async (event) => {
    event.preventDefault();    
    const formData = {
      reservationNo: reservationId,
      serviceNo: 214092, 
      contactNumber: event.target.contactNo.value,
      cancelledBy: CancelledBy,
      status: 'pending', 
      accountHolder: event.target.accountHolderName.value,
      accountNumber: event.target.accountNo.value,
      bank: selectedBank.name,
      branch: selectedBranch.name,
    };

      AxiosClient.post('/user/auth/reservation/addRefundByUser', formData,{
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error adding refund:', error);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle sx={{ fontWeight: '600' }}>Refund Form</DialogTitle>
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
              label="Service No"
              name="serviceNo"
              defaultValue={ServiceNo}
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
              defaultValue="John Doe"
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
          <Grid item xs={12}>
            <DialogContentText sx={{ m: 1 }}>
              Please fill out the form below to process your refund.
            </DialogContentText>
          </Grid> 
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Account Holder Name"
              name="accountHolderName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Account No"
              name="accountNo"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
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
          </Grid>
          <Grid item sm={6} xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              type='number'
              label="Contact No"
              name="contactNo"
              placeholder='07X-XXXXXXX'
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type="submit">Request Refund</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestRefundPopup;
