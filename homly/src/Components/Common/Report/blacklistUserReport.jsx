import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PreviewPopupBlacklistUserReport from "./PreviewPopupBlacklistUserReport";
import { useState } from "react";
import AxiosClient from "../../../services/AxiosClient";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BlackListUserReportPDF from "./ReportPDF/BlacklistUserReportPdf";
import ErrorSnackbar from "../../User/ErrorSnackbar"; // Import ErrorSnackbar component

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BlackListUserReport() {
  const [open, setOpen] = React.useState(false);
  const [fromDate, setFromDate] = useState(dayjs().subtract(1, "day"));
  const [toDate, setToDate] = useState(dayjs().subtract(1, "day"));
  const [previewData, setPreviewData] = useState([]);
  const [errorStatus, setErrorStatus] = useState({
    isOpen: false,
    type: "",
    message: "",
  });

  const maxDate = dayjs().subtract(1, "day");

  const handleClickOpen = () => {
    if (fromDate.isAfter(toDate)) {
      setErrorStatus({
        ...errorStatus,
        isOpen: true,
        type: "error",
        message: "From Date should be before To Date",
      });
      return;
    }

    AxiosClient.get("admin/report/blacklist", {
      params: {
        fromDate: fromDate,
        toDate: toDate,
      },
    }).then((res) => {
      console.log(res.data);
      setPreviewData(res.data);
      setOpen(true);
    });
  };

  const handleReset = () => {
    setFromDate(dayjs().subtract(1, "day"));
    setToDate(dayjs().subtract(1, "day"));
  };

  return (
    <Box sx={{ width: "70%", align: "center", flexGrow: 1, padding: "20px" }}>
      <Stack spacing={2}>
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
          <PDFDownloadLink
            document={
              <BlackListUserReportPDF
                previewData={previewData}
                fromDate={fromDate}
                toDate={toDate}
              />
            }
            fileName="blacklist_user_report.pdf"
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
        </Stack>
      </Stack>
      <PreviewPopupBlacklistUserReport
        open={open}
        setOpen={setOpen}
        previewData={previewData}
        fromDate={fromDate}
        toDate={toDate}
      />
      <ErrorSnackbar
        isOpen={errorStatus.isOpen}
        type={errorStatus.type}
        message={errorStatus.message}
        setIsOpen={(value) => setErrorStatus({ ...errorStatus, isOpen: value })}
      />
    </Box>
  );
}
