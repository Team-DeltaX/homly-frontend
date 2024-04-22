import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function DatePickerCom({ value, setValue }) {
  const minDate = dayjs();
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
        <DemoItem component="DateRangePicker" >
          <DateRangePicker
            minDate={minDate}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
            slotProps={{ textField: { size: 'small' } }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
