import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
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

const PreviewPopupIncomeReport = ({ open, setOpen, previewData, toDate, fromDate }) => {
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
              Income Details
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
                    Service Number{" "}
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {" "}
                    Employee Name{" "}
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    {" "}
                    Reason{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {/* holidayHome name and income */}
                
                {previewData.TotalPerHH &&
                  previewData.TotalPerHH.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.HHName}
                      </TableCell>
                      <TableCell align="right">{row.TotalPrice}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography gutterBottom align="right" style={{ fontWeight: "bold" }}>
            Total Income (LKR) : {previewData && previewData.TotalPrice}
          </Typography>
        </DialogContent>
        
        <DialogActions>
          <Button autoFocus onClick={() => setIsDownload(true)}>
            Download
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default PreviewPopupIncomeReport;
