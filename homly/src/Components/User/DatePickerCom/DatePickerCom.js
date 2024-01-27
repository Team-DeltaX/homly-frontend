import React, { useState, useEffect, useRef } from "react";
import {
  ThemeProvider,
  Box,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { DateRangePicker } from "react-date-range";
import { addDays, differenceInDays, set } from "date-fns";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePickerCom.css";

import theme from "../../../HomlyTheme";

export default function DatePickerCom(props) {
  // const [disabledDatesArr, setDisabledDatesArr] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const [dateSelectionRange, setDateSelectRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [dateRangeError, setDateRangeError] = useState(false);
  const calanderRef = useRef(null);

  // useEffect(() => {
  //   let updated = [];

  //   props.reservedDates.map((date) => {
  //     let d = new Date(date);
  //     let dates = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  //     updated.push(new Date(dates));
  //     return null;
  //   });
  //   setDisabledDatesArr(updated);
  // }, [props.reservedDates]);

  // console.log(disabledDatesArr);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (calanderRef.current && !calanderRef.current.contains(event.target)) {
        setIsDisplay(false);
        props.setSelectRange({
          ...props.selectionRange,
          startDate: dateSelectionRange.startDate,
          endDate: dateSelectionRange.endDate,
        });
      }
    }
    // Bind the event listener
    if (isDisplay) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [calanderRef, isDisplay,dateSelectionRange]);

  const handleSelect = (range) => {
    // console.log(range.selection);
    // props.setSelectRange({
    //   ...props.selectionRange,
    //   startDate: range.selection.startDate,
    //   endDate: range.selection.endDate,
    // });
    let diff = differenceInDays(
      range.selection.endDate,
      range.selection.startDate
    );
    if (diff < 4) {
      setDateSelectRange({
        ...dateSelectionRange,
        startDate: range.selection.startDate,
        endDate: range.selection.endDate,
      });
      setDateRangeError(false);
    } else {
      setDateRangeError(true);
    }
  };

  const convertDate = (date) => {
    let d = new Date(date).toDateString();
    return d;
  };

  const handleDatesConfirm = () => {
    setIsDisplay(false);
    props.setSelectRange({
      ...props.selectionRange,
      startDate: dateSelectionRange.startDate,
      endDate: dateSelectionRange.endDate,
    });
  };

  const handleDatesClose = () => {
    setIsDisplay(false);
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
              variant="standard"
              id="checkin"
              size="small"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={convertDate(props.selectionRange.startDate)}
              onFocus={() => setIsDisplay(true)}
              // onChange={}
              sx={{ marginTop: "10px" }}
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
              variant="standard"
              id="checkout"
              size="small"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={convertDate(props.selectionRange.endDate)}
              onFocus={() => setIsDisplay(true)}
              sx={{ marginTop: "10px" }}
              // onChange={}
            />
          </Stack>
        </Stack>

        <Box
          sx={{
            position: "absolute",
            display: isDisplay ? "flex" : "none",
            paddingTop: "10px",
            zIndex: 100,
          }}
        >
          <Box sx={{ position: "realative" }} ref={calanderRef}>
            <DateRangePicker
              rangeColors={["#872341"]}
              // disabledDates={[...disabledDatesArr]}
              ranges={[dateSelectionRange]}
              onChange={handleSelect}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 90)}
            />
            <Stack
              direction="row"
              sx={{
                width: "100%",
                height: "30px",
                position: "absolute",
                top: "60px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "error.dark",
                    display: dateRangeError ? "block" : "none",
                  }}
                >
                  Maximum 4 days can be booked
                </Typography>
              </Box>
              <Stack direction="row">
                {/* <Button
              
                variant="outlined"
                onClick={handleDates}
                sx={{ position: "absolute", bottom: "5px", right: "5px",height:'40px' }}
              >
                Confirm
              </Button>
              <Button
              
                variant="outlined"
                onClick={handleDates}
                sx={{ position: "absolute", bottom: "5px", right: "5px",height:'40px' }}
              >
                Confirm
              </Button> */}
                <IconButton aria-label="close" onClick={handleDatesClose}>
                  <HighlightOffIcon sx={{ color: "error.dark" }} />
                </IconButton>
                <IconButton aria-label="confirm" onClick={handleDatesConfirm}>
                  <CheckCircleOutlineIcon sx={{ color: "success.dark" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
