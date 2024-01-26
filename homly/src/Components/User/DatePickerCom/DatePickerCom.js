import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  Box,
  Stack,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import theme from "../../../HomlyTheme";
import "./DatePickerCom.css";

export default function DatePickerCom(props) {
  const [disabledDatesArr, setDisabledDatesArr] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDisplay2, setIsDisplay2] = useState(false);
  const [dateSelectionRange, setDateSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    let updated = [];
    props.reservedDates.map((date) => {
      let d = new Date(date);
      let dates = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
      updated.push(new Date(dates));
    });
    setDisabledDatesArr(updated);
  }, []);
  //   console.log(today.getFullYear(), today.getMonth() + 1, today.getDate());

  // console.log(disabledDatesArr);
  const handleSelect = (range) => {
    // console.log(range.selection);
    // props.setSelectRange({
    //   ...props.selectionRange,
    //   startDate: range.selection.startDate,
    //   endDate: range.selection.endDate,
    // });
    setDateSelectRange({
      ...dateSelectionRange,
      startDate: range.selection.startDate,
      endDate: range.selection.endDate,
    });
  };

  const convertDate = (date) => {
    let d = new Date(date).toDateString();
    return d;
  };

  const handleDates = () => {
    setIsDisplay(false);
    props.setSelectRange({
      ...props.selectionRange,
      startDate: dateSelectionRange.startDate,
      endDate: dateSelectionRange.endDate,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack direction="row" spacing={2}>
          <Stack
            direction="column"
            sx={{ width: "100%", position: "relative" }}
          >
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              Check in
            </Typography>
            <TextField
              id="checkin-checkout"
              size="small"
              fullWidth
              value={convertDate(props.selectionRange.startDate)}
              onFocus={() => setIsDisplay(true)}
              // onChange={}
            />
          </Stack>
          <Stack
            direction="column"
            sx={{ width: "100%", position: "relative" }}
          >
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              Check out
            </Typography>
            <TextField
              id="checkin-checkout"
              size="small"
              fullWidth
              value={convertDate(props.selectionRange.endDate)}
              onFocus={() => setIsDisplay(true)}
              // onChange={}
            />
          </Stack>
        </Stack>

        <Box
          sx={{ position: "absolute", display: isDisplay ? "flex" : "none" }}
        >
          <Box sx={{ position: "realative" }}>
            <DateRangePicker
              rangeColors={["#FF7F50"]}
              disabledDates={[...disabledDatesArr]}
              ranges={[dateSelectionRange]}
              onChange={handleSelect}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 90)}
              
            />
            <Stack direction='row'>
              <Button
                variant="outlined"
                onClick={handleDates}
                sx={{ position: "absolute", bottom: "5px", right: "5px" }}
              >
                Close
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
