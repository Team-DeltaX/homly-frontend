import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import logo from "../../../Assets/images/logo.png";
import dayjs from "dayjs";
import { useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PreviewPopupReservationReport = ({
  open,
  setOpen,
  previewData,
  toDate,
  fromDate,
}) => {
  const [isDownolad, setIsDownload] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function createData(name, protein) {
    return { name, protein };
  }
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md" // Set the desired maxWidth (xs, sm, md, lg, xl)
        fullWidth={true} // Set to true to make the dialog take up the full width
      >
        <div>
          <div>
            {" "}
            <img
              src={logo}
              alt="logoOfHomely"
              style={{ width: "150px", height: "auto", padding: "5%" }}
            />
          </div>

          <div>
            <DialogTitle
              sx={{ m: 1, p: 2, textAlign: "center", padding: "1%" }}
              id="customized-dialog-title"
              style={{ fontWeight: "bold" }}
            >
              Inova IT Systems - Welfare Department <br />
              Reservation Details
            </DialogTitle>
          </div>
        </div>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[400],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item> From Date : {dayjs(fromDate).format("YYYY/MM/DD")} </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>To date : {dayjs(toDate).format("YYYY/MM/DD")} </Item>
            </Grid>
          </Grid>
        </Box>

        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Reservation ID{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Holiday Home name{" "}
                  </TableCell>

                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Recipient Name{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Checking Date{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Checkout Date{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    No. of rooms{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    No. of halls{" "}
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    {" "}
                    Payment amount(lkr){" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {previewData &&
                  previewData.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.reservations.ReservationId}
                      </TableCell>
                      <TableCell>{row.hhName}</TableCell>
                      <TableCell>{row.empName}</TableCell>
                      <TableCell>{row.reservations.CheckinDate}</TableCell>
                      <TableCell>{row.reservations.CheckoutDate}</TableCell>
                      <TableCell>{row.reservations.NoOfRooms}</TableCell>
                      <TableCell>{row.reservations.NoOfHalls}</TableCell>
                      <TableCell align="right">
                        {row.reservations.Price}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default PreviewPopupReservationReport;
