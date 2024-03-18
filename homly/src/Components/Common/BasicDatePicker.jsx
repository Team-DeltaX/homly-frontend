import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ title, date, setDate }) {
  const shouldDisableDate = (day) => {
    const today = new Date();
    const nextFiveDays = new Date();
    nextFiveDays.setDate(today.getDate() + 5);
    return day < nextFiveDays;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label={title}
          value={date}
          disablePast={true}
          // disableFuture={true}
          shouldDisableDate={shouldDisableDate}
          onChange={(newValue) => setDate(newValue)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
