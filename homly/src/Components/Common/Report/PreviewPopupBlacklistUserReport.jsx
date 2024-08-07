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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PDFDownloadLink } from "@react-pdf/renderer";
import logo from "../../../Assets/images/logo.png";
import dayjs from "dayjs";
import BlackListUserReportPDF from "../Report/ReportPDF/BlacklistUserReportPdf";
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

const PreviewPopupBlackListUserReport = ({
  open,
  setOpen,
  previewData,
  toDate,
  fromDate,
}) => {
  const [isDownload, setIsDownload] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>
          <div>
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
              Blacklist Users Details
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
                    Service Number
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Employee Name
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Blacklisted Date
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Blacklisted Reason
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Removed Date
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Removed Reason
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {previewData &&
                  previewData.map((row) => (
                    <TableRow
                      key={row.ServiceNo}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.ServiceNo}
                      </TableCell>
                      <TableCell>{row.empName}</TableCell>
                      <TableCell>{row.BlacklistedDate}</TableCell>
                      <TableCell>{row.Addreason}</TableCell>
                      <TableCell>{row.RemovedDate}</TableCell>
                      <TableCell>{row.RemoveReason}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <PDFDownloadLink
            document={
              <BlackListUserReportPDF
                previewData={previewData}
                fromDate={fromDate}
                toDate={toDate}
              />
            }
            fileName="blacklist_user_report.pdf"
            style={{ textDecoration: "none" }}
          >
            {({ loading }) => (
              <Button
                variant="contained"
                onClick={() => setIsDownload(true)}
                disabled={loading}
              >
                {loading ? "Loading document..." : "Download"}
              </Button>
            )}
          </PDFDownloadLink>
          <Button
            autoFocus
            onClick={handleClose}
            variant="outlined"
            color="error"
          >
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default PreviewPopupBlackListUserReport;
