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
import { useState } from "react";
import AxiosClient from "../../../services/AxiosClient";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ReservationReport() {
  const [open, setOpen] = React.useState(false);
  const [holidayHome, setHolidayHome] = useState("all");
  const [fromDate, setFromDate] = useState(dayjs().subtract(1, "day"));
  const [toDate, setToDate] = useState(dayjs().subtract(1, "day"));
  const [HHNames, setHHNames] = useState([]);
  const [previewData, setPreviewData] = useState([]);

  const maxDate = dayjs().subtract(1, "day");
  const handleClickOpen = () => {
    AxiosClient.get("/admin/report/reservation", {
      params: {
        HHName: holidayHome,
        fromDate: fromDate,
        toDate: toDate,
      },
    })
      .then((res) => {
        setPreviewData(res.data);
        setOpen(true);
      }).catch(() => {});
  };

  useEffect(() => {
    AxiosClient.get("admin/HHnames")
      .then((res) => {
        setHHNames(res.data);
      })
      .catch(() => {});
  }, []);

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setHolidayHome("");
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
                        label="Basic date picker"
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
                        label="Basic date picker"
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
        </Stack>
      </Stack>
      <PreviewPopupReservationReport
        open={open}
        setOpen={setOpen}
        previewData={previewData}
        fromDate={fromDate}
        toDate={toDate}
      />
    </Box>
  );
}
