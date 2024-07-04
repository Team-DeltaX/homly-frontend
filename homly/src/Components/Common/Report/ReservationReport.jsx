import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PreviewPopupReservationReport from "./PreviewPopupReservationReport";
import { useState, useEffect } from "react";
import AxiosClient from "../../../services/AxiosClient";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReservationReportPDF from "./ReportPDF/ReservationReportPdf";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ReservationReport() {
  const [open, setOpen] = useState(false);
  const [holidayHome, setHolidayHome] = useState("all");
  const [fromDate, setFromDate] = useState(dayjs().subtract(1, "day"));
  const [toDate, setToDate] = useState(dayjs().subtract(1, "day"));
  const [HHNames, setHHNames] = useState([]);
  const [previewData, setPreviewData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const maxDate = dayjs().subtract(1, "day");

  const handleClickOpen = () => {
    if (fromDate.isAfter(toDate)) {
      setErrorMessage("Please enter the dates properly and try again");
      setShowError(true);
      return;
    }

    AxiosClient.get("/admin/report/reservation", {
      params: {
        HHName: holidayHome,
        fromDate: fromDate,
        toDate: toDate,
      },
    }).then((res) => {
      setPreviewData(res.data);
      setOpen(true);
    });
  };

  useEffect(() => {
    AxiosClient.get("admin/HHnames")
      .then((res) => {
        setHHNames(res.data);
      })
      .catch(() => {});
  }, []);

  const handleReset = () => {
    setFromDate(dayjs().subtract(1, "day"));
    setToDate(dayjs().subtract(1, "day"));
    setHolidayHome("all");
    setPreviewData([]);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <Box sx={{ width: "70%", align: "center", flexGrow: 1 }}>
      <Stack spacing={2}>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                Holiday Home
              </FormControl>
            </Grid>
            <Grid item xs={7}>
              <FormControl sx={{ m: 2, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label2">
                  Select Holiday Home
                </InputLabel>
                <Select
                  labelId="demo-select-small-label2"
                  id="demo-select-small"
                  value={holidayHome}
                  label="Select Holiday Home"
                  onChange={(e) => setHolidayHome(e.target.value)}
                  defaultValue="all"
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  {HHNames &&
                    HHNames.map((hh) => (
                      <MenuItem key={hh.HolidayHomeId} value={hh.HolidayHomeId}>
                        {hh.Name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                From Date
              </FormControl>
            </Grid>
            <Grid item xs={7}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="From Date"
                        value={fromDate}
                        onChange={(value) => setFromDate(value)}
                        maxDate={maxDate}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <FormControl sx={{ m: 3, minWidth: 120 }} size="small">
                To Date
              </FormControl>
            </Grid>
            <Grid item xs={7}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="To Date"
                        value={toDate}
                        onChange={(value) => setToDate(value)}
                        maxDate={maxDate}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </Item>
        <Stack spacing={4} direction="row" justifyContent="center">
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" onClick={handleClickOpen}>
            Preview
          </Button>
          {/* Add download button for downloading PDF */}
          {previewData && (
            <PDFDownloadLink
              document={
                <ReservationReportPDF
                  previewData={previewData}
                  fromDate={fromDate}
                  toDate={toDate}
                />
              }
              fileName="ReservationReport.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <Button variant="contained" disabled>
                    Loading...
                  </Button>
                ) : (
                  <Button variant="contained">Download</Button>
                )
              }
            </PDFDownloadLink>
          )}
        </Stack>
      </Stack>
      <PreviewPopupReservationReport
        open={open}
        setOpen={setOpen}
        previewData={previewData}
        fromDate={fromDate}
        toDate={toDate}
      />
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
