import React, { useState, useEffect } from "react";
import { ThemeProvider,Box,Stack } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import { addDays } from 'date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import theme from "../../../HomlyTheme";

export default function DatePickerCom(props) {
    const [disabledDatesArr, setDisabledDatesArr] = useState([]);

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
    props.setSelectRange({
      ...props.selectionRange,
      startDate: range.selection.startDate,
      endDate: range.selection.endDate,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack>

        </Stack>
        <DateRangePicker
          rangeColors={["#FF7F50"]}
          disabledDates={[...disabledDatesArr]}
          ranges={[props.selectionRange]}
          onChange={handleSelect}
          minDate={addDays(new Date(), 0)}
          maxDate={addDays(new Date(), 90)}
        />
      </Box>
    </ThemeProvider>
  );
}
